import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full overflow-x-hidden">{children}</main>
      <Footer />
    </>
  );
}
