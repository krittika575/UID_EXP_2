// src/App.js
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

function App() {
  // Example user data
  const user = {
    name: 'Krittika Ravichandran',
    email: 'krittikaravi3@gmail.com',
    profilePicture: 'https://via.placeholder.com/150',
    bio: 'Full Stack Developer with a passion for creating interactive and dynamic web applications.',
    location: 'Erode, TamilNadu',
    jobTitle: 'Software Engineer',
    company: 'Tech Corp',
    skills: ['JavaScript', 'React', 'Node.js', 'CSS'],
    hobbies: ['Photography', 'Traveling', 'Gaming'],
    socialLinks: [
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/janesmith' },
      { platform: 'GitHub', url: 'https://github.com/janesmith' },
      { platform: 'Twitter', url: 'https://twitter.com/janesmith' }
    ]
  };

  return (
    <div className="App">
      <UserProfile
        name={user.name}
        email={user.email}
        profilePicture={user.profilePicture}
        bio={user.bio}
        location={user.location}
        jobTitle={user.jobTitle}
        company={user.company}
        skills={user.skills}
        hobbies={user.hobbies}
        socialLinks={user.socialLinks}
      />
    </div>
  );
}

export default App;
