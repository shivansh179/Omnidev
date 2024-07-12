"use client"

import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../../firebaseConfig'; // Make sure you have initialized Firebase

const UploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [chapter, setChapter] = useState('');
  const [topic, setTopic] = useState('');

  const storage = getStorage(app);
  const firestore = getFirestore(app);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0] || null;
    setFile(uploadedFile);
  };

  const handleUpload = async () => {
    if (!file || !chapter || !topic) {
      alert('Please select a file, chapter, and topic.');
      return;
    }

    try {
      const fileId = uuidv4(); // Generate a unique ID for the file
      const storageRef = ref(storage, `notes/${chapter}/${topic}/${fileId}.pdf`);

      // Upload file
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        () => {}, // Progress handler (can be used to show upload progress)
        (error) => {
          console.error('Error uploading file:', error);
          alert('Failed to upload file. Please try again later.');
        },
        async () => {
          // Get download URL after upload completes
          const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);

          // Store metadata in Firestore
          await addDoc(collection(firestore, 'notes'), {
            chapter,
            topic,
            fileId,
            downloadUrl,
            createdAt: new Date(),
          });

          alert('File uploaded successfully!');
          setFile(null);
          setChapter('');
          setTopic('');
        }
      );
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload file. Please try again later.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Upload Notes</h1>
      <input type="file" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Chapter Name"
        className="border p-2 mt-2"
        value={chapter}
        onChange={(e) => setChapter(e.target.value)}
      />
      <input
        type="text"
        placeholder="Topic Name"
        className="border p-2 mt-2"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button onClick={handleUpload} className="bg-blue-500 text-white p-2 mt-4 rounded hover:bg-blue-600">
        Upload File
      </button>
    </div>
  );
};

export default UploadPage;


