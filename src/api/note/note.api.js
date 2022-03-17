import axios from 'axios';

export const loadTasks = () => {
  return axios.get('http://localhost:3001/notas');
};

export const addTask = (task) => {
  return axios.post('http://localhost:3001/notas/', task);
};

export const deleteTask = (id) => {
  return axios.delete(`http://localhost:3001/notas/${id}`);
};

export const editTask = (id, titulo) => {
  return axios.patch(`http://localhost:3001/notas/${id}`, { titulo });
};

export const getTask = (id) => {
  return axios.get(`http://localhost:3001/notas/${id}`);
};

export const NoteAPI = {
  loadTasks,
  addTask,
  deleteTask,
  editTask,
  getTask,
};
