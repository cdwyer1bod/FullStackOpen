import React from 'react'
import ReactDOM from 'react-dom'

const course = {
    name: 'Half Stack application development',
    part: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

const Header = (props) => {
  return(
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>
      {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part={course.part[0].name} exercises={course.part[0].exercises}/>
      <Part part={course.part[1].name} exercises={course.part[1].exercises}/>
      <Part part={course.part[2].name} exercises={course.part[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>
        Number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Header course={course.name}/>
      <Content/>
      <Total exercises1={course.part[0].exercises} exercises2={course.part[1].exercises} exercises3={course.part[2].exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
