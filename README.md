# Rugby Snap (Prototype)

A fast, playable prototype inspired by *Marvel Snap*, reimagined with European club rugby players and rugby-specific game phases.

This project focuses on **proving the core gameplay loop**: short matches, location-driven decisions, and simple but expressive card abilities — all with a rugby flavour.

---

## 🏉 Concept

* **Cards** represent rugby players (by position, cost, and power)
* **Locations** represent rugby phases (Scrum, Lineout, Ruck, etc.)
* Players compete over **3 locations** across **6 turns**
* Highest total power wins each location; win **2 of 3** to win the game

The goal of this prototype is *fun and clarity*, not balance or polish.

---

## 🧱 Tech Stack

* **Next.js (App Router)**
* **React** with `useReducer`
* **TypeScript**
* **Tailwind CSS**

Game logic is deliberately kept **separate from UI**.

---

## 📂 Project Structure

```
src/
 ├─ app/                # Next.js routes
 │   └─ page.tsx        # Entry page
 ├─ components/         # React UI components
 │   └─ GameBoard.tsx   # Main game UI
 └─ game/               # Core game engine (framework-agnostic)
     ├─ types.ts
     ├─ cards.ts
     ├─ locations.ts
     ├─ initGame.ts
     ├─ events.ts
     ├─ reducer.ts
     └─ scoring.ts
```

---

## ▶️ Running the Prototype

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎮 Current Features

* Turn-based game loop (6 turns)
* Energy system (1 → 6)
* Play cards from hand to locations
* Power calculation per location
* Win condition (best of 3 locations)
* Click-to-play browser UI

---

## 🚧 Planned Next Steps

* Reusable **Card UI component**
* **onReveal** ability system
* Rugby-specific location rules (Scrum, Lineout)
* Lightweight animations
* Improved visual identity

---

## ⚠️ Notes

* Player names are fictional placeholders
* No backend, AI, or persistence
* This is a **proof of concept**, not a production build

---

## 🏁 Goal

Validate that a rugby-themed, Snap-style card game:

* Is readable in under 2 minutes
* Is fun in under 5 minutes
* Feels tactical without complexity

If it passes those tests, it’s worth taking further.

---

🏉 Built for experimentation, iteration, and fun.
