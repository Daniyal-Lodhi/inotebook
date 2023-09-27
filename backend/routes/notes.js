const express = require('express')
const router = express.Router();
const Notes = require('../models/Notes')
const fetchUser = require('../middleware/fetchuser')    
const { body, validationResult } = require('express-validator');

// ROUTE 1 :get all the notes using  /api/auth/fetchallnotes  , login requred
router.get('/fetchallnotes', fetchUser, async (req, res) => {
    
      const notes = await Notes.find({ user: req.user.id });
       res.json(notes);
})
  

// ROUTE 2 : create Note  /api/auth/createnote  , login requred
router.post('/createnote',fetchUser,[
    body('title','Enter a valid title').isLength({ min: 3 }),
    body('description').isLength({ min: 5 }),
] , async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        const {title, description ,tag} = req.body
        const note = new Notes({title, description ,tag,user:req.user.id})
        const savedNote = await note.save()
        res.json(req.user.id)
    } catch (error) {
        res.send(error)
    }
})

// ROUTE 3 : update Note  /api/auth/updatenote/:id  , login requred

router.put('/updatenote/:id',fetchUser, async (req,res)=>{
    let id = req.params.id
    let note = await Notes.findById(id)
    const {title, description ,tag} = req.body
    let newNote = {}
    if(title)newNote.title = title
    if(description)newNote.description = description
    if(tag)newNote.tag = tag

    try {
        if (note.user.toString() !== req.user.id){
            return res.status(401).send("not allowed to make changes")
        }
        else{
        note = await Notes.findByIdAndUpdate(id,{$set:newNote},{new:true})
        // res.send("author matched , Changes have been made")
        res.send(note)
    }
    } catch (error) {
        res.send(error)
    }
})
// ROUTE 4 : delete Note  /api/auth/deletenote/:id  , login requred

router.delete('/deletenote/:id',fetchUser, async (req,res)=>{
    // let id = req.header('id')
    let id = req.params.id
    let note = await Notes.findById(id)
    if(!note){return res.status(404).send("note note found")}

    try {
        if (note.user.toString() !== req.user.id){
            return res.status(401).send("not allowed to make changes")
        }
        else{
        note.deleteOne()
        res.send("note deleted")
    }
    } catch (error) {
        res.send(error)
    }
})
module.exports = router ; 