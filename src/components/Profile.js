import React, { useState, useEffect } from 'react';
import { auth } from '../firebase'; // Import auth from firebase.js

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const photoURL = user.photoURL || 'https://via.placeholder.com/100'; // Use a web image as fallback
        setUser({
          displayName: user.displayName || 'No Name Provided',
          email: user.email || 'No Email Provided',
          photoURL,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.profileContainer}>
      <div style={styles.profileCard}>
        <img
          src={user.photoURL}
          alt="Profile"
          style={styles.profilePic}
        />
        <h2 style={styles.profileName}>{user.displayName}</h2>
        <p style={styles.profileEmail}>{user.email}</p>
      </div>
    </div>
  );
};

const styles = {
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    border: '5px solid #4CAF50', // Green border for highlight
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    textAlign: 'center',
    width: '300px',
  },
  profilePic: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginBottom: '20px',
  },
  profileName: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
  },
  profileEmail: {
    fontSize: '18px',
    color: '#777',
  },
};

export default Profile;
