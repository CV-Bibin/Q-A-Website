// src/data/answers.js
const answers = [
  { 
    questionId: 1, 
    answers: [
      { author: "Jane", date: "2024-12-02", content: "You can start by installing React and using its components." },
      { author: "Mark", date: "2024-12-03", content: "React's key concepts include JSX, components, and state." },
      { author: "Lucy", date: "2024-12-04", content: "Consider using state hooks for better state management in React." },
      { author: "Tom", date: "2024-12-05", content: "React's virtual DOM helps in rendering only changed components, making it faster." },
      { author: "Chris", date: "2024-12-06", content: "Don't forget to learn about React Router for navigation between pages." }
    ]
  },
  { 
    questionId: 2, 
    answers: [
      { author: "Alice", date: "2024-12-03", content: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build modern websites." },
      { author: "Mark", date: "2024-12-04", content: "Tailwind allows for rapid prototyping without needing to write custom CSS." }
    ]
  },
  { 
    questionId: 3, 
    answers: [
      { author: "Sarah", date: "2024-12-04", content: "Use media queries to make your design responsive across various screen sizes." },
      { author: "John", date: "2024-12-05", content: "Flexbox and Grid are great layout tools for building responsive designs." },
      { author: "Chris", date: "2024-12-06", content: "Always test your layout on different devices to ensure its responsiveness." },
      { author: "Tom", date: "2024-12-07", content: "CSS Grid can help you create complex layouts without needing to use floats." },
      { author: "Lucy", date: "2024-12-08", content: "For mobile-first designs, start with the smallest screen and progressively enhance it." },
      { author: "Mia", date: "2024-12-09", content: "Make sure to check browser support for CSS Grid before implementing." },
      { author: "James", date: "2024-12-10", content: "Consider using a responsive design framework like Bootstrap for faster prototyping." },
      { author: "Sarah", date: "2024-12-11", content: "Don’t forget to use `rem` and `em` units for scalable designs." }
    ]
  },
  { 
    questionId: 4, 
    answers: [
      { author: "John", date: "2024-12-05", content: "ES6 introduces a lot of useful features such as arrow functions and template literals." },
      { author: "Mark", date: "2024-12-06", content: "Promises are a great way to handle asynchronous code, replacing callback functions." },
      { author: "Lucy", date: "2024-12-07", content: "Let and const are new keywords that allow block-scoped variables in JavaScript." }
    ]
  },
  { 
    questionId: 5, 
    answers: [
      { author: "Chris", date: "2024-12-06", content: "You can create a simple API with Express.js to handle HTTP requests." },
      { author: "James", date: "2024-12-07", content: "Use middleware in Express.js to handle JSON parsing and authentication." },
      { author: "Alice", date: "2024-12-08", content: "Don't forget to handle errors properly to avoid crashes in your API." },
      { author: "Tom", date: "2024-12-09", content: "Use Postman or Insomnia to test your API endpoints." }
    ]
  },
  { 
    questionId: 6, 
    answers: [
      { author: "Emily", date: "2024-12-06", content: "The virtual DOM in React allows the framework to update only the parts of the UI that change, improving performance." },
      { author: "Lucy", date: "2024-12-07", content: "React's reconciliation algorithm makes updates to the real DOM more efficient." },
      { author: "John", date: "2024-12-08", content: "By using a virtual DOM, React reduces the amount of direct manipulation of the DOM." },
      { author: "Mia", date: "2024-12-09", content: "The virtual DOM allows for faster rendering by minimizing reflows and repaints." },
      { author: "Chris", date: "2024-12-10", content: "React compares the previous virtual DOM tree with the new one to determine the minimal changes required." },
      { author: "Sarah", date: "2024-12-11", content: "This makes React apps faster and more responsive, especially with large UIs." },
      { author: "Mark", date: "2024-12-12", content: "Understanding the virtual DOM is key to optimizing React performance." },
      { author: "Tom", date: "2024-12-13", content: "React uses a diffing algorithm to determine which virtual DOM elements need to be updated." },
      { author: "James", date: "2024-12-14", content: "The virtual DOM enables React to handle updates asynchronously." },
      { author: "Lucy", date: "2024-12-15", content: "This is why React is so fast when updating the UI." }
    ]
  },
  { 
    questionId: 7, 
    answers: [
      { author: "Tom", date: "2024-12-07", content: "React’s `useState` hook is the simplest way to manage state in functional components." },
      { author: "Chris", date: "2024-12-08", content: "For complex state management, you might want to use Context API or Redux." },
      { author: "Sarah", date: "2024-12-09", content: "Context API is great for sharing state across multiple components." },
      { author: "Mia", date: "2024-12-10", content: "Redux is ideal for global state management in large apps." }
    ]
  },
  { 
    questionId: 8, 
    answers: [
      { author: "James", date: "2024-12-08", content: "PWAs allow users to access your app even when they're offline." },
      { author: "Mia", date: "2024-12-09", content: "To create a PWA, use service workers to cache content for offline access." },
      { author: "Tom", date: "2024-12-10", content: "PWAs also support push notifications and can be installed on the user's home screen." },
      { author: "Chris", date: "2024-12-11", content: "A PWA is a web app that behaves like a native mobile app on supported devices." },
      { author: "Sarah", date: "2024-12-12", content: "Service workers are key for enabling the offline-first functionality of PWAs." },
      { author: "Lucy", date: "2024-12-13", content: "PWAs are responsive, fast, and reliable, which makes them perfect for mobile web applications." }
    ]
  },
  { 
    questionId: 9, 
    answers: [
      { author: "Mark", date: "2024-12-09", content: "React Hooks allow you to use state and other React features in functional components." },
      { author: "Mia", date: "2024-12-10", content: "The `useState` hook is great for simple state management, while `useEffect` helps with side effects." },
      { author: "Chris", date: "2024-12-11", content: "Custom hooks let you extract and reuse logic across multiple components." },
      { author: "Tom", date: "2024-12-12", content: "React Hooks are a way to write stateful logic in functional components, without the need for class components." },
      { author: "Lucy", date: "2024-12-13", content: "Hooks like `useReducer` are useful for managing complex state logic." },
      { author: "Sarah", date: "2024-12-14", content: "Don’t forget to use the `useRef` hook to persist values across renders without causing re-renders." },
      { author: "James", date: "2024-12-15", content: "Make sure you only use hooks at the top level of your component, not inside loops or conditions." },
      { author: "Alice", date: "2024-12-16", content: "Hooks allow React to simplify its API and make components easier to manage." },
      { author: "Chris", date: "2024-12-17", content: "Using hooks properly can make your components cleaner and more efficient." },
      { author: "Mark", date: "2024-12-18", content: "React’s hooks system makes functional components just as powerful as class components." }
    ]
  },
  { 
    questionId: 10, 
    answers: [
      { author: "Tom", date: "2024-12-10", content: "Flexbox is ideal for one-dimensional layouts, while CSS Grid excels at two-dimensional layouts." },
      { author: "James", date: "2024-12-11", content: "Flexbox is better for aligning items along a single axis (either horizontally or vertically)." },
      { author: "Mia", date: "2024-12-12", content: "CSS Grid allows you to create complex layouts with rows and columns." },
      { author: "Chris", date: "2024-12-13", content: "You can use both Flexbox and Grid together to achieve more flexibility in your layouts." },
      { author: "Sarah", date: "2024-12-14", content: "In general, Flexbox is great for simple, smaller-scale layouts, while Grid is ideal for large-scale complex layouts." }
    ]
  }
];

export default answers;
