import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useNotesStore = create(
  combine(
    {
      notes: {} 
    },
    (set) => ({
      addNote: (text) =>
        set((state) => {
          const id = crypto.randomUUID();
          return {
            notes: {
              ...state.notes,
              [id]: {
                id,
                text,
                createdAt: Date.now()
              }
            }
          };
        }),

      deleteNote: (id) =>
        set((state) => {
          const updated = { ...state.notes };
          delete updated[id];
          return { notes: updated };
        })
    })
  )
);
