import React from "react";

const Header = ({ selectedSubject, className }) => {
  return (
    <header className={`p-4 text-xl font-bold ${className}`}>
      {selectedSubject || "Select a Subject"}
    </header>
  );
};

export default Header;
