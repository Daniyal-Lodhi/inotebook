import React, { useEffect } from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
const About = () => {
  const con = useContext(NoteContext)
  useEffect(()=>{
    con.update()
    // eslint-disable-next-line
  },[])
  return (
    <div>
      my name is {con.data.name}
    </div>
  )
}

export default About
