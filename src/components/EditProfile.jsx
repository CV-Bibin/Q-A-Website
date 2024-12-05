import  { useState } from 'react';

const EditProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState(
    'https://loremfaces.net/96/id/2.jpg'
  );
  const [about, setAbout] = useState('');  // New state for "About" text

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return (
    <div className="flex justify-start items-center min-h-screen ">
      <form onSubmit={handleSubmit} className="bg-white p-8  w-[700px]">
        <h2 className="text-2xl font-semibold text-center mb-6">Edit Profile</h2>

        {/* Avatar Section */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={avatar}
            alt="User Avatar"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="text-sm text-gray-600 border border-gray-300 rounded-md p-2 cursor-pointer"
          />
          <p className="text-sm text-gray-500 mt-2">JPG, GIF, or PNG. Max 1MB</p>
        </div>

        {/* First Name */}
        <div className="mb-4">
          <label htmlFor="first-name" className="block text-sm font-semibold text-gray-700">
            First Name
          </label>
          <input
            id="first-name"
            name="first-name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
            autoComplete="given-name"
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="last-name" className="block text-sm font-semibold text-gray-700">
            Last Name
          </label>
          <input
            id="last-name"
            name="last-name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
            autoComplete="family-name"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
            autoComplete="email"
          />
        </div>

        {/* About Section (Text Area) */}
        <div className="mb-6">
          <label htmlFor="about" className="block text-sm font-semibold text-gray-700">
            About Me
          </label>
          <textarea
            id="about"
            name="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
            placeholder="Write something about yourself"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
