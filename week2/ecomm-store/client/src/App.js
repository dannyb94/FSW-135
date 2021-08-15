import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Inventory from './components/Inventory';
import InventoryHandler from './components/InventoryHandler';
import { Switch, Route } from 'react-router-dom';


function App() {
  const [inventory, setInventoryItems] = useState([]);

  const getInventory = () => {
    axios.get('/inventory')
      .then(res => setInventoryItems(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }

  useEffect(() => {
    getInventory();
  }, [])

  const addItem = (newInventory) => {
    console.log(newInventory)
    axios.post('/inventory', newInventory)
      .then(res => {
        setInventoryItems(prevInventory => [...prevInventory, res.data])
      })
      .catch(err => console.log(err))
  }

  const deleteInventoryItem = (itemId) => {
    axios.delete(`/inventory/${itemId}`)
      .then(res => {
        setInventoryItems(prevInventory => prevInventory.filter(item => item._id !== itemId))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  const editInventoryItem = (updates, itemId) => {
    axios.put(`/inventory/${itemId}`, updates)
      .then(res => {
        setInventoryItems(prevInventory => prevInventory.map(item => {
          // console.log(itemId, item._id)
          // console.log(item)
          // console.log(res.data)
          return item._id !== itemId ? item : res.data}))
      })
      .catch(err => console.log(err))
  }

  //-----------------------------------------------
  const inventoryList = inventory.map(item => <Inventory {...item}  deleteInventoryItem={deleteInventoryItem}  editInventoryItem={editInventoryItem}  key={item.brand} />)

  return (
    <div className='bounties'>
      
      
      <Switch>
        <Route exact path = "/inventory" render = {() => <div>
          <InventoryHandler  btnText='Add Item' submit= {addItem} />
          {inventoryList}</div>}/>
      </Switch>
    </div>
  );
}

export default App;
