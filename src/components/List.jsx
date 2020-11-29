import React from 'react'
import './List.css'

function List(props){
  //  console.log(props)
    return(
        <div className="list">
            <div>
                Radio Button
            </div>
            <div>
                {props.task}
            </div>
            <div>
                <button onClick={() => props.handleDeleteItem(props.id)}>
                    delete
                </button>
            </div>
        </div>
    )
}

export default List