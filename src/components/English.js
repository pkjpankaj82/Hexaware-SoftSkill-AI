import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../components/report.avif'; // Adjust the path as necessary

function LearningPath() {
  const navigate = useNavigate();
  const [currentScreen, setCurrentScreen] = useState('main');
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [filter, setFilter] = useState('');

  const handleStartLesson = (lesson) => {
    setSelectedLesson(lesson);
    setCurrentChapter(0);
    setCurrentScreen('detail');
  };

  const handleCompleteLesson = () => {
    setCurrentScreen('completion');
  };

  const handleNextChapter = () => {
    setCurrentChapter((prev) => Math.min(prev + 1, chapters.length - 1));
  };

  const handlePreviousChapter = () => {
    setCurrentChapter((prev) => Math.max(prev - 1, 0));
  };

  const handleNextLesson = () => {
    setCurrentScreen('main');
    setSelectedLesson(null);
    setCurrentChapter(0);
  };

  const handleReviewLesson = () => {
    setCurrentScreen('content');
  };

  const filteredLessons = lessons.filter((lesson) =>
    filter ? lesson.level === filter : true
  );

  return (
    <div style={styles.container}>
      {currentScreen === 'main' && (
        <div style={styles.mainScreen}>
          <h1 style={styles.header}>Vocabulary Lessons</h1>
          <div style={styles.searchFilter}>
            <input
              type="text"
              placeholder="Search lessons"
              style={styles.searchBar}
            />
            <div style={styles.filters}>
              <label style={styles.filterLabel}>
                <input
                  type="checkbox"
                  checked={filter === 'Beginner'}
                  onChange={() => setFilter(filter === 'Beginner' ? '' : 'Beginner')}
                />
                Beginner
              </label>
              <label style={styles.filterLabel}>
                <input
                  type="checkbox"
                  checked={filter === 'Intermediate'}
                  onChange={() => setFilter(filter === 'Intermediate' ? '' : 'Intermediate')}
                />
                Intermediate
              </label>
              <label style={styles.filterLabel}>
                <input
                  type="checkbox"
                  checked={filter === 'Advanced'}
                  onChange={() => setFilter(filter === 'Advanced' ? '' : 'Advanced')}
                />
                Advanced
              </label>
            </div>
          </div>
          <ul style={styles.lessonList}>
            {filteredLessons.map((lesson, index) => (
              <li key={index} style={styles.lessonItem}>
                <h2 style={styles.lessonTitle}>{lesson.title}</h2>
                <p style={styles.lessonDescription}>{lesson.description}</p>
                <span style={styles.level}>{lesson.level}</span>
                <button onClick={() => handleStartLesson(lesson)} style={styles.button}>
                  Start Lesson
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {currentScreen === 'detail' && selectedLesson && (
        <div style={styles.detailScreen}>
          <h1 style={styles.detailTitle}>{selectedLesson.title}</h1>
          <p style={styles.detailDescription}>{selectedLesson.description}</p>
          <span style={styles.level}>{selectedLesson.level}</span>
          <button onClick={() => setCurrentScreen('content')} style={styles.button}>
            Start Lesson
          </button>
        </div>
      )}

      {currentScreen === 'content' && (
        <div style={styles.contentScreen}>
          <h1 style={styles.contentTitle}>{selectedLesson.title}</h1>
          <p style={styles.chapterContent}>{chapters[currentChapter].content}</p>
          <div style={styles.navigation}>
            <button
              onClick={handlePreviousChapter}
              style={styles.button}
              disabled={currentChapter === 0}
            >
              Previous
            </button>
            <button
              onClick={handleNextChapter}
              style={styles.button}
              disabled={currentChapter === chapters.length - 1}
            >
              Next
            </button>
          </div>
          <a href={chapters[currentChapter].pdf} target="_blank" rel="noopener noreferrer">
            <button style={styles.button}>
              Download PDF
            </button>
          </a>
          <button onClick={handleCompleteLesson} style={styles.button}>
            Complete Lesson
          </button>
        </div>
      )}

      {currentScreen === 'completion' && (
        <div style={styles.completionScreen}>
          <h1 style={styles.completionTitle}>Congratulations!</h1>
          <p style={styles.completionMessage}>You have completed the lesson.</p>
          <button onClick={handleReviewLesson} style={styles.button}>
            Review Lesson
          </button>
          <button onClick={handleNextLesson} style={styles.button}>
            Next Lesson
          </button>
          <button onClick={() => navigate('/dashboard')} style={styles.button}>
            Back to Dashboard
          </button>
        </div>
      )}
    </div>
  );
}

const lessons = [
  { title: 'Lesson 1', description: 'Introduction to Basic Vocabulary', level: 'Beginner' },
  { title: 'Lesson 2', description: 'Intermediate Vocabulary Building', level: 'Intermediate' },
  { title: 'Lesson 3', description: 'Advanced Vocabulary Techniques', level: 'Advanced' },
];

const chapters = [
  { content: 'Chapter 1: Introduction to Basic Vocabulary.\nContent includes definitions, examples, and exercises.', pdf: '/h1.pdf' },
  { content: 'Chapter 2: Expanding Basic Vocabulary.\nLearn additional words and their usage in sentences.', pdf: '/pdf2.pdf' },
  { content: 'Chapter 3: Vocabulary in Context.\nSee how vocabulary is used in various contexts.', pdf: '/pdf3.pdf' },
];

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  mainScreen: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #333',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  },
  header: {
    fontSize: '2.5em',
    color: '#333',
    marginBottom: '20px',
  },
  searchFilter: {
    marginBottom: '20px',
  },
  searchBar: {
    padding: '10px',
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto 10px',
    borderRadius: '5px',
    border: '1px solid #333',
    fontSize: '16px',
  },
  filters: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '10px',
  },
  filterLabel: {
    fontSize: '16px',
    margin: '0 10px',
  },
  lessonList: {
    listStyleType: 'none',
    padding: '0',
  },
  lessonItem: {
    marginBottom: '20px',
    padding: '15px',
    border: '1px solid #333',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    transition: 'box-shadow 0.3s ease',
  },
  lessonTitle: {
    fontSize: '1.5em',
    margin: '0',
    color: '#007bff',
  },
  lessonDescription: {
    fontSize: '1em',
    color: '#555',
  },
  level: {
    display: 'block',
    marginTop: '10px',
    fontWeight: 'bold',
    color: '#666',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '5px',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
  detailScreen: {
    textAlign: 'center',
  },
  detailTitle: {
    fontSize: '2em',
    color: '#333',
  },
  detailDescription: {
    fontSize: '1.2em',
    color: '#555',
  },
  contentScreen: {
    textAlign: 'center',
  },
  contentTitle: {
    fontSize: '2em',
    color: '#333',
  },
  chapterContent: {
    fontSize: '1.2em',
    color: '#555',
    margin: '20px 0',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '20px',
  },
  completionScreen: {
    textAlign: 'center',
  },
  completionTitle: {
    fontSize: '2.5em',
    color: '#28a745',
  },
  completionMessage: {
    fontSize: '1.2em',
    color: '#333',
    margin: '20px 0',
  },
};

export default LearningPath;
