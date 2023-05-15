import React, { useState } from "react";
import uuid from "react-uuid";
import ItemList from "./itemList.js"
import AddItem from "./addItem.js"

export default function Shop() {
const [items, setItems] = useState([]);
const [name, setName] = useState("");
const [desc, setDesc] = useState("");

function handleRemoveClick(id) {
const removedItems = items.filter((item) => item.id !== id);
setItems(removedItems);
}

function handleAddSubmit(e) {
e.preventDefault();
if (name && desc) {
setItems([
...items,
{
name: name,
desc: desc,
id: uuid()
}
]);
setName("");
setDesc("");
} 
}

return (
<>
<AddItem onAddSubmit={handleAddSubmit} name={name} desc={desc} setName={setName} setDesc={setDesc} />

<div>
{items.length === 0 && <p className="ui-title">Добавьте первый товар</p>}
</div>

<ItemList items={items} onRemoveClick={handleRemoveClick} />

</>
);
}