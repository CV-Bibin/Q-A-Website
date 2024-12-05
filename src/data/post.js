// src/data/post.js
const posts = [
  { 
    id: 1, 
    title: "How to use React?", 
    author: "John", 
    date: "2024-12-01", 
    votes: 12, 
    answers: 5, 
    views: 137,
    description: "In this question, the user is looking for guidance on how to get started with React and its key concepts, such as components and state management.",
    tags: ["React", "JavaScript", "Frontend"] 
  },
  { 
    id: 2, 
    title: "What is Tailwind CSS?", 
    author: "Jane", 
    date: "2024-12-02", 
    votes: 8, 
    answers: 2, 
    views: 98,
    description: "This question is about understanding the utility-first CSS framework called Tailwind CSS, and how it compares to traditional CSS frameworks.",
    tags: ["CSS", "Tailwind", "Web Design"] 
  },
  { 
    id: 3, 
    title: "How to create a responsive design?", 
    author: "Mark", 
    date: "2024-12-03", 
    votes: 15, 
    answers: 8, 
    views: 200,
    description: "The user is asking how to create a responsive web design that adapts to different screen sizes, using CSS media queries and other modern techniques.",
    tags: ["CSS", "Responsive Design", "Web Development"] 
  },
  { 
    id: 4, 
    title: "What is JavaScript ES6?", 
    author: "Alice", 
    date: "2024-12-04", 
    votes: 10, 
    answers: 3, 
    views: 150,
    description: "This question covers the new features introduced in ES6 (ECMAScript 2015), such as arrow functions, promises, let/const, and destructuring.",
    tags: ["JavaScript", "ES6", "Programming"] 
  },
  { 
    id: 5, 
    title: "How to build a simple API with Node.js?", 
    author: "Tom", 
    date: "2024-12-05", 
    votes: 7, 
    answers: 4, 
    views: 120,
    description: "The user seeks guidance on how to set up a basic API using Node.js and Express.js, focusing on routing and handling HTTP requests.",
    tags: ["Node.js", "API", "Backend"] 
  },
  { 
    id: 6, 
    title: "What is the virtual DOM?", 
    author: "Emily", 
    date: "2024-12-06", 
    votes: 18, 
    answers: 10, 
    views: 250,
    description: "This question addresses the concept of the virtual DOM in React and how it optimizes rendering performance by minimizing direct manipulation of the actual DOM.",
    tags: ["React", "Virtual DOM", "Frontend"] // Added tags
  },
  { 
    id: 7, 
    title: "How to manage state in React?", 
    author: "Chris", 
    date: "2024-12-07", 
    votes: 9, 
    answers: 4, 
    views: 130,
    description: "The user is looking for best practices on managing state in React, whether to use `useState`, context, or state management libraries like Redux.",
    tags: ["React", "State Management", "Frontend"] // Added tags
  },
  { 
    id: 8, 
    title: "What is a Progressive Web App (PWA)?", 
    author: "Sarah", 
    date: "2024-12-08", 
    votes: 13, 
    answers: 6, 
    views: 170,
    description: "This question is about the concept of Progressive Web Apps (PWAs), and how they combine the best features of web and mobile apps, like offline functionality and app-like user experiences.",
    tags: ["PWA", "Web Apps", "Mobile"] // Added tags
  },
  { 
    id: 9, 
    title: "How to use React Hooks?", 
    author: "Daniel", 
    date: "2024-12-09", 
    votes: 22, 
    answers: 15, 
    views: 300,
    description: "This question discusses React Hooks, specifically how to use `useState`, `useEffect`, and custom hooks to manage state and side effects in functional components.",
    tags: ["React", "Hooks", "Frontend"] // Added tags
  },
  { 
    id: 10, 
    title: "What is the difference between flexbox and grid?", 
    author: "Mia", 
    date: "2024-12-10", 
    votes: 10, 
    answers: 5, 
    views: 140,
    description: "The user asks about the differences between the Flexbox and CSS Grid layout systems, including when to use each for responsive web design.",
    tags: ["CSS", "Flexbox", "Grid", "Web Design"] // Added tags
  },
  { 
    id: 2, 
    title: "What is Tailwind CSS?", 
    author: "Jane", 
    date: "2024-12-02", 
    votes: 8, 
    answers: 2, 
    views: 98,
    description: "This question is about understanding the utility-first CSS framework called Tailwind CSS, and how it compares to traditional CSS frameworks.",
    tags: ["CSS", "Tailwind", "Web Design"] 
  },
  { 
    id: 3, 
    title: "How to create a responsive design?", 
    author: "Mark", 
    date: "2024-12-03", 
    votes: 15, 
    answers: 8, 
    views: 200,
    description: "The user is asking how to create a responsive web design that adapts to different screen sizes, using CSS media queries and other modern techniques.",
    tags: ["CSS", "Responsive Design", "Web Development"] 
  }
];

export default posts;
