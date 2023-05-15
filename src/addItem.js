import React from "react"

export default function AddItem(props) {

return (<>
<form onSubmit={props.onAddSubmit}>
<div>
<label htmlFor="name">Название товара: </label>
<input
type="text"
placeholder="Название товара"
className="ui-textfield"
id="name"
value={props.name}
onChange={(e) => props.setName(e.target.value)}
/>
</div>
<div>
<label htmlFor="desc">Описание товара: </label>
<input
type="text"
placeholder="Описание товара"
className="ui-textfield"
id="desc"
value={props.desc}
onChange={(e) => props.setDesc(e.target.value)}
/>
</div>

<div className="form-footer">
{props.name ? (
<div className="validation"></div>
) : (
<div className="validation">Название товара не заполнено</div>
)}
{props.desc ? (
<div className="validation"></div>
) : (
<div className="validation">Описание товара не заполнено</div>
)}

<input type="submit" className="ui-button" value="Добавить" />
</div>
</form>
</>)
}