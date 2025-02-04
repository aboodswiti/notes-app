import React, { useState } from 'react';

interface NoteFormProps {
  onAddNote: (note: { title: string; content: string }) => void;
}

export const NoteForm: React.FC<NoteFormProps> = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onAddNote({ title, content });
      setTitle('');
      setContent('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white text-gray-500 shadow-md rounded-xl p-6 mb-6 border border-gray-100 transition-all duration-300 hover:shadow-lg"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
        className="w-full text-gray-500 p-3 mb-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note Content"
        className="w-full p-3 mb-4 border border-gray-200 rounded-lg min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      />
      <button 
        type="submit" 
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Add Note
      </button>
    </form>
  );
};