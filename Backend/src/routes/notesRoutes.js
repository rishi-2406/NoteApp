

import express from "express"
import {addNewNote,deleteNote,editNote,fetchNote,fetchAllNotes} from "../controller/notesController.js"

const router = express.Router();

//fetch all notes
router.get('/', fetchAllNotes )

// fetch single node
router.get('/:id', fetchNote )

//add a note
router.post('/', addNewNote)

//edit a note
router.put('/:id', editNote)

//delete a note
router.delete('/:id', deleteNote) 

export default router; 