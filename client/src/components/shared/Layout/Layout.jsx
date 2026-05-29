import { useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <Navbar
        onToggleSidebar={handleToggleSidebar}
        isSidebarOpen={sidebarOpen}
      />

      <div className="flex gap-8">
        <Sidebar isOpen={sidebarOpen} />

        <div className="flex-1 px-10">
          {children}
        </div>
      </div>
    </>
  );
}