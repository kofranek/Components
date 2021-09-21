import React, { useState } from 'react'

const Counter = props => {
  console.log('props=', props)
  const [value, setValue] = useState(props.value)
  const formValue = () => {
    return value === 0 ? 'Ноль' : value
  }

  const getBadgerclasses = () => {
    let classes = 'badge m-2 bg-'
    classes += value === 0 ? 'danger' : 'primary'
    return classes
  }

  const handleIncrement = productId => {
    //console.log('increment')
    setValue(value + 1)
    console.log('productId=', productId)
  }

  const handleDecrement = productId => {
    //console.log('increment')
    if (value > 0) setValue(value - 1)
    console.log('productId=', productId)
  }

  return (
    <div>
      <h4>{props.name}</h4>
      <span className={getBadgerclasses()}>{formValue()}</span>
      <button
        onClick={() => handleIncrement({ id: 1 })}
        className='btn btn-secondary btn-sm'
      >
        Increment
      </button>
      <button
        hidden={value === 0}
        onClick={() => handleDecrement({ id: 1 })}
        className='btn btn-secondary btn-sm m-2'
      >
        Decrement
      </button>
    </div>
  )
}

export default Counter
