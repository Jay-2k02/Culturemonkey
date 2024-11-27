import React from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas'; // Import html2canvas for screenshot functionality

import "../styles/ProfileCard.css"; // Link your CSS file for styling

const ProfileCard = () => {
  // Use location state if data was passed during navigation
  const location = useLocation();
  const finalData = location.state || {
    avatar_url: "https://www.w3schools.com/w3images/avatar2.png", // Default avatar if Gravatar doesn't exist
    display_name: "No Data Available",
    username: "N/A",
    location: "Unknown",
    email: "N/A",
    phone: "N/A",
    bio: "No bio available",
    website: "N/A",
  };

  // Function to handle the download of the profile card as an image
  const handleDownload = () => {
    const profileCard = document.getElementById('profile-card');  // Get the profile card DOM element

    html2canvas(profileCard, {
      useCORS: true,  // Ensure that cross-origin resources (like images) are captured
      backgroundColor: 'white',  // Set a background color if the profile card has transparent areas
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');  // Convert canvas to image data URL
      const link = document.createElement('a');  // Create a download link
      link.href = imgData;  // Set the href to the image data URL
      link.download = 'profile-card.png';  // Set the file name
      link.click();  // Trigger the download
    });
  };

  return (
    <div className="profile-card" id="profile-card">
      {/* Profile Image Section */}
      <div className="card-header">
        <img 
          src={finalData.avatar_url} 
          alt="Profile Avatar" 
          className="avatar" 
        />
        <div className="header-info">
          <h2 className="display-name">{finalData.display_name}</h2>
          <p className="username">@{finalData.username}</p>
          <p className="location">{finalData.location}</p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="card-body">
        <p className="bio">{finalData.bio}</p>
        
        {/* Contact Details Section */}
        <div className="contact-info">
          <p><strong>Email:</strong> {finalData.email}</p>
          <p><strong>Phone:</strong> {finalData.phone}</p>
        </div>

        {/* Website/Social Links Section */}
        {finalData.website !== "N/A" && (
          <p className="website"><strong>Website:</strong> <a href={finalData.website} target="_blank" rel="noopener noreferrer">{finalData.website}</a></p>
        )}
      </div>

      {/* Download Button */}
      <button className="download-btn" onClick={handleDownload}>
        Download Profile Card
      </button>
    </div>
  );
};

export default ProfileCard;
