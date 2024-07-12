import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  const { title, url, date, course } = await request.json();

  if (!title || !url || !date || !course) {
    return NextResponse.json({ message: 'Title, URL, Date, and Course are required' }, { status: 400 });
  }

  const filePath = path.resolve(process.cwd(), 'public', `${course}.json`);
  let videos = [];

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    videos = JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading video file:', error);
  }

  videos.push({ title, url, date });

  try {
    fs.writeFileSync(filePath, JSON.stringify(videos, null, 2));
    return NextResponse.json({ message: 'Video added successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error writing video file:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
