
import Note from '../model/Note.js'

//fetch all notes
export const fetchAllNotes = async (req,res) => {
    try{
        const noteList = await Note.find().sort({createdAt : -1}); // we can use sort to get latest first also 
        res.status(200).json(noteList);
    } catch (e) {
        console.error("Error in fetching all notes :" , e);
        res.status(500).json({message : "Error in fetching all notes " + e})
    }
    
} 

export const fetchNote = async (req,res) => {
    try{
        const note = await Note.findById(req.params.id);
        res.status(200).json(note);
    } catch (e) {
        console.error("Error in fetching single note :" , e);
        res.status(500).json({message : "Error in single node " + e})
    }
    
} 

//add a note
export const addNewNote = async (req,res) => {
    const {title, content} = req.body;
    const newNote = new Note({title , content})
    try {
        const response = await newNote.save(); 
        res.status(201).json({message : 'Blog was added successfully', addedNote : response})
    } catch (e) {
        res.status(500).json({message : "Error in making new note " + e})
    }   
}

//edit a note
export const editNote = async (req,res) => {
    const {title, content} = req.body;
    // there is no need for both to be defined in body, even one is there then its okay 
    //mongoose only will change the paramaters which are defined 
    
    const newNote = new Note({title , content})

    try {
        const id = req.params.id;
        // adding new = true means we will get the updated note as the edited note 
        const editedNote = await Note.findByIdAndUpdate(id, {title, content}, {new : true});
        if(!editedNote)  return res.status(404).json({message : "Note is not there in the database"})
        res.status(201).json({message : 'Blog was edit successfully', editedNote})
    } catch (e) {
        res.status(500).json({message : "Error in editing a note " + e})
    }   
}

//delete a note
export const deleteNote = async (req,res) => {
    const id = req.params.id;
     try {
        const deletedNode = await Note.findByIdAndDelete(id);
        if(!deletedNode)  return res.status(404).json({message : "Note is not there in the database"})
        res.status(201).json({message : 'Blog was deleted successfully', deletedNode})
    } catch (e) {
        res.status(500).json({message : "Error in deleting a note " + e})
    }   
}