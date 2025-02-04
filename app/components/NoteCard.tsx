import React from 'react';
import Link from 'next/link';
import { NoteCardProps } from './types';

export const NoteCard: React.FC<NoteCardProps> = ({ 
  id,
  title, 
  content, 
  createdAt 
}) => {
  return (
    <Link href={`/notes/${id}`} className="block">
      <div className="bg-white shadow-md rounded-xl p-5 mb-4 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.01] cursor-pointer">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-semibold text-gray-800 flex-grow pr-4">{title}</h2>
          <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full">
            {new Date(createdAt).toLocaleDateString()}
          </span>
        </div>
        <p className="text-gray-600 leading-relaxed line-clamp-2">{content}</p>
      </div>
    </Link>
  );
};