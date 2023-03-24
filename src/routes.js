/* eslint-disable linebreak-style */
const {
  addNoteHandler,
  getAllNotesHandler,
  getNotesByIdHandler,
  editNotesByIdHandler,
  deleteNotesHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNotesByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNotesByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNotesHandler,
  },
];

module.exports = routes;
