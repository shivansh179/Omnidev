

"use client"

import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '@/firebaseConfig'; // Make sure you have initialized Firebase
import withAuth from '@/components/withAuth';

const UploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [course, setCourse] = useState('');
  const [topic, setTopic] = useState('');

  const storage = getStorage(app);
  const firestore = getFirestore(app);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0] || null;
    setFile(uploadedFile);
  };

  const handleUpload = async () => {
    if (!file || !course || !topic) {
      alert('Please select a file, course, and topic.');
      return;
    }

    try {
      const fileId = uuidv4(); // Generate a unique ID for the file
      const storageRef = ref(storage, `notes/${course}/${topic}/${fileId}.pdf`);

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
            course,
            topic,
            fileId,
            downloadUrl,
            createdAt: new Date(),
          });

          alert('File uploaded successfully!');
          setFile(null);
          setCourse('');
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
      <select
        className="border p-2 mt-2"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      >
        <option value="" disabled>Select Course</option>
        <option value="DSA">DSA</option>
        <option value="Cloud">Cloud</option>
        <option value="Web">Web</option>
        <option value="App">App</option>
      </select>
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

export default withAuth(UploadPage);
