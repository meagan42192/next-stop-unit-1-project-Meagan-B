import { useState } from "react";
import categories from "../../data/packingListCatData";
import Header from "../layout/Header";

function PackingList({ onAddItem }) {
    const [item, setItem] = useState("");
    const [selectedValue, setSelectedValue] = useState('');
    const [packingItems, setPackingItems] = useState([]);
    const newItem = {
        id: Math.random(),
        name: item,
        category: selectedValue
};
    const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
    const handleClear = () => {
    setSelectedValue(''); // Reset the state to clear the selection
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
            setPackingItems([
                ...packingItems,
                newItem
        ]);
  };
    return (
        <>
        <Header />
        <div>
            <h2>Add an Item</h2>

             {/* Input New Item Text Field */}
            <input className="add-item-input"
            placeholder="Add a new item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            />

            {/* Category Drop Down */} 
            <select 
            className="category-select"
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
            <button className="add-item-button"
            onClick={() => {
                HandleAddItems();
                setItem("");
                handleClear();
            }}
            disabled ={item.length === 0 || selectedValue === ""}
            >
            Add Item
            </button>

            {/* Packing List */}
            <ul>My Packing List
            {packingItems.map((packingItem) => (
                <li key={packingItem.id}>
                    <label>
                        <input
                        type="checkbox"
                        />
                        {packingItem.name} {packingItem.category}
                    </label>
                    <button onClick={() => {
                        handleSingleDelete(packingItem.id)
                    }}>Delete</button>
                </li>
))}
            </ul>
            <button className="clear-button" onClick={clearList}>
                Clear List
            </button>

        </div>
        </>
    );
}

export default PackingList;