# Notes App

A simple, responsive Notes application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Create and view notes
- Responsive design
- Dynamic routing for individual note pages
- Error and loading states
- 404 page handling

## Prerequisites

- Node.js (v18 or later)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/aboodswiti/notes-app.git
cd notes-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add:
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Running the Application

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

- `app/`: Main application directory
  - `components/`: Reusable React components
  - `hooks/`: Custom React hooks
  - `notes/`: Dynamic note route
  - `page.tsx`: Home/notes list page
  - `layout.tsx`: Global layout
  - `not-found.tsx`: 404 page

## Technologies

- Next.js 15
- TypeScript
- Tailwind CSS
- React Hooks

