"use client"

import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '@/firebaseConfig';
import { Orbitronn } from '@/config/fonts';
import { Button } from '@nextui-org/react';
import * as XLSX from 'xlsx';
import withAuth from '@/components/withAuth';

interface UserScore {
    email: string;
    name: string;
    score: number;
}

const UserScoresPage = () => {
    const [userScores, setUserScores] = useState<UserScore[]>([]);

    useEffect(() => {
        const fetchUserScores = async () => {
            try {
                const scoresCollection = collection(firestore, 'UserScores');
                const scoresSnapshot = await getDocs(scoresCollection);
                const scoresData = scoresSnapshot.docs.map(doc => ({
                    email: doc.id,
                    name: doc.data().name,
                    score: doc.data().score
                }));
                setUserScores(scoresData);
            } catch (error) {
                console.error('Error fetching user scores:', error);
            }
        };

        fetchUserScores();
    }, []);

    const downloadAsExcel = () => {
        const ws = XLSX.utils.json_to_sheet(userScores);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "User Scores");

        XLSX.writeFile(wb, "UserScores.xlsx");
    };

    return (
        <div>
            <div className='text-3xl font-bold'>
                <div className={Orbitronn.className}>
                    User Scores
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='mt-16 ml-5'>
                    <table className='table-auto'>
                        <thead>
                            <tr>
                                <th className='border px-4 py-2'>Email</th>
                                <th className='border px-4 py-2'>Name</th>
                                <th className='border px-4 py-2'>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userScores.map((userScore, index) => (
                                <tr key={index}>
                                    <td className='border px-4 py-2'>{userScore.email}</td>
                                    <td className='border px-4 py-2'>{userScore.name}</td>
                                    <td className='border px-4 py-2'>{userScore.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <Button onClick={() => window.location.reload()} variant='ghost' color='success' className='w-32'>
                    Refresh
                </Button>
            </div>
            <div className='flex justify-center mt-5'>
                <Button onClick={downloadAsExcel} variant='ghost' color='primary' className='w-32'>
                    Download
                </Button>
            </div>
        </div>
    );
};

export default  withAuth(UserScoresPage);
