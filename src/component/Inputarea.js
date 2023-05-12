import React, { useState } from 'react'

const Inputarea = (props) => {
    const [goods, setgoods] = useState();
    function fun(event) {
        const x = event.target.value;
        setgoods(x);
    }
    return (
        <div className="form">
            <input value={goods} onChange={fun} type="text" name="item" />
            <button onClick={() => {
                props.onAdd(goods)
                setgoods(" ");
            }}
            >
                <span>Add</span>
            </button>
        </div>
    )
}

export default Inputarea