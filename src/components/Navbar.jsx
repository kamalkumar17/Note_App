import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
     
      <div className="text-lg font-bold">
        Note App
      </div>

      <div className="space-x-4">
        <Link
          to="/addNote"
          className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100"
        >
          Add Note
        </Link>
        <Link
          to="/noteList"
          className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100"
        >
          View Notes
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;