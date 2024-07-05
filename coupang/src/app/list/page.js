'use client'
import React, { useState } from 'react';

export default function List() {
  let products = ['tomato', 'pasta', 'cheese'];
  // const [counter, setCounter] = useState(Array(products.length).fill(0))
  const [counter, setCounter] = useState(products.map(item => 0))
  console.log('counter', counter)

  const handlerIncrement = (i) => {
    let ctn = [...counter]
    ctn[i]++
    setCounter(ctn)
  }

  const handlerDecrement = (i) => {
    let ctn = [...counter]
    if(ctn[i] > 0){
      ctn[i]--
      setCounter(ctn)
    }
    
  }

  return (
    <div>
      <h4 className='title'>상품목록</h4>
      {products.map((item, i) => (
        <div className="food" key={i}>
          <img src={`/food${i}.png`} alt={item} className='food-img'></img>
          <h4>{item} $40</h4>
          <span>{counter[i]}</span>
          <button onClick={() => handlerIncrement(i)}>+</button>
          <button onClick={() => handlerDecrement(i)}>-</button>
        </div>
      ))}
    </div>

  );
}
