const Part = (part) => {
  return(
    <div>
      <p>
        {part.name} {part.num}
      </p>
    </div>    
  )
}

const Header = (title) => {
  return(
    <div>
      <h1>
        {title.name}
      </h1>
    </div>    
  )
}

const Content = ({content}) => {
  return(
    <div>
      <Part name={content[0].name} num={content[0].num}/>
      <Part name={content[1].name} num={content[1].num}/>
      <Part name={content[2].name} num={content[2].num}/>
    </div>    
  )
}

const Total = ({parts}) => {
  let total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return(
    <div>
      <p>
        Number of exercises {total}
      </p>
    </div>    
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header name={course}/>
      <Content content={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App
