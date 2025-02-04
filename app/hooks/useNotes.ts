import { useState, useEffect } from 'react';
import { Note } from '../components/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNotes = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/notes/`);
      if (!response.ok) {
        throw new Error('Failed to fetch notes');
      }
      console.log(response);
      
      const data = await response.json();
 
      setNotes(data);
      setIsLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setIsLoading(false);
    }
  };

  const addNote = async (noteData: { title: string; content: string }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/notes/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(noteData),
      });
      if (!response.ok) {
        throw new Error('Failed to add note');
      }
      await fetchNotes();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return { notes, isLoading, error, addNote, fetchNotes };
};
