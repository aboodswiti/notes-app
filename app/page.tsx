'use client';

import React from 'react';
import { useNotes } from '@/app/hooks/useNotes';
import { NoteCard } from '@/app/components/NoteCard';
import { NoteForm } from '@/app/components/NoteForm';


export default function NotesPage() {
  const { notes, isLoading, error, addNote } = useNotes();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Notes App</h1>
      
      <div>
        <NoteForm onAddNote={addNote} />
        
        {notes.length === 0 ? (
          <div className="text-center text-gray-500 bg-white shadow-md rounded-xl p-8 border border-gray-100">
            <p className="text-lg">No notes yet. Create your first note!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {notes.map((note) => (
              <NoteCard 
                key={note.id} 
                id={note.id}
                title={note.title} 
                content={note.content} 
                createdAt={note.createdAt}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}