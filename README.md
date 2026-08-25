<div align="center">

# 👥 User List

### Modern User Management Interface built with React & TypeScript

A clean, responsive and type-safe user listing application with
**REST API integration, search functionality, reusable components and modern UI architecture.**

<br>

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)

<br>

[**📂 View Repository**](https://github.com/gauresh-badgujar/User-List)

</div>

---

## 📌 About The Project

<div align="center">

**User List** is a modern frontend application developed using **React and TypeScript**.

The application fetches user information from a REST API and displays it through a clean, responsive and reusable card-based interface.

Users can quickly search for specific users while the application provides proper loading and error states.

</div>

---

## ✨ Features

<div align="center">

|           Feature          | Description                                |
| :------------------------: | ------------------------------------------ |
|      👤 **User Cards**     | Display users in a clean card-based layout |
|        🔍 **Search**       | Search users by name                       |
|       🌐 **REST API**      | Fetch real-time user data                  |
|   ⚡ **Fast Performance**   | Powered by Vite                            |
|    📱 **Responsive UI**    | Works across desktop, tablet and mobile    |
|     ⏳ **Loading State**    | Handles API loading states                 |
|    ❌ **Error Handling**    | Displays errors gracefully                 |
| 🧩 **Reusable Components** | Modular React architecture                 |
|     🛡️ **Type Safety**    | Strong typing with TypeScript              |

</div>

---

## 🛠️ Tech Stack

<div align="center">

|     Technology    | Purpose                     |
| :---------------: | --------------------------- |
|    ⚛️ **React**   | UI Development              |
| 📘 **TypeScript** | Type Safety                 |
|     ⚡ **Vite**    | Development & Build Tool    |
|  🌐 **REST API**  | User Data                   |
|    🎨 **CSS3**    | Styling & Responsive Design |
|   🔧 **ESLint**   | Code Quality                |

</div>

---

## 🏗️ Project Structure

```text
User-List/
│
├── public/
│
├── src/
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

## 🔄 Application Architecture

<div align="center">

```text
                    ┌─────────────────┐
                    │     REST API    │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   API Service   │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │    UsersPage    │
                    └────────┬────────┘
                             │
                  ┌──────────┴──────────┐
                  │                     │
                  ▼                     ▼
          ┌───────────────┐     ┌───────────────┐
          │   SearchBar   │     │   UserGrid    │
          └───────────────┘     └───────┬───────┘
                                        │
                                        ▼
                                ┌───────────────┐
                                │    UserCard   │
                                └───────────────┘
```

</div>

---

## 🔍 How It Works

<div align="center">

### 01 — Fetch Data

The application requests user data from the configured REST API.

### 02 — Process Response

API data is handled using TypeScript interfaces for type-safe development.

### 03 — Display Users

Users are rendered through reusable `UserCard` components inside the `UserGrid`.

### 04 — Search

The `SearchBar` allows users to quickly filter users by name.

### 05 — Handle States

The application manages loading, success and error states.

</div>

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

### Clone Repository

```bash
git clone git@github.com:gauresh-badgujar/User-List.git
```

### Navigate to Project

```bash
cd User-List
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The application will be available at the local URL provided by Vite.

---

## 📜 Available Scripts

<div align="center">

|      Command      | Description              |
| :---------------: | ------------------------ |
|   `npm run dev`   | Start development server |
|  `npm run build`  | Create production build  |
| `npm run preview` | Preview production build |
|   `npm run lint`  | Run ESLint               |

</div>

---

## 📱 Responsive Design

<div align="center">

The application is designed to provide a consistent experience across:

**💻 Desktop   •   💻 Laptop   •   📱 Tablet   •   📱 Mobile**

</div>

---

## 🧠 Key Learning Outcomes

<div align="center">

React Component Architecture
TypeScript & Type Safety
REST API Integration
State Management
Reusable Components
Search & Filtering
Loading & Error Handling
Responsive UI Development
Git & GitHub Workflow

</div>

---

## 🔮 Future Improvements

<div align="center">

| Status | Improvement                |
| :----: | -------------------------- |
|   🔲   | Pagination                 |
|   🔲   | Advanced Filtering         |
|   🔲   | User Details Page          |
|   🔲   | Sorting                    |
|   🔲   | Dark Mode                  |
|   🔲   | Skeleton Loading           |
|   🔲   | Unit Testing               |
|   🔲   | API Caching                |
|   🔲   | Accessibility Improvements |
|   🔲   | Cloud Deployment           |

</div>

---

## 📸 Screenshots

<div align="center">

Add your project screenshots here.

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

</div>

---

## 🎯 Project Purpose

<div align="center">

This project was created to demonstrate practical knowledge of modern frontend development using **React and TypeScript**.

It focuses on building a **clean, maintainable, responsive and scalable frontend application** while implementing real-world concepts such as API integration, component architecture, state management and type safety.

</div>

---

<div align="center">

## 👨‍💻 Author

### Gauresh Badgujar

**Java Full Stack Developer | React | TypeScript | Spring Boot**

Building modern and scalable web applications.

<br>

[![GitHub](https://img.shields.io/badge/GitHub-gauresh--badgujar-181717?style=for-the-badge\&logo=github)](https://github.com/gauresh-badgujar)

<br><br>

⭐ **If you like this project, consider giving it a star!**

<br>

**Built with ❤️ using React + TypeScript + Vite**

<br>

© 2026 Gauresh Badgujar

</div>
