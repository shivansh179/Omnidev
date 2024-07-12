// DSANotesPage.js
"use client"

import React, { useEffect, useState } from 'react';
import { getFirestore, collection, query, where, getDocs, DocumentData } from 'firebase/firestore';
import { app } from '@/firebaseConfig'; // Ensure Firebase is initialized
import withAuth from '@/components/withAuth';

const WEBNotesPage = () => {
  const [webNotes, setWEBNotes] = useState<DocumentData[]>([]); // Initialize state with DocumentData[]

  useEffect(() => {
    const fetchWEBNotes = async () => {
      const firestore = getFirestore(app);
      const q = query(collection(firestore, 'notes'), where('course', '==', 'Web'));

      try {
        const querySnapshot = await getDocs(q);
        const notesData = querySnapshot.docs.map(doc => doc.data());
        setWEBNotes(notesData);
      } catch (error) {
        console.error('Error fetching WEB notes:', error);
      }
    };

    fetchWEBNotes();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">WEB Notes</h1>
      <div className="grid grid-cols-2 gap-4">
        {webNotes.map((note: any, index: number) => (
          <div key={index} className="border p-4 flex justify-between">
            <div className="w-3/4">
              <span className="text-blue-500">
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
    </div>
  );
};

export default  withAuth(WEBNotesPage);
