import React, { useState, useEffect, useRef } from "react";

const Notification = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "10 persons upvoted your question" },
    { id: 2, message: "2 users answered your question" },
    
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  // Ref for the dropdown to detect clicks outside of it
  const notificationRef = useRef(null);

  // Close the notification dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle toggling the notifications dropdown
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="relative">
      {/* Notification Icon */}
      <button
        onClick={toggleNotifications}
        className="relative flex items-center cursor-pointer"
      >
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/bell-line-icon.png"
          alt="Notification"
          className="h-6 w-6 text-gray-800 hover:text-blue-500"
        />
        {/* Notification Badge */}
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 block w-2.5 h-2.5 bg-red-600 rounded-full"></span>
        )}
      </button>

      {/* Dropdown with notifications */}
      {showNotifications && (
        <div
          ref={notificationRef}
          className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-50"
        >
          <div className="px-4 py-2 font-bold text-gray-800">Notifications</div>
          <div className="max-h-48 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="px-4 py-2 border-t border-gray-100 hover:bg-gray-100"
                >
                  {notification.message}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-600">No notifications</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
