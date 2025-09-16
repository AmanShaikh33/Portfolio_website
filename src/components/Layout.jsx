import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-20">
        {children}
      </div>
    </div>
  );
};

export default Layout;
