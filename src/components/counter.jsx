import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const formCount = () => {
    return count === 0 ? 'Nula' : count
  }

  const tags = ['tag1', 'tag2', 'tag3']

  const getBadgerclasses = () => {
    let classes = 'badge m-2 bg-'
    classes += count === 0 ? 'danger' : 'primary'
    return classes
  }

  const renderTags = () => {

    if (tags.length === 0) return "no item"
    else {
      return tags.map(tag => <li key={tag}>{tag}</li>)
    }
    
  }

  const handleIncrement=(productId)=>{
      //console.log('increment')
      setCount(count + 1)
      console.log('productId=', productId, 'count=', count)
  }

  return (
    <>
      {tags.length ===0 && "you need to enter item! "}
      {renderTags()}
      <span className={getBadgerclasses()}>{formCount()}</span>
      <button  onClick = {()=>handleIncrement({id: 1})} className='btn btn-secondary btn-sm'>Increment</button>
    </>
  )
}

export default Counter
