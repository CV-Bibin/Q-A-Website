// src/components/ProfilePic.js
import React from 'react';


const ProfilePic = ({ src, alt, size = "10" }) => {

  const firstLetter = alt && typeof alt === "string" ? alt.charAt(0).toUpperCase() : '';

  return (
    <div className={`w-${size} h-${size} bg-gray-200 rounded-full flex items-center justify-center text-gray-800 font-semibold`}>
      {src ? (
        <img
          src={src}
          alt={alt || 'User'}  
          className={`w-${size} h-${size} rounded-full border border-gray-300`}
        />
      ) : (
        <span>{firstLetter}</span> 
      )}
    </div>
  );
};

export default ProfilePic;
