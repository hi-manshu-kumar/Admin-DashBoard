import React from 'react';

export const TotalAdded = (props) => {
    return (
        <div>
            <h3>Total Added Products</h3>
            <input type="number" value={props.listc.length} disabled/>
        </div>
    )
} 