import React from "react"
import Item from "./item.js"

export default function ItemList(props) {

return (<>
<ul className="ui-list">
<li className="ui-item-list">
{props.items.map((item) => (
<li>
<Item key={item.id} info={item} />
<button
onClick={() => props.onRemoveClick(item.id)}
className="item-button"
>
Удалить
</button>
</li>
))}
</li>
</ul>
</>)
} 
