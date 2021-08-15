import React from "react";
import { useState } from "react";
import InventoryHandler from "./InventoryHandler";


export default function Inventory({ deleteInventoryItem, editInventoryItem, brand, type, price, _id }){
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div id="cntnr1">
            { !editToggle ?
                <>
                    <h2>Brand: {brand}</h2>
                    <p>Type: {type}</p>
                    <p>Price: ${price}</p>
                    <button onClick={() => deleteInventoryItem(_id)} id="dltBtn">Delete</button>
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)} id="editBtn">Edit</button>
                </>
                :   
                <>
                    <InventoryHandler  brand={brand}  type={type}  price={price}  btnText="Submit Edit" _id={_id}  submit={editInventoryItem} />
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)} id="closeBtn">Close</button>
                </>
            }
        </div>
    )
}