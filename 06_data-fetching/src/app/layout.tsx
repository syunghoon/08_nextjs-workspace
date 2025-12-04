import "./globals.css";
import { Header, Navigator, Footer } from "@/components/layouts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex flex-col min-h-screen">
        <Header />
        <Navigator />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-10">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
