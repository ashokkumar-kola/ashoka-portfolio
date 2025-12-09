import React from 'react'
import { skills } from '../../data/skills-data'
import Skill from './Skill'
import './skills.css'

const Skills = () => {
  return (
    <div className='bg-blue-500 flex flex-col items-center p-4 space-y-4'>
      <div className='w-64'>skills</div>

      {skills.map((skill, i) => {
        return <Skill key={i} skill={skill} />
      })}
    </div>
  )
}

export default Skills