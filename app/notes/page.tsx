// AreasPage.js
"use client";

import withAuth from '@/components/withAuth';
import Link from 'next/link';

const AreasPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex items-center justify-center p-4">
            <div className="bg-white bg-opacity-90 p-10 rounded-lg shadow-lg text-center">
                <h1 className="text-4xl font-extrabold mb-8 text-gray-800">Areas</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link href="/dsaNotes">
                        <div className="cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded shadow-lg transition-transform transform hover:scale-105">
                            DSA Area
                        </div>
                    </Link>
                    <Link href="/cloudNotes">
                        <div className="cursor-pointer bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded shadow-lg transition-transform transform hover:scale-105">
                            Cloud Area
                        </div>
                    </Link>
                    <Link href="/webNotes">
                        <div className="cursor-pointer bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 px-6 rounded shadow-lg transition-transform transform hover:scale-105">
                            Web Area
                        </div>
                    </Link>
                    <Link href="/appNotes">
                        <div className="cursor-pointer bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-6 rounded shadow-lg transition-transform transform hover:scale-105">
                            App Area
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default withAuth(AreasPage);
