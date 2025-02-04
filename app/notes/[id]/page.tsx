import BackButton from '@/app/components/BackButton';
import { Note } from '@/app/components/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';


async function getNoteById(id: string): Promise<Note | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/notes/${id}`);

    if (!res.ok) {
      console.error(`Failed to fetch note. Status: ${res.status}`);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching note:", error);
    return null;
  }
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await the params to extract id
  const { id } = await params;
  const note = await getNoteById(id);

  if (!note) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-600">
        <div className="text-center">
          <p className="text-2xl font-semibold mb-4">⚠️ Note Not Available</p>
          <p className="text-gray-500">
            The requested note does not exist or the server is unavailable.
          </p>
          <div className="mt-4">
            <BackButton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br p-4">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all hover:scale-105 duration-300 ease-in-out">
        <div className="p-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {note.title}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 border-l-4 border-blue-500 pl-4">
            {note.content}
          </p>
          <div className="text-sm text-gray-500 italic">
            Created on {new Date(note.createdAt).toLocaleDateString()}
          </div>
          <div className="mt-6">
            <BackButton />
          </div>
        </div>
      </div>
    </div>
  );
}