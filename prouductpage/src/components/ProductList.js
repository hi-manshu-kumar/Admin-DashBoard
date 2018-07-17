import React from 'react';
import {MobileProduct} from './product/product'
export const ProductList = (props)=>{
    var jsx =<h1>Item are </h1>;
     jsx = props.list.length>0?jsx:<h2>No Records</h2>
     console.log("JSX is ",typeof jsx);
     console.log("mobileobject is ");
     return (
         <div>
             {jsx}
             <fieldset>
                 <legend>Product List</legend>
                 {props.list.length}
                 
                 {props.list.map(mobileObject=>{
                     return <MobileProduct mobile={mobileObject} addItem = {props.addtocartlist}/>
                     
                 })}
             </fieldset>
         </div>
     )
 }