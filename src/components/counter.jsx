import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [imageUrl, setImageUrl] = useState('https://picsum.photos/200')

  const formCount = () => {
    return count === 0 ? 'Nula' : count
  }
  return (
    <>
      <img src={imageUrl} alt='' />
      <span>{formCount()}</span>
      <button>Increment</button>
    </>
  )
}

export default Counter
