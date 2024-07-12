"use client"


import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input, Button } from '@nextui-org/react';
import withAuth from '@/components/withAuth';
import { database } from '@/firebaseConfig';
import { ref, get, set } from 'firebase/database';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const AdminPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]); 
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentOptions, setCurrentOptions] = useState(['', '', '', '']);
  const [correctOptionIndex, setCorrectOptionIndex] = useState(0);
  const [published, setPublished] = useState(false);

  useEffect(() => {
    fetchQuestions();
    checkQuizStatus(); 
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('/api/questions');
      if (response.ok) {
        const data = await response.json();
        setQuestions(data);
      } else {
        console.error('Failed to fetch questions');
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const checkQuizStatus = async () => {
    const quizStatusRef = ref(database, 'quizStatus');
    try {
      const snapshot = await get(quizStatusRef);
      if (snapshot.exists()) {
        setPublished(snapshot.val()); 
      } else {
        console.error('No quiz status available');
      }
    } catch (error) {
      console.error('Error fetching quiz status:', error);
    }
  };

  const handleAddQuestion = async () => {
    const newQuestion: Question = {
      question: currentQuestion,
      options: currentOptions,
      answer: currentOptions[correctOptionIndex]
    };

    if (questions.some((q) => q.question === newQuestion.question)) {
      toast.error('This question already exists.');
      return;
    }

    try {
      const response = await fetch('/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newQuestion),
      });
      if (response.ok) {
        toast.success('Question added successfully');
        setCurrentQuestion('');
        setCurrentOptions(['', '', '', '']);
        setCorrectOptionIndex(0);
        fetchQuestions();  
      } else {
        toast.error('Failed to add question');
      }
    } catch (error) {
      console.error('Error adding question:', error);
      toast.error('Error adding question');
    }
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...currentOptions];
    newOptions[index] = value;
    setCurrentOptions(newOptions);
  };

  const handleCorrectOptionChange = (index: number) => {
    setCorrectOptionIndex(index);
  };

  const handleTurnOnQuiz = async () => {
    const quizStatusRef = ref(database, 'quizStatus');
    try {
      await set(quizStatusRef, true);   
      setPublished(true);  
      toast.success('Quiz has been turned on');
    } catch (error) {
      console.error('Error turning on quiz:', error);
      toast.error('Failed to turn on quiz');
    }
  };

  const handleTurnOffQuiz = async () => {
    const quizStatusRef = ref(database, 'quizStatus');
    try {
      await set(quizStatusRef, false); // Set quizStatus to false to turn off the quiz
      setPublished(false); // Update local state to reflect quiz status
      toast.success('Quiz has been turned off');
    } catch (error) {
      console.error('Error turning off quiz:', error);
      toast.error('Failed to turn off quiz');
    }
  };
  
  const handleClearQuestions = async () => {
    try {
      const response = await fetch('/api/clear', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });
      if (response.ok) {
        toast.success('Questions cleared successfully');
        setQuestions([]);
      } else {
        toast.error('Failed to clear questions');
      }
    } catch (error) {
      console.error('Error clearing questions:', error);
      toast.error('Error clearing questions');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-indigo-500">
      <h1 className='text-5xl font-bold text-white mb-8'>Manage Questions</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-8 text-center text-black">Add New Question</h1>
        <div className="mb-4">
          <Input
            label='Question'
            value={currentQuestion}
            onChange={(e) => setCurrentQuestion(e.target.value)}
            fullWidth
          />
        </div>
        {currentOptions.map((option, index) => (
          <div key={index} className='mb-4'>
            <Input
              label={`Option ${index + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              fullWidth
            />
          </div>
        ))}
        <div className="mb-4">
          <h3 className='text-lg font-bold mb-2 text-black'>Select Correct Option:</h3>
          {currentOptions.map((option, index) => (
            <div key={index} className='flex items-center mb-3'>
              <input
                type="radio"
                id={`option-${index}`}
                name="correctOption"
                checked={correctOptionIndex === index}
                onChange={() => handleCorrectOptionChange(index)}
                className="mr-2"
              />
              <label htmlFor={`option-${index}`}>{`Option ${index + 1}`}</label>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <Button onPress={handleAddQuestion} variant='ghost' color='success'>Add Question</Button>
          <Button onPress={handleClearQuestions} variant='ghost' >Clear Questions</Button>
          {published ? (
            <Button onPress={handleTurnOffQuiz} variant='ghost' >
              Turn Off Quiz
            </Button>
          ) : (
            <Button onPress={handleTurnOnQuiz} variant='ghost' color='success'>
              Turn On Quiz
            </Button>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default withAuth(AdminPage);
