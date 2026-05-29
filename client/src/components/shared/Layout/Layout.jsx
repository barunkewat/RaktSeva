import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-8 sm:pb-12 overflow-x-hidden">
        {children}
      </div>
    </>
  );
}
