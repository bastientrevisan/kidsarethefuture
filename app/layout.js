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
        <div className="app w-[70%] shadow-xl/30 h-fit">
          <Header />
          <main className="content size-full min-h-120">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}