import React from 'react'
const Card = (props) => (
<div className='w-72'>
    <img src={`/images/${props.image}`} alt={props.name}/>
    <p>{props.name}</p>
</div>
)

export default Card