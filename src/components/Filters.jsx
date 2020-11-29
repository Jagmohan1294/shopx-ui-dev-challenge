import React from 'react'
import './Filters.css'

function Filters(){
    return(
        <div className="filters">
            <div>
                3 items remaining
            </div>
            <div>
                <button>
                    All
                </button>
                <button>
                    Active
                </button>
                <button>
                    Completed
                </button>
            </div>
            <div>
                CLEAR COMPLETED
            </div>
        </div>
    )
}

export default Filters