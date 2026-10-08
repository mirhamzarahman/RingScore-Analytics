# 🎯 RingScore Analytics

A lightweight JavaScript scoring engine that evaluates objects placed on layered grid regions using border-distance analysis.

Instead of hardcoding every scoring region, the system automatically determines each cell's score based on its geometric position inside the grid.

---

# 📖 Project Overview

RingScore Analytics is a conceptual spatial-scoring engine that assigns weighted values to objects placed inside concentric grid regions.

The project demonstrates how simple geometric calculations can replace manually defining multiple scoring zones, resulting in a clean, scalable, and efficient solution.

---

# 🌍 Real-World Concept

Imagine building:

- 🎯 Digital shooting-range software
- 🎮 Arcade scoring systems
- 🧩 Puzzle games
- 🤖 Robot precision evaluation
- 📊 Heat-map scoring systems
- 📍 Grid-based simulations

Instead of storing every scoring region individually, the engine determines the correct score mathematically.

---

# 💡 Core Concept

Every grid cell belongs to a specific layer.

The layer is determined by calculating the minimum distance from that cell to any border.

Greater distance from the border means a higher-value scoring zone.

```
Layer = Minimum Distance to Any Grid Edge
Score = Layer + 1
```

This removes the need for manually defining rings.

---

# ⚙️ How the System Works

1. Read the scoring grid.
2. Scan every cell.
3. Detect whether an object exists.
4. Calculate its nearest border.
5. Determine the layer.
6. Convert the layer into a score.
7. Add the score to the final total.

---

# 🧠 Algorithm Used

## Matrix Traversal

The engine visits every cell exactly once.

## Border-Distance Analysis

For every occupied cell:

```
layer = min(
    top,
    left,
    bottom,
    right
)
```

The score becomes:

```
score = layer + 1
```

---

# 🔄 Step-by-Step Logic

```
Start

↓

Visit every grid cell

↓

Object found?

↓

No → Continue

↓

Yes

↓

Find nearest border

↓

Determine layer

↓

Convert layer into score

↓

Add to total

↓

Repeat

↓

Return total score
```

---

# ✨ Key Features

- 🎯 Automatic layered-region detection
- ⚡ Efficient O(rows × columns) traversal
- 📏 No hardcoded scoring zones
- 🧩 Simple mathematical implementation
- 📈 Easily scalable for larger grids
- 🧠 Clean geometric logic

---

# 📌 Example Use Case

Suppose a simulation records successful hits inside a layered arena.

Input Grid

```
X.........
..........
.......X..
.....X....
......X...
..........
.........X
..X.......
..........
.........X
```

Output

```
17
```

The engine automatically determines each object's layer and calculates the total weighted score.

---

# ⏱ Complexity

| Metric | Value |
|----------|--------|
| Time Complexity | O(rows × columns) |
| Space Complexity | O(1) |

---

# 💻 Technologies Used

- JavaScript (ES6)
- Matrix Traversal
- Geometric Algorithms
- Grid Processing

---

# 📂 Project Structure

```
RingScore-Analytics/
│
├── README.md
├── ringScoreAnalytics.js
└── LICENSE
```

---

# 🚀 How to Run

Clone the repository

```bash
git clone https://github.com/mirhamzarahman/RingScore-Analytics.git
```

Go into the project

```bash
cd RingScore-Analytics
```

Run

```bash
node ringScoreAnalytics.js
```

---

# 📚 Learning Outcomes

This project demonstrates:

- Grid traversal
- Matrix processing
- Spatial reasoning
- Border-distance calculations
- Layer detection
- Algorithm optimization
- Geometric scoring systems
- Clean JavaScript implementation

---

# 🚀 Possible Future Improvements

- 🎨 Interactive visualization
- 📊 Heatmap generation
- 📈 Score analytics dashboard
- 🖱 Drag-and-drop grid editor
- 📦 Custom scoring rules
- 📱 Web interface
- 🌐 API support

---

# 📄 License

This project is licensed under the MIT License.

Feel free to use, modify, and learn from this project.
