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

const Total = (total) => {
  return(
    <div>
      <p>
        Number of exercises {total.num}
      </p>
    </div>    
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const content = [
    {name: part1, num:exercises1},
    {name: part2, num:exercises2},
    {name: part3, num:exercises3}
  ]

  return (
    <div>
      <Header name={course}/>
      <Content content={content}/>
      <Total num={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App
