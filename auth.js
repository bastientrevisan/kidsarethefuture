import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "@/libs/mongodb"
import clientPromise from "@/libs/mongodb"
import { hashPassword, verifyPassword } from "@/lib/password"

// Your own logic for dealing with plaintext password strings; be careful!
// import { saltAndHashPassword } from "@/utils/password"

async function getAdminFromDb(username, password) {
  try {
    const response = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    
    if (!response.ok) {
      throw new Error('Authentication failed');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Authentication error:', error);
    return null;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        try {
          const admin = await clientPromise.db("kidsarethefuture").collection("admins").findOne({ username: credentials.username});
          if (!admin || !admin.password) {
            // User not found or password not set
            return null;
          }

          const passwordsMatch = await verifyPassword(credentials.password, admin.password);

          if (!passwordsMatch) {
            // Passwords don't match
            return null;
          }

          // Authentication successful
          return {
            id: admin._id.toString(),
            name: admin.name,
            // Add any other user properties you want in the session
          };

        } catch (error) {
          console.error("Error during authorization:", error);
          return null; // Or throw an error to indicate a server-side issue
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id
      }
      return session
    }
  }
})