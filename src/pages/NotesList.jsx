import { useEffect, useState } from "react";
import { getNotes } from "../utils/storage";

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    try {
      setLoading(true); // Start loading when component mounts
      const fetchedNotes = getNotes();
      setNotes(fetchedNotes);
      setLoading(false); 
    } catch (err) {
      setError("Failed to load notes."); // Why display error banner: Inform user of storage failure
      setLoading(false); // Stop loading even if there's an error
    }
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Notes</h2>

      {/* Error Banner */}
      {error && (
        <div className="bg-red-500 text-white p-2 rounded mb-4">
          {error}
        </div>
      )}

      {/* Loading State */}
      {loading ? (
        <p>Loading...</p> 
      ) : notes.length === 0 ? (
        <p>No notes available.</p>
      ) : (
        <ul className="space-y-2">
          {notes.map((note, index) => (
            <li key={index} className="p-2 border rounded">
              <h3 className="font-bold">{note.title}</h3>
              <p>{note.content.substring(0, 50)}...</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotesList;