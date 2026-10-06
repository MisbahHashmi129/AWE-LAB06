# State Management Lab

## Project Overview

This project demonstrates different state management techniques in React. The implementation includes React state, Context API, and Redux.

## Technologies Used

* React.js
* JavaScript
* Context API
* Redux
* CSS
* Git and GitHub

## Implementation

### 1. React State Management

The project uses React state to manage and update application data.

### 2. Context API

The Context API is used to share data between components without passing props manually through every component.

* `ThemeContext.js` manages theme-related state.
* `UserContext.js` manages user-related state.

### 3. Redux

Redux is used for centralized state management.

* `actions.js` contains Redux actions.
* `reducers.js` contains reducers that update the state.
* `store.js` creates and configures the Redux store.

### 4. User Interface

`App.js` contains the main application structure, while `App.css` provides styling for the interface.

## Project Structure

```text
state-management-lab/
│
├── src/
│   ├── App.js
│   ├── App.css
│   ├── context/
│   │   ├── ThemeContext.js
│   │   └── UserContext.js
│   │
│   └── redux/
│       ├── actions.js
│       ├── reducers.js
│       └── store.js
│
└── README.md
```

## Git Version Control

Git was used to track the project changes. The project was initialized as a Git repository, committed locally, connected to GitHub, and pushed to the remote repository.

## GitHub Repository

https://github.com/MisbahHashmi129/AWE-LAB06
