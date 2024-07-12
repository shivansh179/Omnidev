import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const filePath = path.resolve('./public/api/questions/dsaQuestions.json');

const getQuestions = () => {
    try {
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(fileContents);
    } catch (error) {
        console.error('Error reading questions:', error);
        return [];
    }
};

const writeQuestions = (data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
     } catch (error) {
        console.error('Error writing questions:', error);
    }
};

export async function GET() {
    const questions = getQuestions();
    return NextResponse.json(questions);
}

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
