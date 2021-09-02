import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(1)

  const formCount = () => {
    return count === 0 ? 'Nula' : count
  }

  const getBadgerclasses = () => {
    let classes = 'badge m-2 bg-'
    classes += count === 0 ? 'danger' : 'primary'
    return classes
  }
  return (
    <>
      <span className={getBadgerclasses()}>{formCount()}</span>
      <button className='btn btn-secondary btn-sm'>Increment</button>
    </>
  )
}

export default Counter
