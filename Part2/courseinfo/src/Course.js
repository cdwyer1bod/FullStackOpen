import React from 'react'
import ReactDOM from 'react-dom'
const Header = ({name}) => <h1> {name} </h1>

const ContentFormat = ({part}) => {
  console.log(part)
  const {name, exercises} = part
  return(
    <li> {name}: {exercises} </li>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce((acc, part) => {
    return acc + part.exercises;
  }, 0);
  console.log(total);
  return <p>Total of {total} exercises</p>;
};

const Course = ({course}) => {
  const {name, parts} = course;
  return(
    <div>
      <Header name={name} />
      {parts.map(part => <ContentFormat key={part.id} part={part}/>)}
      <Total parts={parts} />
    </div>
  )
}

export default Course;
