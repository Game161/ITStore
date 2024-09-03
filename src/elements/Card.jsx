import React from 'react'
const Card = (props) => (
<div>
    <img src={`/images/${props.image}`} alt={props.name}/>
    <p>{props.name}</p>
</div>
)

export default Card