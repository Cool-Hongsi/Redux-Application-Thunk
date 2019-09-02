import React from 'react';

const colorList = ["red", "black", "green", "blue", "yellow", "violet"];

const Counter = ( {color, number, pending, error, data, onSelectedColor, onSelectedIncrement, onSelectedDecrement} ) => { // set the props
    return(
        <div>
            {colorList.map((el, index) => {
                return(
                    <button key={index} style={{backgroundColor:`${el}`, outline:"none"}} onClick={() => onSelectedColor(el)}>{el}</button>
                )
            })}
            
            <br/>

            <h2 style={{color}}>{number}</h2>
            <button onClick={onSelectedIncrement}>+</button>
            <button onClick={onSelectedDecrement}>-</button>

            <br/>

            {pending ? <h3>Loading...</h3> : null}
            {error ? <h3>Error...</h3> : (<div> <h4 style={{color}}>Title : {data.title}</h4> <h4 style={{color}}> Body : {data.body}</h4> </div>)}
        </div>
    )
}

export default Counter;