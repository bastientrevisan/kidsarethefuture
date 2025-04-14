import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "MTB BBoying school",
  description: "Bla bla bla",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="flex justify-center">
        <div className="app w-[70%] flex relative shadow-xl/30">
          <main className="content w-full">
            <Header />
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}