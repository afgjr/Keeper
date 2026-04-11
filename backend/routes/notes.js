const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// Get all notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new note
router.post('/', async (req, res) => {
  if (!req.body.title || req.body.title.trim() === '') {
    return res.status(400).json({ message: 'Title cannot be empty' });
  }
  if (!req.body.content || req.body.content.trim() === '') {
    return res.status(400).json({ message: 'Content cannot be empty' });
  }

  const note = new Note({
    title: req.body.title,
    content: req.body.content,
    color: req.body.color || '#fff'
  });

  try {
    const newNote = await note.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a note by id
router.delete('/:id', async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: 'Note deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a note by id
router.put('/:id', async (req, res) => {
  const id = req.params.id.trim();
  if (!req.body.title || req.body.title.trim() === '') {
    return res.status(400).json({ message: 'Title cannot be empty' });
  }
  if (!req.body.content || req.body.content.trim() === '') {
    return res.status(400).json({ message: 'Content cannot be empty' });
  }
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title: req.body.title, content: req.body.content, color: req.body.color },
      { returnDocument: 'after' }
    );
    console.log(req.body.title)
    res.json(updatedNote);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;