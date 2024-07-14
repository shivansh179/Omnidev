// CloudNotesPage.js
"use client";

import React, { useEffect, useState } from 'react';
import { getFirestore, collection, query, where, getDocs, DocumentData } from 'firebase/firestore';
import { app } from '@/firebaseConfig'; // Ensure Firebase is initialized
import withAuth from '@/components/withAuth';

const CloudNotesPage = () => {
  const [cloudNotes, setCloudNotes] = useState<DocumentData[]>([]);
  const length = cloudNotes.length;

  useEffect(() => {
    const fetchCloudNotes = async () => {
      const firestore = getFirestore(app);
      const q = query(collection(firestore, 'notes'), where('course', '==', 'Cloud'));

      try {
        const querySnapshot = await getDocs(q);
        const notesData = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id, // Optionally include document ID for each note
        }));

        setCloudNotes(notesData);
      } catch (error) {
        console.error('Error fetching Cloud notes:', error);
      }
    };

    fetchCloudNotes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-4xl w-full p-6">
        {length > 0 ? (
          <>
            <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Cloud Notes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {cloudNotes.map((note: any, index: number) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex justify-between items-center transition-transform transform hover:scale-105 cursor-pointer">
                  <div className="w-full">
                    <span className="text-lg text-blue-600 font-semibold block mb-2">
                      {note.topic}
                    </span>
                    <span className="text-gray-500 text-sm block">
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
            <p className="text-gray-500">No notes are available for the Cloud course at the moment.</p>
            <img src="/nothingtoshow.jpg" alt="No data" className="mt-6 w-1/2 mx-auto" />
          </div>
        )}
      </div>
    </div>
  );
};

export default withAuth(CloudNotesPage);
