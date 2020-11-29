import React from 'react'
import './Filters.css'

function Filters(props) {
    return (
        <div className="filters">
            <div>
                {props.activeCount} items remaining
            </div>
            <div className="filter-options">
                <button className="button" onClick={() =>props.onFilterApply('all')}>
                    All
                </button>
                <button className="button" onClick={() =>props.onFilterApply('active')}>
                    Active
                </button>
                <button className="button" onClick={() =>props.onFilterApply('completed')}>
                    Completed
                </button>
            </div>
            <div>
                <button className="button">
                    CLEAR COMPLETED
                </button>
            </div>
        </div>
    )
}

export default Filters