import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import backgroundImg from '../components/back.jpg';
const questions = {
  Vocabulary: [
    { question: "Choose the correct article: ___ cat is on the roof.", options: ["A", "An", "The", "Some"], correct: "The" },
    { question: "Select the correct plural form: One child, two ___.", options: ["childs", "children", "childes", "child"], correct: "children" },
    { question: "Which is the correct comparative form?", options: ["gooder", "better", "best", "good"], correct: "better" },
    { question: "Select the correct possessive form: This is ___ book.", options: ["hers", "her", "she", "herself"], correct: "her" },
    { question: "Which sentence is correct?", options: ["I have never ate sushi.", "I have never eaten sushi.", "I never have eaten sushi.", "I never ate sushi."], correct: "I have never eaten sushi." }
  ],
  Speech: [
    { question: "Which sentence is correct?", options: ["I goes to school", "I go to school", "I going to school", "I gone to school"], correct: "I go to school" },
    { question: "Choose the correct form of the verb.", options: ["He run fast", "He running fast", "He runs fast", "He ran fast"], correct: "He runs fast" },
    { question: "Which sentence is in the past tense?", options: ["She reads a book.", "She is reading a book.", "She will read a book.", "She read a book."], correct: "She read a book." },
    { question: "Choose the correct preposition: She is interested ___ learning.", options: ["to", "in", "on", "for"], correct: "in" },
    { question: "Which sentence uses correct subject-verb agreement?", options: ["The dog run fast.", "The dogs runs fast.", "The dog runs fast.", "The dogs run fast."], correct: "The dog runs fast." }
  ],
  Pronunciation: [
    { question: "Select the proper tense: She ___ to the store.", options: ["going", "goes", "went", "gone"], correct: "goes" },
    { question: "Which sentence uses proper punctuation?", options: ["I have apples, oranges, and bananas.", "I have apples oranges, and bananas.", "I have apples oranges and bananas", "I have, apples, oranges and bananas."], correct: "I have apples, oranges, and bananas." },
    { question: "Which sentence is correct?", options: ["Its raining outside.", "It's raining outside.", "Its raining outside", "It raining outside."], correct: "It's raining outside." },
    { question: "Choose the correct conjunction: I want to go, ___ I am too tired.", options: ["but", "so", "because", "if"], correct: "but" },
    { question: "Which is the correct form?", options: ["She can sings well.", "She can sing well.", "She can singing well.", "She can sing good."], correct: "She can sing well." }
  ]
};

const TestContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 600px;
  margin: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
`;

const TestTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Timer = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

const Question = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionButton = styled.button`
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #e0e0e0;
  }

  &.selected {
    background-color: #007bff;
    color: white;
  }
`;

const SubmitButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  
  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
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

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

const FilterButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const filterOptions = ["Vocabulary", "Speech", "Pronunciation"];

function Test() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Vocabulary');
  const [filteredQuestions, setFilteredQuestions] = useState(questions[selectedFilter]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    if (timer > 0 && !isTimeUp) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (timer === 0) {
      setIsTimeUp(true);
      handleSubmit();
    }
  }, [timer, isTimeUp]);

  useEffect(() => {
    // Filter questions based on search term and selected filter
    const filtered = questions[selectedFilter].filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredQuestions(filtered);
    setCurrentQuestionIndex(0); // Reset to first question after filter change
  }, [searchTerm, selectedFilter]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === filteredQuestions[currentQuestionIndex].correct) {
      setScore(prev => prev + 1);
    }
    setSelectedOption('');
    setTimer(10);
    setIsTimeUp(false);

    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Save the test result
      const feedback = getFeedback(score);
      saveTestResult(score, feedback);
      alert(`Test complete! Your score is ${score}/${filteredQuestions.length}. ${feedback}`);
      navigate('/dashboard'); // Redirect to dashboard
    }
  };

  const handleBack = () => {
    navigate('/dashboard'); // Redirect to dashboard
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setSearchTerm(''); // Clear search term when filter changes
  };

  const getFeedback = (score) => {
    const percentage = (score / filteredQuestions.length) * 100;
    if (percentage >= 80) return 'Very good';
    if (percentage >= 60) return 'Good';
    return 'Average';
  };

  const saveTestResult = (score, feedback) => {
    const results = JSON.parse(localStorage.getItem('testResults')) || [];
    const newResult = {
      date: new Date().toISOString(),
      score,
      feedback,
    };
    results.push(newResult);
    localStorage.setItem('testResults', JSON.stringify(results));
  };

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  return (
    <TestContainer>
      <TestTitle>English Grammar Test</TestTitle>
      <FilterContainer>
        {filterOptions.map(option => (
          <FilterButton
            key={option}
            onClick={() => handleFilterChange(option)}
            style={{ backgroundColor: selectedFilter === option ? '#0056b3' : '#007bff' }}
          >
            {option}
          </FilterButton>
        ))}
      </FilterContainer>
      <SearchBar
        type="text"
        placeholder="Search questions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Timer>Time Remaining: {timer} seconds</Timer>
      {currentQuestion ? (
        <QuestionContainer>
          <Question>Question {currentQuestionIndex + 1}: {currentQuestion.question}</Question>
          <OptionsContainer>
            {currentQuestion.options.map((option, index) => (
              <OptionButton
                key={index}
                onClick={() => handleOptionChange(option)}
                className={selectedOption === option ? 'selected' : ''}
              >
                {option}
              </OptionButton>
            ))}
          </OptionsContainer>
        </QuestionContainer>
      ) : (
        <p>No questions available</p>
      )}
      <SubmitButton
        onClick={handleSubmit}
        disabled={!selectedOption}
      >
        Submit
      </SubmitButton>
      <BackButton onClick={handleBack}>Back to Dashboard</BackButton>
    </TestContainer>
  );
}

export default Test;
