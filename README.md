# Hospital Nx

## Overview
Hospital Nx is a modular hospital management system built using Nx and Angular micro-frontends. It consists of three main micro-frontends (MFEs):

- **Host (Dashboard)**: The main application that manages and integrates all MFEs.
- **Patients MFE**: Handles patient-related CRUD operations.
- **Doctors MFE**: Manages doctor-related data and interactions.
- **GraphQL Server**: Provides a backend API for the system.

The application is structured to facilitate easy scaling, maintainability, and modularity.

## Features
- Patient and doctor management.
- Dashboard for administrative control.
- GraphQL backend for efficient data fetching.
- Uses Angular 19 and Nx for optimized micro-frontend architecture.
- Local development support with JSON Server.

## Tech Stack
- **Frontend**: Angular 19, Apollo Client, Tailwind CSS
- **Backend**: GraphQL, Express.js, JSON Server
- **Tooling**: Nx, Jest, Playwright, ESLint, Prettier

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (latest stable version)
- pnpm (or npm/yarn)

### Setup
Clone the repository and install dependencies:
```sh
pnpm install
```

## Running the Application
### Start All Services
To start the database, GraphQL server, and MFEs simultaneously:
```sh
pnpm start-all
```

### Start Individual Services
- **Frontend Applications:**
  ```sh
  pnpm apps
  ```
- **GraphQL Server:**
  ```sh
  pnpm server
  ```
- **Local JSON Server:**
  ```sh
  pnpm localDB
  ```

## Development
- The project uses **Nx** for workspace management.
- **Tailwind CSS** is used for styling.
- **Apollo Client** is integrated for GraphQL state management.
- **Playwright** is used for end-to-end testing.

## License
This project is licensed under the MIT License.

