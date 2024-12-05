const ADMIN = { id: 1, email: 'admin@gmail.com', password: 'admin123', fullName: 'Bibin', profilePic: 'https://loremfaces.net/96/id/2.jpg' };
const USER = { id: 2, email: 'user@gmail.com', password: 'user123', fullName: 'Arun', profilePic: 'https://loremfaces.net/96/id/1.jpg' };

export const addUser = (userData) => {
  const existingUser = JSON.parse(localStorage.getItem('user'));

  if (existingUser) {
    return false;
  }

  localStorage.setItem('user', JSON.stringify(userData));
  return true;
};

export const getUser = (email, password) => {
  if (email === ADMIN.email && password === ADMIN.password) {
    return { ...ADMIN, role: 'admin' };
  }

  if (email === USER.email && password === USER.password) {
    return { ...USER, role: 'user' };
  }

  return null;
};

export const isUserRegistered = () => {
  return localStorage.getItem('user') !== null;
};
