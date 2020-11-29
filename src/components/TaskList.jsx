import React from 'react'
import Filters from './Filters'

import './TaskList.css'

function TaskList(){
return(
    <div className="task-list">
          <div className="header">
              my list
          </div>
          <Filters/>
          <div>
              lists
          </div>
    </div>
)
}

export default TaskList