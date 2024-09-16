import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import your background image
import backgroundImage from '../components/back.jpg'; // Adjust the path as necessary


function Homepage() {
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  const styles = {
    homepage: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f4',
      backgroundImage: `url(${backgroundImage})`, // Add background image
      backgroundSize: 'cover', // Make sure the background image covers the whole element
      backgroundPosition: 'center', // Center the background image
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#4CAF50',
      color: '#fff',
      padding: '10px 20px',
    },
    
    logoImage: {
      width: '50px', // Adjust the size of the logo as needed
      height: '50px',
      marginRight: '10px',
    },
    navContainer: {
      padding: '20px',
      backgroundColor: '#f9f9f9',
    },
    navMenu: {
      listStyleType: 'none',
      padding: '0',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    navMenuItem: {
      margin: '5px',
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: '#007bff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    },
    navMenuLink: {
      display: 'block',
      padding: '10px 20px',
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
      textAlign: 'center',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
    navMenuLinkHover: {
      backgroundColor: '#0056b3',
      transform: 'scale(1.05)',
    },
    hero: {
      textAlign: 'center',
      margin: '50px 0',
      color: '#000033', // Text color for hero section
    },
    heroTitle: {
      fontSize: '36px',
      color: '#fff', // Ensure the title text is white
    },
    heroSubtitle: {
      fontSize: '20px',
      color: '#ddd', // Ensure the subtitle text is a lighter shade
      marginBottom: '20px',
    },
    ctaBtn: {
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      fontSize: '18px',
      cursor: 'pointer',
      borderRadius: '5px',
      margin: '10px',
    },
    features: {
      textAlign: 'center',
      margin: '50px 0',
    },
    featuresTitle: {
      fontSize: '28px',
      color: '#333',
      marginBottom: '20px',
    },
    featureCards: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    featureCard: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '22%',
      textAlign: 'center',
    },
    featureIcon: {
      fontSize: '40px',
      marginBottom: '10px',
    },
    featureTitle: {
      fontSize: '20px',
      color: '#333',
      marginBottom: '10px',
    },
    about: {
      textAlign: 'center',
      margin: '50px 0',
    },
    aboutTitle: {
      fontSize: '28px',
      color: '#333',
      marginBottom: '20px',
    },
    aboutText: {
      fontSize: '18px',
      color: '#555',
      marginBottom: '30px',
      maxWidth: '800px',
      margin: '0 auto',
    },
    testimonials: {
      marginTop: '30px',
      fontSize: '18px',
      color: '#333',
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    testimonialCard: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '80%',
      marginBottom: '20px',
    },
    userIcon: {
      fontSize: '40px',
      marginRight: '15px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      padding: '10px',
      borderRadius: '50%',
    },
    userFeedback: {
      fontSize: '16px',
      color: '#555',
    },
    content: {
      textAlign: 'center',
      margin: '50px 0',
    },
    contentTitle: {
      fontSize: '28px',
      color: '#333',
      marginBottom: '20px',
    },
    lessonCards: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    lessonCard: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '22%',
      textAlign: 'center',
    },
    lessonTitle: {
      fontSize: '20px',
      color: '#333',
      marginBottom: '10px',
    },
    lessonBtn: {
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      borderRadius: '5px',
    },
    footer: {
      textAlign: 'center',
      marginTop: '50px',
      padding: '20px',
      backgroundColor: '#333',
      color: '#fff',
    },
    footerLinks: {
      marginBottom: '10px',
    },
    footerLink: {
      color: '#fff',
      textDecoration: 'none',
      marginRight: '15px',
    },
    socialMedia: {
      marginBottom: '10px',
    },
    socialMediaLink: {
      color: '#fff',
      textDecoration: 'none',
      marginRight: '15px',
    },
    contactInfo: {
      fontSize: '14px',
      color: '#ddd',
    },
    backButton: {
      display: 'block',
      margin: '30px auto',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      borderRadius: '5px',
    },
  };


  return (
    <div style={styles.homepage}>
      {/* Header Section */}
      <header style={styles.header}>
        
        <nav style={styles.navContainer}>
          <ul style={styles.navMenu}>
            <li style={styles.navMenuItem}>
              <a href="/English" style={styles.navMenuLink}>Vocabulary</a>
            </li>
            <li style={styles.navMenuItem}>
              <a href="/SpeechLessons" style={styles.navMenuLink}>Speech</a>
            </li>
            <li style={styles.navMenuItem}>
              <a href="/PronunciationLessons" style={styles.navMenuLink}>Pronunciation</a>
            </li>
            <li style={styles.navMenuItem}>
              <a href="/test" style={styles.navMenuLink}>Test</a>
            </li>
            <li style={styles.navMenuItem}>
              <a href="/Reports" style={styles.navMenuLink}>Report</a>
            </li>
            <li style={styles.navMenuItem}>
              <a href="/LearningPath" style={styles.navMenuLink}>Learning Path</a>
            </li>
            <li style={styles.navMenuItem}>
              <a href="/dashboard" style={styles.navMenuLink}>Dashboard</a>
            </li>
            <li style={styles.navMenuItem}>
              <a href="/" style={styles.navMenuLink}>Logout</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Vyakaran: Revolutionizing English Learning through Innovation</h1>
        <p style={styles.heroSubtitle}>
          In an era where global communication is more important than ever, proficiency in English can significantly enhance personal and professional opportunities. Recognizing this need, Vyakaran has emerged as a comprehensive English learning platform designed to cater to learners of all levels. With its innovative approach and user-centric design, Vyakaran stands out as a pioneering force in language education.
        </p>
        
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <h2 style={styles.featuresTitle}>Our Features</h2>
        <div style={styles.featureCards}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>📚</div>
            <h3 style={styles.featureTitle}>Comprehensive Lessons</h3>
            <p>Access a wide range of lessons tailored to various learning needs and levels.</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🎤</div>
            <h3 style={styles.featureTitle}>Interactive Exercises</h3>
            <p>Engage in interactive exercises that enhance your learning experience.</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>📝</div>
            <h3 style={styles.featureTitle}>Practice Tests</h3>
            <p>Test your knowledge and track your progress with our practice tests.</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>💬</div>
            <h3 style={styles.featureTitle}>Real-time Feedback</h3>
            <p>Receive instant feedback to help you improve your English skills.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.about}>
        <h2 style={styles.aboutTitle}>About Us</h2>
        <p style={styles.aboutText}>
          At Vyakaran, our mission is to make English learning accessible, engaging, and effective. We believe that language learning should be a rewarding journey, and we are dedicated to providing resources and tools that facilitate this process. Our team of experts and educators are committed to creating an enriching learning experience for all users.
        </p>
        <div style={styles.testimonials}>
          <div style={styles.testimonialCard}>
            <div style={styles.userIcon}>👤</div>
            <div style={styles.userFeedback}>
              "Vyakaran has transformed the way I learn English. The interactive features and detailed lessons have made a significant difference in my proficiency."
            </div>
          </div>
          <div style={styles.testimonialCard}>
            <div style={styles.userIcon}>👤</div>
            <div style={styles.userFeedback}>
              "The practice tests are incredibly helpful. I can track my progress and focus on areas that need improvement."
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section style={styles.content}>
        <h2 style={styles.contentTitle}>Explore Our Content</h2>
        <div style={styles.lessonCards}>
          <div style={styles.lessonCard}>
            <div style={styles.lessonTitle}>Vocabulary</div>
            <button style={styles.lessonBtn} onClick={() => navigate('/English')}>Start Learning</button>
          </div>
          <div style={styles.lessonCard}>
            <div style={styles.lessonTitle}>Speech</div>
            <button style={styles.lessonBtn} onClick={() => navigate('/SpeechLessons')}>Start Learning</button>
          </div>
          <div style={styles.lessonCard}>
            <div style={styles.lessonTitle}>Pronunciation</div>
            <button style={styles.lessonBtn} onClick={() => navigate('/PronunciationLessons')}>Start Learning</button>
          </div>
          <div style={styles.lessonCard}>
            <div style={styles.lessonTitle}>Test</div>
            <button style={styles.lessonBtn} onClick={() => navigate('/test')}>Take a Test</button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <div style={styles.footerLinks}>
          <a href="/contact" style={styles.footerLink}>Contact</a>
          <a href="https://www.termsfeed.com/live/eb00847b-94a5-46e1-a024-07ec0e9c21ba" style={styles.footerLink}>Term and condition</a>
          <a href="https://sapphire-bathsheba-70.tiiny.site" style={styles.footerLink}>Privacy Policy</a>
        </div>
        <div style={styles.socialMedia}>
          <a href="https://github.com/BitRabel" style={styles.socialMediaLink}>Github</a>
          <a href="https://www.linkedin.com/in/aditya-raj-67a346226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" style={styles.socialMediaLink}>Linkdin</a>
          <a href="https://www.facebook.com/profile.php?id=100049002732425&mibextid=kFxxJD" style={styles.socialMediaLink}>Facebook</a>
          <a href="https://www.instagram.com/adityasingh9128438?igsh=MWV1MDN0eWx5a3Awcw==" style={styles.socialMediaLink}>Instagram</a>
        </div>
        <div style={styles.contactInfo}>
          &copy; 2024 Vyakaran. All rights reserved.
        </div>
      </footer>
      
    </div>
    
  );
}

export default Homepage;
