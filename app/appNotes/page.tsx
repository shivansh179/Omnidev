"use client";

import React, { useEffect, useState } from 'react';
import { getFirestore, collection, query, where, getDocs, DocumentData } from 'firebase/firestore';
import { app } from '@/firebaseConfig';  
import withAuth from '@/components/withAuth';

const AppNotesPage = () => {
  const [appNotes, setAppNotes] = useState<DocumentData[]>([]);  

  useEffect(() => {
    const fetchAppNotes = async () => {
      const firestore = getFirestore(app);
      const q = query(collection(firestore, 'notes'), where('course', '==', 'App'));

      try {
        const querySnapshot = await getDocs(q);
        const notesData = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id, // Optionally include document ID for each note
        }));
        setAppNotes(notesData);
      } catch (error) {
        console.error('Error fetching App notes:', error);
      }
    };

    fetchAppNotes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-4xl w-full p-6">
        {appNotes.length > 0 ? (
          <>
            <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">App Notes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {appNotes.map((note: any, index: number) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex justify-between items-center transition-transform transform hover:scale-105 cursor-pointer" onClick={() => window.open(note.downloadUrl, '_blank')}>
                  <div className="w-3/4">
                    <span className="text-lg text-blue-600 font-semibold">
                      {note.topic}
                    </span>
                  </div>
                  <div className="w-1/4 text-right">
                    <span className="text-gray-500 text-sm">
                      {note.createdAt && note.createdAt.toDate().toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Nothing to show</h2>
            <p className="text-gray-500">No notes are available for the App course at the moment.</p>
            <img src="/nothingtoshow.jpg" alt="No data" className="mt-6 w-1/2 mx-auto" />
          </div>
        )}
      </div>
    </div>
  );
};

export default withAuth(AppNotesPage);
