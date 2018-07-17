import React  from 'react';

export const MobileProduct = (props)=>{
    return (
       <div key={props.mobile.id}> <li className={props.mobile.id>1001?'red':'green'}   >{props.mobile.id} {props.mobile.name} {props.mobile.price} </li>
       <button onClick = {props.addItem}>Add to Cart</button>
       </div>
    );
}