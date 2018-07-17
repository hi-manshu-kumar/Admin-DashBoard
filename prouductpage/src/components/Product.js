import React from 'react';
import {TotalAdded} from './TotalAdded'

export const Product = (props) => {
    return (
        <fieldset>
            <legend>Product Section</legend>
            
            <button onClick = {props.additem}>Add to List</button> 
            <button onClick = {props.parentfn}>Load Product</button> {/* do ajax call  */}
            <br/>
            <label htmlFor="">Id</label>
            <input type="text" placeholder = "Enter id here"  onChange={props.ida}/>
            <br/>
            <label htmlFor="">Name</label>
            <input type="text" placeholder = "Enter name here" onChange={props.namea}/>
            <br/>
            <label htmlFor="">Price</label>
            <input type="text" placeholder = "Enter price here" onChange={props.pricea}/>
            <br/>
            <label htmlFor="">URL</label>
            <input type="text" placeholder = "Enter URL here" onChange={props.urla}/>
            
            <TotalAdded listc = {props.list} ></TotalAdded>

        </fieldset>   
    )
}