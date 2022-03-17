import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom';
import { EditNote } from './components/edit-note/edit-note.component';
import { Note } from './components/notes/note.component';

export function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
      <Routes>
        <Route path="/edit-task/:id" element={<EditNote />} />
        <Route path="/" element={<Note />} />
      </Routes>
    </BrowserRouter>
  );
}
