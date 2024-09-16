import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// Import your background image
import backgroundImage from '../components/back.jpg'; // Adjust the path as necessary
// Paths updated to reflect files in the public directory
const voiceNotes = [
  { id: 1, title: 'Introduction to English Pronunciation', src: '/audio/voice1.mp3', description: 'Learn the basics of English pronunciation.' },
  { id: 2, title: 'Common Greetings and Responses', src: '/audio/voice2.mp3', description: 'Practice common greetings and responses.' },
  { id: 3, title: 'English Tense Usage', src: '/audio/voice3.mp3', description: 'Understand the usage of different tenses in English.' },
  { id: 4, title: 'Ordering Food at a Restaurant', src: '/audio/voice4.mp3', description: 'Simulate ordering food and drinks in a restaurant.' },
  { id: 5, title: 'Travel Vocabulary', src: '/audio/voice5.mp3', description: 'Learn essential vocabulary for traveling.' },
  { id: 6, title: 'Making Phone Calls', src: '/audio/voice6.mp3', description: 'Practice phrases for making and receiving phone calls.' },
  { id: 7, title: 'Asking for Directions', src: '/audio/voice7.mp3', description: 'Learn how to ask for and give directions.' },
  { id: 8, title: 'Discussing Hobbies', src: '/audio/voice8.mp3', description: 'Talk about your hobbies and interests in English.' },
  { id: 9, title: 'Describing People and Places', src: '/audio/voice9.mp3', description: 'Practice describing people and places in detail.' },
  { id: 10, title: 'Giving Opinions', src: '/audio/voice10.mp3', description: 'Learn how to give and ask for opinions in conversations.' }
];

const LessonContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  background-image: url(${backgroundImage}); /* Use the imported image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const LessonTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
`;

const NoteList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NoteItem = styled.li`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const NoteTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const NoteDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const AudioPlayer = styled.audio`
  width: 100%;
  margin-top: 10px;
`;

const BackButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

function SpeechLessons() {
  const [currentAudio, setCurrentAudio] = useState(null);
  const navigate = useNavigate();

  const handlePlay = (src) => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    const audio = new Audio(src);
    setCurrentAudio(audio);
    audio.play();
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <LessonContainer>
      <LessonTitle>Interactive Speech Lessons</LessonTitle>
      <NoteList>
        {voiceNotes.map((note) => (
          <NoteItem key={note.id}>
            <NoteTitle>{note.title}</NoteTitle>
            <NoteDescription>{note.description}</NoteDescription>
            <AudioPlayer controls>
              <source src={note.src} type="audio/mpeg" />
              Your browser does not support the audio element.
            </AudioPlayer>
          </NoteItem>
        ))}
      </NoteList>
      <BackButton onClick={handleBack}>Back to Dashboard</BackButton>
    </LessonContainer>
  );
}

export default SpeechLessons;
