import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { NoteAPI } from '../../api/note/note.api';
import './edit-note.component.style.css';

export const EditNote = () => {
  const { id } = useParams();
  const [task, setTask] = useState([]);
  const [error, setError] = useState('');
  const [titulo, setTitulo] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getNote();
  }, [id]);

  const getNote = () => {
    NoteAPI.getTask(id)
      .then((resp) => {
        setTask(resp.data);
      })
      .catch((err) => {
        setError('Invalid operation');
      });
  };

  const handleChange = ({ target }) => {
    setTitulo(target.value);
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleSave = () => {
    NoteAPI.editTask(id, titulo)
      .then((resp) => {
        console.log(resp);
        handleBack();
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <section className="container">
      <div className="row">
        <div className="col">
          <h1 className="p-4">Editing Task "{task.titulo}"</h1>
        </div>

        <section className="row p-3 pl-1 b-none">
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              defaultValue={task.titulo}
              onChange={handleChange}
            />
          </div>
        </section>

        <section className="row p-3 pl-1">
          <div className="col">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleBack}
            >
              Cancel
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};
