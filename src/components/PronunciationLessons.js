import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImg from '../components/back.jpg'; // Adjust the path as needed

function PronunciationLessons() {
  const [lessons] = useState([
    {
      id: 1,
      title: 'Lesson 1: Vowels',
      level: 'Beginner',
      chapters: [
        {
          title: 'Chapter 1: Introduction to Vowels',
          content: 'Vowels are speech sounds produced without any significant constriction or closure in the vocal tract.',
          pdf: '/h1.pdf', // Corrected path
          voiceNote: '/audio/voice5.mp3',
        },
        {
          title: 'Chapter 2: Short and Long Vowels',
          content: 'Short vowels are pronounced quickly and are usually found in unstressed syllables. Long vowels are held longer and often found in stressed syllables.',
          pdf: '/pdf2.pdf',
          voiceNote: '/audio/voice4.mp3',
        },
      ],
    },
    {
      id: 2,
      title: 'Lesson 2: Consonants',
      level: 'Intermediate',
      chapters: [
        {
          title: 'Chapter 1: Introduction to Consonants',
          content: 'Consonants are speech sounds produced with some degree of closure in the vocal tract.',
          pdf: '/pdf3.pdf',
          voiceNote: '/audio/voice2.mp3',
        },
      ],
    },
    {
      id: 3,
      title: 'Lesson 3: Phonetic Transcription',
      level: 'Advanced',
      chapters: [
        {
          title: 'Chapter 1: Introduction to Phonetic Transcription',
          content: 'Phonetic transcription is the visual representation of speech sounds using symbols.',
          pdf: '/pdf4.pdf',
          voiceNote: '/audio/voice1.mp3',
        },
        {
          title: 'Chapter 2: Advanced Phonetic Symbols',
          content: 'This chapter covers advanced phonetic symbols used to represent complex sounds.',
          pdf: '/pdf5.pdf',
          voiceNote: '/audio/voice8.mp3',
        },
      ],
    },
  ]);

  const [selectedLesson, setSelectedLesson] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('');
  const navigate = useNavigate();

  const handleStartLesson = (lesson) => {
    setSelectedLesson(lesson);
  };

  const handleBackToLessons = () => {
    setSelectedLesson(null);
  };

  const handleLevelChange = (e) => {
    setSelectedLevel(e.target.value);
  };

  const filteredLessons = lessons.filter((lesson) => 
    selectedLevel === '' || lesson.level === selectedLevel
  );

  return (
    <div style={{ ...styles.container, backgroundImage: `url(${backgroundImg})` }}>
      <style>
        {`
          .lesson-card {
            background-color: #f9f9f9;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border: 2px solid #007bff;
            background-image: url('../components/back.jpg');
            background-size: cover;
            background-position: center;
          }

          .lesson-card h3 {
            margin: 0 0 10px;
            color: #333;
          }

          .lesson-card p {
            margin: 0 0 10px;
            color: #555;
          }

          .button {
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            display: block;
            margin: 20px auto;
            text-align: center;
          }

          .button-start {
            background-color: #007bff;
            color: #fff;
          }

          .button-back {
            background-color: #6c757d;
            color: #fff;
          }

          .button-back-green {
            background-color: #28a745;
            color: #fff;
          }

          input[type="text"], select {
            padding: 10px;
            border-radius: 4px;
            border: 1px solid #ccc;
          }

          input[type="text"] {
            width: 60%;
            max-width: 400px;
            margin-right: 10px;
          }

          select {
            background-color: #fff;
          }
        `}
      </style>
      {!selectedLesson ? (
        <>
          <h2 style={styles.title}>Pronunciation Lessons</h2>
          <div style={styles.filters}>
            <input
              type="text"
              placeholder="Search lessons..."
            />
            <select
              value={selectedLevel}
              onChange={handleLevelChange}
            >
              <option value="">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <ul style={styles.lessonList}>
            {filteredLessons.length > 0 ? (
              filteredLessons.map((lesson) => (
                <li
                  key={lesson.id}
                  className="lesson-card"
                >
                  <h3>{lesson.title}</h3>
                  <p>Level: {lesson.level}</p>
                  <button
                    className="button button-start"
                    onClick={() => handleStartLesson(lesson)}
                  >
                    Start Lesson
                  </button>
                </li>
              ))
            ) : (
              <p style={styles.noLessons}>No lessons available for the selected level.</p>
            )}
          </ul>
          <button
            className="button button-back"
            onClick={() => navigate('/dashboard')}
          >
            Back to Dashboard
          </button>
        </>
      ) : (
        <div>
          <h2 style={styles.title}>{selectedLesson.title}</h2>
          {selectedLesson.chapters.map((chapter, index) => (
            <div
              key={index}
              className="lesson-card"
            >
              <h3>{chapter.title}</h3>
              <p>{chapter.content}</p>
              <a
                href={chapter.pdf}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.pdfLink}
              >
                Download PDF
              </a>
              <audio controls style={styles.audioPlayer}>
                <source src={chapter.voiceNote} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
          <button
            className="button button-back-green"
            onClick={handleBackToLessons}
          >
            Back to Lessons
          </button>
          <button
            className="button button-back"
            onClick={() => navigate('/dashboard')}
          >
            Back to Dashboard
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#e9ecef',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  filters: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  lessonList: {
    listStyleType: 'none',
    padding: '0',
  },
  noLessons: {
    textAlign: 'center',
    color: '#777',
  },
  pdfLink: {
    display: 'block',
    marginBottom: '10px',
    color: '#007bff',
    textDecoration: 'none',
  },
  audioPlayer: {
    width: '100%',
  },
};

export default PronunciationLessons;
