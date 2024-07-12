// AreasPage.js
"use client"

import withAuth from '@/components/withAuth';
import Link from 'next/link';

const AreasPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/4 m-4">
                <Link href="/dsaNotes">
                    <div className="cursor-pointer block bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded">
                        DSA Area
                    </div>
                </Link>
            </div>
            <div className="w-1/4 m-4">
                <Link href="/cloudNotes">
                    <div className="cursor-pointer block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded">
                        Cloud Area
                    </div>
                </Link>
            </div>
            <div className="w-1/4 m-4">
                <Link href="/webNotes">
                    <div className="cursor-pointer block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded">
                        Web Area
                    </div>
                </Link>
            </div>
            <div className="w-1/4 m-4">
                <Link href="/appNotes">
                    <div className="cursor-pointer block bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded">
                        App Area
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default withAuth(AreasPage);
