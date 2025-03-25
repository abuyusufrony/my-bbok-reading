# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# my-bbok-reading


# BookNest - Reading Tracker App 📖

## 1. Project Overview
A responsive book management application built with React.js that allows users to browse books, view details, and maintain reading lists with localStorage persistence.

## 2. Features
- Browse books in responsive grid layout
- View detailed book information
- Mark books as read or add to wishlist
- Sort books by ratings
- Persistent storage using localStorage
- Toast notifications for user actions

## 3. Technologies Used
### Frontend
- React 18
- React Router 6
- Tailwind CSS 3
- DaisyUI 2
- react-toastify 9
- react-tabs 5

### Data Management
- LocalStorage API
- JSON data files

## 4. Project Structure
src/
├── Components/
│ ├── Book/
│ ├── BookDetail/
│ ├── Books/
│ ├── ListedBooks/
│ ├── Layout/
│ │ ├── Navbar/
│ │ └── Footer/
├── Utilities/
│ └── SetDb.js
├── App.jsx
├── main.jsx
└── booksData.json


## 5. Key Implementations
### React Features
- React Router v6 with dynamic routes
- Context API for state management
- Custom hooks for localStorage
- Component composition pattern

### JavaScript/ES6+
- Array methods (map, filter, sort)
- Async/await with fetch API
- Spread operator for state immutability
- Template literals for dynamic paths
- Arrow functions for concise handlers

### CSS
- Tailwind utility classes
- Responsive design with grid/flex
- DaisyUI component library
- Custom color palette


## 📜 Contracts
abuyusufrony@gmail.com

### Smart Contracts (if applicable)
```solidity
// Sample BookStorage.sol
pragma solidity ^0.8.0;

contract BookStorage {
    struct Book {
        uint id;
        string name;
        string author;
    }
    
    Book[] public books;
    
    function addBook(string memory _name, string memory _author) public {
        books.push(Book(books.length, _name, _author));
    }
}
## Installation
```bash
git clone https://github.com/yourusername/booknest.git
cd booknest
npm install
npm run dev

