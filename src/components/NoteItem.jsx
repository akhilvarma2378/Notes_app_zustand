import { useNotesStore } from "../stores/notesStore";

export default function NoteItem({ id }) {

  const note = useNotesStore(
    (state) => state.notes[id]      
  );

  const deleteNote = useNotesStore(
    (state) => state.deleteNote
  );

  if (!note) return null;  

  function deleteHandler() {
    deleteNote(id);
  }

  return (
    <>
      <p>{note.text}</p>
      <button onClick={deleteHandler}>Delete</button>
    </>
  );
}
