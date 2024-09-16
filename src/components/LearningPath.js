import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaBook, FaMicrophone, FaSoundcloud, FaClipboardList, FaChartBar, FaHome, FaSignOutAlt } from 'react-icons/fa';
import backgroundImg from '../components/back.jpg';
const LearningPathWrapper = styled.div`
  background-color: #007bff;  // Blue background for the entire section
  padding: 40px;
  border-radius: 15px;
  max-width: 1000px;
  margin: auto;
  background-image: url(${backgroundImg});
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
`;

const LearningPathContainer = styled.div`
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 12px;
  border: 3px solid #0056b3;  // Darker blue border to match the background
`;

const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  margin-bottom: 25px;
  color: #333;
`;

const RoadmapContainer = styled.div`
  padding: 25px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-bottom: 25px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
  color: #007bff;
`;

const SectionContent = styled.p`
  font-size: 18px;
  margin-bottom: 25px;
  line-height: 1.6;
  color: #555;
`;

const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 25px 0;
  display: flex;
  justify-content: center;
  background-color: #0056b3;  // Darker blue for better contrast
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NavMenuItem = styled.li`
  margin: 0 20px;
  display: flex;
  align-items: center;
`;

const NavMenuLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  padding: 14px 24px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #003d73;  // Darker blue on hover for better contrast
  }
`;

const NavMenuIcon = styled.span`
  margin-right: 10px;
  font-size: 20px;
`;

function LearningPath() {
  const [vocabularyScore, setVocabularyScore] = useState(0);
  const [speechScore, setSpeechScore] = useState(0);
  const [pronunciationScore, setPronunciationScore] = useState(0);
  const navigate = useNavigate();

  const getRoadmap = () => {
    if (vocabularyScore < 2) {
      return (
        <RoadmapContainer>
          <SectionTitle>Vocabulary Improvement</SectionTitle>
          <SectionContent>Focus on expanding your vocabulary. Consider using flashcards, reading more books, and practicing new words daily.</SectionContent>
          <SectionContent>Recommended Resources: Vocabulary building apps, English dictionaries, and reading materials.</SectionContent>
        </RoadmapContainer>
      );
    } else if (speechScore < 2) {
      return (
        <RoadmapContainer>
          <SectionTitle>Speech Enhancement</SectionTitle>
          <SectionContent>Work on your pronunciation and speaking skills. Practice speaking with native speakers and use language learning apps.</SectionContent>
          <SectionContent>Recommended Resources: Pronunciation practice apps, language exchange programs, and speech improvement courses.</SectionContent>
        </RoadmapContainer>
      );
    } else if (pronunciationScore < 2) {
      return (
        <RoadmapContainer>
          <SectionTitle>Pronunciation Practice</SectionTitle>
          <SectionContent>Improve your pronunciation by practicing speaking clearly and accurately. Engage in listening and repeating exercises.</SectionContent>
          <SectionContent>Recommended Resources: Pronunciation practice apps, phonetic guides, and speaking clubs.</SectionContent>
        </RoadmapContainer>
      );
    } else {
      return (
        <RoadmapContainer>
          <SectionTitle>Congratulations!</SectionTitle>
          <SectionContent>You have achieved a good level in all areas. Continue to practice and maintain your skills to further improve your English proficiency.</SectionContent>
          <SectionContent>Recommended Resources: Advanced English courses, speaking clubs, and professional development materials.</SectionContent>
        </RoadmapContainer>
      );
    }
  };

  return (
    <LearningPathWrapper>
      <LearningPathContainer>
        <Title>Learning Path</Title>
        <NavMenu>
          <NavMenuItem>
            <NavMenuLink href="/English">
              <NavMenuIcon><FaBook /></NavMenuIcon>
              Vocabulary
            </NavMenuLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavMenuLink href="/SpeechLessons">
              <NavMenuIcon><FaMicrophone /></NavMenuIcon>
              Speech
            </NavMenuLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavMenuLink href="/PronunciationLessons">
              <NavMenuIcon><FaSoundcloud /></NavMenuIcon>
              Pronunciation
            </NavMenuLink>
          </NavMenuItem>
          
          
          <NavMenuItem>
            <NavMenuLink href="/dashboard">
              <NavMenuIcon><FaHome /></NavMenuIcon>
              Dashboard
            </NavMenuLink>
          </NavMenuItem>
          
        </NavMenu>
        {getRoadmap()}
      </LearningPathContainer>
    </LearningPathWrapper>
  );
}

export default LearningPath;
