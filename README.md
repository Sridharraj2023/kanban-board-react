# 🏗️ Kanban Board React Application

> **A powerful, interactive Kanban board built with React and TypeScript — featuring drag-and-drop task management, modal task details, task creation, deletion, and advanced compound filtering.**

---

## 🚀 Project Overview

This project implements a **Kanban board frontend** designed for efficient task management.  
It uses **React (TypeScript)** with **Vite** for fast builds, **NPM** as the package manager, and **Fluent UI** for design consistency.

You can **drag tasks between columns**, view detailed task information in modals, create new tasks via a form, delete tasks, and filter tasks dynamically using advanced **compound logic** (AND, OR, NOT) on **assignees** and **tags**.

---

## 🔧 Tech Stack

| Technology       | Purpose                      |
| ---------------- | ----------------------------|
| React + TypeScript | Frontend framework & typing |
| Vite             | Build tool                  |
| NPM             | Package manager             |
| Fluent UI        | UI component design system  |
| Custom CSS       | Styling                    |

---

## 🎯 Features

### 1️⃣ Kanban Board  
- Columns: **To Do**, **In Progress**, **Review**, **Done**  
- Drag and drop cards between columns  
- Tasks rendered from dummy data  

### 2️⃣ Card Preview  
- Shows **Title**, **Due Date**, **Assignee**, and **Tag** on cards  

### 3️⃣ Card Detail Modal  
- Displays detailed info:  
  - Title  
  - Description (plain text)  
  - Tag  
  - Created At  
  - Created By  
  - Assignee  
  - Estimation  
- Delete functionality available  
- No edit functionality  

### 4️⃣ Create Card  
- Form to create new tasks  
- Supports all above fields  
- No modal editing, creation only  

### 5️⃣ Advanced Filtering  
- Filter tasks by **Assignee** and **Tag**  
- Support for **AND**, **OR**, **NOT** compound logic  
- Examples supported:  
  - Assignee is A, B **AND** Tag is design  
  - Assignee is B **OR** Tag is backend  
  - Assignee is **NOT** A **AND** Tag is frontend, backend  
- Filters dynamically affect visible cards  

---

## 🛠️ Installation & Setup

1. **Clone the repo**  
```bash
git clone https://github.com/yourusername/kanban-board-react.git
cd kanban-board-react
