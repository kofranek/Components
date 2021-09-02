import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const formCount = () => {
    return count === 0 ? 'Ноль' : count
  }

  const getBadgerclasses = () => {
    let classes = 'badge m-2 bg-'
    classes += count === 0 ? 'danger' : 'primary'
    return classes
  }

  const handleIncrement = productId => {
    //console.log('increment')
    setCount(count + 1)
    console.log('productId=', productId)
  }

  const handleDecrement = productId => {
    //console.log('increment')
    if (count>0) setCount(count - 1)
    console.log('productId=', productId)
  }

  let buttonVisibility = "true"
  return (
    <>
      <span className={getBadgerclasses()}>{formCount()}</span>
      <button
        onClick={() => handleIncrement({ id: 1 })}
        className='btn btn-secondary btn-sm'
      >
        Increment
      </button>
      <button
        hidden = {count===0}
        onClick={() => handleDecrement({ id: 1 })}
        className='btn btn-secondary btn-sm m-2'
      >
        Decrement
      </button>
    </>
  )
}

export default Counter
