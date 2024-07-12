import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

// Resolve the path to the JSON file
const filePath = path.resolve(process.cwd(), 'public/api/questions/dsaQuestions.json');

// Function to read questions from the file
const getQuestions = () => {
    try {
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(fileContents);
    } catch (error) {
        console.error('Error reading questions:', error);
        return [];
    }
};

// Function to write questions to the file
const writeQuestions = (data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
     } catch (error) {
        console.error('Error writing questions:', error);
    }
};

// Handler for the GET request
export async function GET() {
    const questions = getQuestions();
    return NextResponse.json(questions);
}

// Handler for the POST request
export async function POST(request) {
    const newQuestion = await request.json();

    if (!newQuestion.question || !newQuestion.options || !newQuestion.answer) {
        return NextResponse.json({ message: 'Question, options, and answer are required' }, { status: 400 });
    }

    const questions = getQuestions();
    questions.push(newQuestion);
    writeQuestions(questions);

    return NextResponse.json({ message: 'Question added successfully' }, { status: 200 });
}

// Handler for the DELETE request to clear the JSON data
export async function DELETE() {
    try {
        writeQuestions([]); // Clear the questions by writing an empty array
         return NextResponse.json({ message: 'Questions cleared successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error clearing questions:', error);
        return NextResponse.json({ message: 'Error clearing questions' }, { status: 500 });
    }
}
