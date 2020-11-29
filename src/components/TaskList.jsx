import React, { useState } from 'react'
import Filters from './Filters'
import List from './List'

import LISTS from './lists'

import './TaskList.css'

function TaskList(){
    const [lists, setLists] = useState(LISTS)
  console.log(LISTS)  
return(
    <div className="task-list">
          <div className="header">
              my list
          </div>
          <Filters/>
          <div className="lists-box">
              <div className="add-list">
                  What needs to be done?
              </div>
              <div className="lists">
              {
                  lists.map(list => <List key={list.key} task={list.task} active={list.active}/>)
              }
              </div>
          </div>
    </div>
)
}

export default TaskList