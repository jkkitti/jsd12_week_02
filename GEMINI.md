# GEMINI.md - Project Context: JSD12 Week-02 Inventory Management

This directory contains the documentation, design diagrams, and database schema for an **Inventory Management / E-commerce System** (specifically tailored for a cafe/restaurant context), developed as part of the JSD12 course (Week 02).

## Project Overview

The project aims to solve problems related to manual stock tracking, such as outdated information and lack of movement history. It focuses on a system that manages products, ingredients, suppliers, and staff to streamline operations and ensure stock availability.

- **Primary Domain:** Inventory Management / Restaurant POS
- **Key Features:** 
  - Product/Ingredient management.
  - Supplier tracking.
  - Staff and order management.
  - Stock movement and recipe mapping.
- **Main Technologies:**
  - **Database:** PostgreSQL (Schema design and queries).
  - **Logic/Data Modeling:** JavaScript (Object representation).
  - **Design:** Excalidraw (Architecture and ER Diagrams).

## Directory Overview

The project is structured to follow a standard development lifecycle: Requirements -> Design -> Database Schema -> Initial Logic.

| Category | Files | Description |
| :--- | :--- | :--- |
| **Requirements** | `01_my-ecommerce.md`, `05_product-backlog.md` | Problem statement, solutions, and user stories. |
| **Design** | `02_...`, `03_...`, `04_...excalidraw` | Business model, Use Cases, and ER Diagrams. |
| **Database** | `postgresql/` | SQL scripts for table creation and data population. |
| **Logic/Drafts** | `06_bring-it-to-javascript.js` | JavaScript objects representing the core data structures. |

## Key Files & Modules

### 1. Database Schema (`postgresql/`)
- `create-tables.sql`: The master script to initialize the PostgreSQL schema.
- **Tables include:** `Suppliers`, `Staff`, `Ingredients`, `MenuItems`, `RecipeItems` (Join table), `Orders`, and `OrderItems`.
- `query.sql`: Contains sample queries for data retrieval.
- Scripts `01_...` to `07_...` provide modular data insertion and table management.

### 2. Requirements & Backlog
- `05_product-backlog.md`: Lists 15 prioritized user stories covering CRUD operations, stock alerts, and search/filtering.

### 3. Data Models (`06_bring-it-to-javascript.js`)
- Provides a bridge between the SQL schema and JavaScript, defining how Categories, Products, Users, and Stock Movements should be represented as JS objects.

## Usage & Development

### Database Setup
To set up the database locally:
1. Ensure PostgreSQL is installed.
2. Run the `create-tables.sql` script to build the structure.
3. Use the numbered SQL files in `postgresql/` to populate or manage specific entities.

### Design Review
Diagrams (`.excalidraw`) can be viewed at [excalidraw.com](https://excalidraw.com) or via compatible IDE extensions to understand the system's architecture and relationship mapping.

### Future Implementation
The project is currently in the design and database definition phase. Future steps involve building the Web Application frontend and backend API as outlined in `01_my-ecommerce.md`.
