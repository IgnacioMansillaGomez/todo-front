import React, { useState, useEffect } from 'react';

import { NoteAPI } from '../../api/note/note.api';

import { useNavigate } from 'react-router-dom';

import './note.component.style.css';

export const Note = () => {
  const [todo, setTodo] = useState([]);
  const [titulo, setTitulo] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    NoteAPI.loadTasks().then((resp) => {
      setTodo(resp.data);
    });
  };

  const addNote = (titulo) => {
    const task = {
      titulo,
    };
    NoteAPI.addTask(task).then((resp) => {
      getNotes();
    });
  };

  const deleteNote = (id) => {
    NoteAPI.deleteTask(id).then((resp) => {
      getNotes();
    });
  };

  const handleOnTituloChange = ({ target }) => {
    setTitulo(target.value);
  };

  const handleOnEdit = (es) => {
    navigate(`/edit-task/${es.id}`);
  };

  return (
    <section className="container">
      <div className="row">
        <div className="col">
          <h1 className="p-4">TO-DO List</h1>
        </div>
        <table className="table table-borderless">
          <tbody>
            {todo.map((task) => {
              return (
                <tr key={task.id}>
                  <td className="row p-3">
                    <section className="col-1 p">
                      <input className="form-check-input " type="checkbox" />
                    </section>
                    <section className="col-6">{task.titulo}</section>
                    <section className="col-1 d-flex justify-content-evenly">
                      <button
                        className="btn btn-link"
                        onClick={() => handleOnEdit(task)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-link"
                        type="button"
                        onClick={() => deleteNote(task.id)}
                      >
                        Delete
                      </button>
                    </section>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="row p-3 pl-1">
          <div className="col-7">
            <input
              type="text"
              className="form-control "
              placeholder="Task..."
              onChange={handleOnTituloChange}
            />
          </div>
          <div className="col-3">
            <button
              className="btn btn-outline-secondary s"
              type="button"
              onClick={() => addNote(titulo)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
