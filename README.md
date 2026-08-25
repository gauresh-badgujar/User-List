# 👥 User List — React & TypeScript

> A modern, responsive and type-safe User Management interface built with **React, TypeScript and Vite**, featuring REST API integration, real-time user search, reusable components and clean UI architecture.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)](https://vite.dev/)
[![CSS](https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

## 📌 Overview

**User List** is a frontend application designed to demonstrate modern React development practices.

The application retrieves user information from a REST API and presents it through a responsive card-based interface. Users can quickly search for specific users while the application handles loading and API error states gracefully.

The project focuses on:

* Component-based architecture
* Type-safe development with TypeScript
* REST API integration
* Reusable React components
* State management
* Responsive UI development
* Clean project organization

---

## ✨ Key Features

### 👤 User Management

* Fetches user information from a REST API
* Displays users in a clean card-based layout
* Shows relevant user information in an organized format

### 🔍 Search Functionality

* Search users by name
* Instant filtering of displayed users
* Simple and intuitive search experience

### ⚡ Performance & UX

* Fast development and build process with Vite
* Optimized React component structure
* Loading state while fetching data
* Error handling for failed API requests
* Responsive design across desktop, tablet and mobile

### 🧩 Component Architecture

The application is divided into reusable components, making the codebase easier to maintain, test and extend.

### 🛡️ Type Safety

TypeScript interfaces and types are used to provide safer data handling and reduce runtime errors.

---

## 🛠️ Tech Stack

| Technology     | Purpose                                 |
| -------------- | --------------------------------------- |
| **React**      | Component-based UI development          |
| **TypeScript** | Type-safe JavaScript development        |
| **Vite**       | Development server and production build |
| **REST API**   | Fetching user data                      |
| **CSS3**       | Responsive UI and styling               |
| **ESLint**     | Code quality and consistency            |

---

## 🏗️ Project Architecture

```text
User-List/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── SearchBar/
│   │   ├── UserCard/
│   │   ├── UserGrid/
│   │   └── UsersPage/
│   │
│   ├── api.ts
│   ├── types.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
└── README.md
```

---

## 🔄 Application Flow

```text
                ┌─────────────────┐
                │    REST API     │
                └────────┬────────┘
                         │
                         ▼
                ┌─────────────────┐
                │   API Service   │
                └────────┬────────┘
                         │
                         ▼
                ┌─────────────────┐
                │   UsersPage     │
                └────────┬────────┘
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
      ┌───────────────┐     ┌───────────────┐
      │   SearchBar   │     │   UserGrid    │
      └───────────────┘     └───────┬───────┘
                                    │
                                    ▼
                             ┌───────────────┐
                             │   UserCard    │
                             └───────────────┘
```

---

## 🔍 How It Works

### 1. Fetch User Data

The application sends a request to the configured REST API when the users page loads.

### 2. Process API Response

The returned data is handled using TypeScript-defined interfaces to maintain type safety.

### 3. Display Users

User information is passed to reusable `UserCard` components and rendered through the `UserGrid`.

### 4. Search Users

The `SearchBar` allows users to search by name and dynamically filter the displayed users.

### 5. Handle Application States

The application provides dedicated UI states for:

```text
Loading
   ↓
API Request
   ↓
┌───────────────┐
│               │
▼               ▼
Success        Error
│               │
▼               ▼
User List     Error UI
```

---

## 🚀 Getting Started

Follow the steps below to run the project locally.

### Prerequisites

Make sure you have the following installed:

* **Node.js**
* **npm**
* **Git**

### 1. Clone the Repository

```bash
git clone git@github.com:gauresh-badgujar/User-List.git
```

### 2. Navigate to the Project

```bash
cd User-List
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

Vite will provide a local development URL in the terminal.

---

## 📜 Available Scripts

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `npm run dev`     | Starts the development server |
| `npm run build`   | Creates a production build    |
| `npm run preview` | Previews the production build |
| `npm run lint`    | Runs ESLint                   |

---

## 🌐 API Integration

The application follows a simple API-driven architecture.

```text
React Application
       │
       ▼
   API Service
       │
       ▼
   REST Endpoint
       │
       ▼
   JSON Response
       │
       ▼
TypeScript Models
       │
       ▼
React Components
```

This approach keeps API-related logic separated from UI components and makes the application easier to maintain and extend.

---

## 📱 Responsive Design

The interface is designed to work across different screen sizes:

* 💻 Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Mobile

The user grid automatically adapts to the available screen width.

---

## 🧠 What I Learned

This project helped strengthen my understanding of:

* React functional components
* React state management
* Component composition
* Props and data flow
* TypeScript interfaces
* REST API integration
* Asynchronous JavaScript
* Loading and error states
* Search and filtering
* Responsive CSS
* Project architecture
* Git and GitHub workflow

---

## 🔮 Future Improvements

Potential improvements for future versions include:

* [ ] Pagination
* [ ] Advanced filtering
* [ ] User detail page
* [ ] Sorting users
* [ ] Dark mode
* [ ] Skeleton loading UI
* [ ] Unit and component testing
* [ ] API caching
* [ ] Improved accessibility
* [ ] Deploy to a cloud hosting platform

---

## 📸 Screenshots

Add screenshots of the application here to give visitors an immediate visual overview.

```text
screenshots/
├── users-page.png
├── search.png
└── responsive-view.png
```

Example:

```markdown
![User List](./screenshots/users-page.png)
```

---

## 🎯 Project Purpose

This project was developed as a practical implementation of modern frontend development concepts using **React and TypeScript**.

The primary goal was to build a clean, maintainable and responsive application while demonstrating real-world concepts such as API integration, reusable components, type safety, state management and user interaction.

---

## 👨‍💻 Author

### Gauresh Badgujar

**Java Full Stack Developer | React | TypeScript | Spring Boot**

I'm interested in building scalable web applications and continuously improving my skills in modern frontend and backend technologies.

**GitHub:**
[@gauresh-badgujar](https://github.com/gauresh-badgujar)

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ **Star**.

It helps support the project and encourages further development.

---

<div align="center">

### Built with React + TypeScript + Vite

**© 2026 Gauresh Badgujar**

</div>
