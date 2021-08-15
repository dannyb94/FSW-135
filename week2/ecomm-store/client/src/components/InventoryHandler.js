import { useState } from 'react';

export default function InventoryHandler({ btnText, submit, brand, type, price, _id }){
    const initialInputs = { brand: brand || '', type: type || '', price: price || '' }
    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(inputs, _id);
        setInputs(initialInputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <span id='alignIt'>
                <input type="text"  name="brand"  value={inputs.brand}  className='switchUp'  onChange={handleChange}  placeholder="Brand Name"/>
                <input type="text"  name="type"  value={inputs.type}  className='switchUp'  onChange={handleChange}  placeholder="Item Type"/>
                <input type="number"  name="price"  value={inputs.price}  className='switchUp'  onChange={handleChange}  placeholder="Price"/>
            
                {/* <br></br> */}
                <button id="postSub">{btnText}</button>
            </span>
        </form>
    )
}