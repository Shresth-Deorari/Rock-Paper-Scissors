# Rock Paper Scissors Game

This is a simple Rock-Paper-Scissors game implemented with HTML, CSS, and JavaScript. The game lets you play against the computer, keeps track of your score, and allows you to reset it.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Setup](#setup)
4. [How to Play](#how-to-play)
5. [Project Structure](#project-structure)
6. [Code Walkthrough](#code-walkthrough)
7. [Screenshots](#screenshots)
8. [License](#license)

---

## Project Overview

This Rock-Paper-Scissors game is a web-based app that allows the player to:
- Select Rock, Paper, or Scissors.
- View the computer's random choice.
- See the outcome (win, lose, or tie).
- Track wins, losses, and ties, which are saved in `localStorage`.

---

## Features

- **User vs Computer gameplay**: User selects an option, and the computer generates a random response.
- **Score Tracking**: Keeps count of wins, losses, and ties.
- **Persistent Storage**: Score is stored in the browser's `localStorage`, so scores persist across page reloads.
- **Responsive UI**: Simple and clean user interface for a smooth experience.

---

## Setup

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript.
- A code editor like Visual Studio Code.

### Steps

1. Clone the repository:

  ```
   `git clone https://github.com/your-username/rock-paper-scissors.git`
  ```

2. Navigate to the project folder:

  ```
   `cd rock-paper-scissors`
  ```

3. Open `index.html` in your browser to play the game.

---

## How to Play

1. Choose Rock, Paper, or Scissors by clicking on the respective button.
2. The computer will make its choice randomly.
3. The result will display along with your choice, the computer's choice, and the current score.
4. Click the **Reset Score** button to reset the score.

---

## Project Structure

- `index.html` - Main HTML file for game layout.
- `Styles/` - Folder containing the CSS files.
  - `Body.css` - CSS for general page styling.
  - `Header.css` - CSS for header elements.
  - `General.css` - Additional styling for game elements.
- `Images/` - Folder with game icons (rock, paper, scissors images).
- `JavaScript/` - Folder containing the JavaScript logic.
  - `javascript.js` - Main game logic and event handling.

---

## Screenshots

[Game Screen](Screenshot.png)


---

**Note**: Make sure to replace `"Images/rock-emoji.png"`, `"Images/paper-emoji.png"`, and `"Images/scissor-emoji.png"` in the JavaScript file with the actual paths to your images to ensure they display correctly in the game.
