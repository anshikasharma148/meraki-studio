import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, headerVariant = "light" }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header variant={headerVariant} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
