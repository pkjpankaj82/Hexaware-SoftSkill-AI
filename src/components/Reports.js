import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import backgroundImg from '../components/report.avif';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const ReportsContainer = styled.div`
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

const ReportsTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
`;

const ReportItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
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

const ChartContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`;

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

const feedbackOptions = {
  ...chartOptions,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: (context) => `${context.label}: ${context.raw} tests`,
      },
    },
  },
};

const scoreOptions = {
  ...chartOptions,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: (context) => `Score: ${context.raw}`,
      },
    },
  },
};

function TestReports() {
  const [results, setResults] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Load saved test results from localStorage
    const savedResults = JSON.parse(localStorage.getItem('testResults')) || [];
    setResults(savedResults);
  }, []);

  const getFeedbackCounts = () => {
    return results.reduce((acc, result) => {
      acc[result.feedback] = (acc[result.feedback] || 0) + 1;
      return acc;
    }, {});
  };

  const feedbackCounts = getFeedbackCounts();

  const feedbackData = {
    labels: Object.keys(feedbackCounts),
    datasets: [
      {
        label: 'Feedback Distribution',
        data: Object.values(feedbackCounts),
        backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
      },
    ],
  };

  const scoreData = {
    labels: results.map((_, index) => `Test ${index + 1}`),
    datasets: [
      {
        label: 'Scores',
        data: results.map(result => result.score),
        backgroundColor: '#007bff',
      },
    ],
  };

  const handleBack = () => {
    navigate('/dashboard'); // Redirect to dashboard
  };

  return (
    <ReportsContainer>
      <ReportsTitle>Test Reports</ReportsTitle>
      <ChartContainer style={{ height: '200px', width: '100%' }}>
        <h1>Feedback Distribution</h1>
        <Pie data={feedbackData} options={feedbackOptions} />
      </ChartContainer>
      <ChartContainer style={{ height: '300px', width: '100%' }}>
        <h2>Scores</h2>
        <Bar data={scoreData} options={scoreOptions} />
      </ChartContainer>
      {results.length > 0 ? (
        results.map((result, index) => (
          <ReportItem key={index}>
            <p>Date: {new Date(result.date).toLocaleDateString()}</p>
            <p>Score: {result.score}</p>
            <p>Feedback: {result.feedback}</p>
          </ReportItem>
        ))
      ) : (
        <p>No test results available.</p>
      )}
      <BackButton onClick={handleBack}>Back to Dashboard</BackButton>
    </ReportsContainer>
  );
}

export default TestReports;
