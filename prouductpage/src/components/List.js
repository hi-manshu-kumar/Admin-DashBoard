import React from 'react';
import {ProductList} from './ProductList';
import {Count} from './Count';
export const List = (props) => {
    return (
        <div>
            <fieldset>
                <legend>List Of Item</legend>
                <ProductList list={props.list} addtocartlist = {props.addtocart}></ProductList>
                <Count count={props.count}></Count>
            </fieldset>
        </div>
    )
}