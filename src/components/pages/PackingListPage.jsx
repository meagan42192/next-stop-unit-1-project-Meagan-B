import { useState } from "react";
import categories from "../../data/packingListCatData";
import Header from "../layout/Header";

function PackingList() {
    const [item, setItem] = useState("");
    const [selectedValue, setSelectedValue] = useState('');
    const [packingItems, setPackingItems] = useState([]);
    const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
    const handleClear = () => {
    setSelectedValue(''); 
  };
    const clearList = () => {
    setPackingItems([]);
  };
  const handleSingleDelete = (id) => {
    const updatedPackingItems = packingItems.filter(
        (packingItem) => packingItem.id !== id);
    setPackingItems(updatedPackingItems);
  };


  function HandleAddItems (){
        const newItem = {
        id: Date.now(),
        name: item,
        category: selectedValue
    };

            setPackingItems([
                ...packingItems,
                newItem
        ]);
  };
    return (
        <>
        <Header />
    <div className="packing-list-container">
        <div className="add-item-container">
            <h2 className="add-item-header">Add an Item</h2>

             {/* Input New Item Text Field */}
            <input className="add-item"
            placeholder="Add a new item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            />

            {/* Category Drop Down */} 
            <select 
            className="add-item-input"
            value={selectedValue}
            onChange={handleChange}
            >
            <option value="" disabled> 
                Select a Category
            </option> 
            {categories.map((category) => (
            <option key={category} value={category}>
                {category}
            </option>
            ))}        
            </select>

             {/* Add Item Button */}
            <button id="add-item-btn" className="submit-btn"
            onClick={() => {
                HandleAddItems();
                setItem("");
                handleClear();
            }}
            disabled ={item.length === 0 || selectedValue === ""}
            >
            Add Item
            </button>
        </div>

            {/* Packing List */}
            <div className="my-packing-list-container">
                <h2>My Packing List</h2>
            <ul className="my-packing-list-ul">
            {packingItems.map((packingItem) => (
                <li key={packingItem.id}>
                    <label>
                        <input
                        className="checkbox-input"
                        type="checkbox"
                        />
                    <span className="packing-item-name">
                        {packingItem.name}
                    </span> 
                    <span className="packing-item-category">
                        {packingItem.category}
                    </span>
                    </label>
                    <button className="single-delete-btn" onClick={() => {
                        handleSingleDelete(packingItem.id)
                    }}>X</button>
                </li>
))}

            </ul>
            <button id="clear-all-btn" className="submit-btn" onClick={clearList}>
                Clear List
            </button>
            </div>
        </div>
        </>
    );
}

export default PackingList;