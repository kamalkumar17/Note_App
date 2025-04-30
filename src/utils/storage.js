export const getNotes = () => {
    try {
      const notes = JSON.parse(localStorage.getItem("notes")) || [];
      return notes;
    } catch (error) {
      console.error("Failed to read from localStorage:", error);
      return [];
    }
  };
  
  export const saveNote = (note) => {
    try {
      const notes = getNotes();
      notes.push(note);
      localStorage.setItem("notes", JSON.stringify(notes));
    } catch (error) {
      console.error("Failed to write to localStorage:", error);
      throw new Error("Storage quota exceeded");
    }
  };