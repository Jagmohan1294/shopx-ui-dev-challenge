import React from 'react'
import './List.css'

function List(props){
    return(
        <div className="list">
            <div>
                Radio Button
            </div>
            <div>
                {props.task}
            </div>
            <div>
                delete option
            </div>
        </div>
    )
}

export default List