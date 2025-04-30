# Note Making App

This is a simple note-making application built with React. It allows users to add notes and view a list of saved notes. The app uses `localStorage` for persistent storage.

## Features
- **Add Note**: Users can add a note with a title and content.
- **View Notes**: Users can view a list of saved notes, including the title and a snippet of the content.
- **Persistent Storage**: Notes are saved in `localStorage` to persist across page reloads.

---

## Why localStorage + Key Naming
- **localStorage**: Chosen for its simplicity and ability to persist data across sessions without requiring a backend.
- **Key Naming**: A specific key (e.g., `notes`) is used to store all notes in a structured format, making it easy to retrieve and update.

---

## Components

### AddNote Component
**File**: `AddNote.jsx`

This component allows users to add a new note. It uses controlled inputs for the title and content fields. On form submission, the note is saved to `localStorage`, and the displayed list of notes is updated.


// Why I chose useState + this submit handler: useState simplifies managing form inputs, and the submit handler ensures notes are saved and the UI is updated.