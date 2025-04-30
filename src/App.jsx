import { Routes, Route, Navigate } from "react-router-dom"; // Added Navigate import
import Navbar from "./components/Navbar";
import AddNote from "./pages/AddNote";
import NotesList from "./pages/NotesList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/addNote" />} />
          <Route path="/addNote" element={<AddNote />} />
          <Route path="/noteList" element={<NotesList />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;