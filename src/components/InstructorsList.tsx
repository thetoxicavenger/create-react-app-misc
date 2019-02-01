import React from 'react'
import Instructor from './Instructor'
import { Instructors } from '../types'
/*
function sum(a, b) {
    if (typeof a !== 'number' && typeof b !== 'number') throw new Error()
    return a + b
}
*/

function sum(a: number, b: number) : number {
    return a + b
}

const InstructorsList = ({ instructors } : { instructors: Instructors }) => {
    return (
       <>
        {instructors.map(instructor => {
            return (
                <Instructor key={instructor.id} instructor={instructor} />
            )
        })}
       </>
    )
}

export default InstructorsList