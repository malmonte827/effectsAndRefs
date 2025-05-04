# 🎴 React Card Dealer

> A React app that lets you draw cards one at a time from a Deck of Cards API, using `useEffect` to initialize the deck and `useRef` to manage API state.

 [![React](https://img.shields.io/badge/react-18%2B-blue)](https://reactjs.org/) [![Axios](https://img.shields.io/badge/axios-0.27%2B-brightgreen)](https://github.com/axios/axios)

---

## 📋 Table of Contents

1. [About](#about)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
5. [Usage](#usage)  
6. [Contributing](#contributing)  
7. [Contact](#contact)  

---

## 🌟 About

**React Card Dealer** initializes a new shuffled deck from the [Deck of Cards API](https://deckofcardsapi.com/) on load, and lets you draw one card at a time. When the deck is empty, it alerts you that no cards remain.

---

## ✨ Features

- **Deck Initialization:** Uses `useEffect` on mount to fetch a new deck ID.  
- **Draw Cards:** Click “Draw Card” to fetch and display the next card image.  
- **Empty Deck Alert:** When all cards are drawn, an alert pops up:  
  > “Error: no cards remaining!”  
- **API State Management:** Uses `useRef` to store the deck ID without triggering re-renders.

---

## 🛠 Tech Stack

- **Framework:** React 18+ (functional components)  
- **Hooks:** `useEffect`, `useState`, `useRef`  
- **Data Fetching:** Axios  
- **API:** Deck of Cards API  
- **Build Tool:** Create React App or Vite  
- **Styling:** CSS

---

## 🏁 Getting Started

### Prerequisites

- Node.js v14 or higher  
- npm (bundled with Node.js) or Yarn  

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/malmonte827/effectsAndRefs.git
cd effectsAndRefs

# 2. Install dependencies
npm install
# or
yarn

# 3. Start the development server
npm start
# or
yarn start
```
---
### 📖 Usage

1. On Load: A new shuffled deck is created automatically.

2. Draw Cards: Click the Draw Card button to fetch and display the next card.

3. Empty Deck: After 52 draws, clicking again shows an alert:

    > “Error: no cards remaining!”
---

## Contributing

We welcome contributions! To contribute:

- Fork the repository

- Create a new branch (git checkout -b feature-name)

- Commit your changes (git commit -m 'Add new feature')

- Push to the branch (git push origin feature-name)

- Open a pull request

## Contact

For questions or suggestions, reach out:

- Email: malmonte827@gmail.com
