import React, { useState } from 'react'


import Filters from './Filters'
import List from './List'

import LISTS from './lists'

import './TaskList.css'


function TaskList() {
    const [lists, setLists] = useState(LISTS)
    const [filteredLists, setFilteredLists] = useState(null)
    const [task, setTask] = useState('')
    const handleDeleteItem = (id) => {
        const newLists = lists.filter(list => list.id !== id)
        setLists(newLists)
    }
    const handleChange = (event) => {
         setTask(event.target.value)
    }
    const handleTaskSubmit = (event) => {
        event.preventDefault()
        const newTask = {
            id : lists.length + 1,
            active: true,
            task
        }
        if(task) {
            setLists([...lists, newTask])
        }
    }
    const onFilterApply = (buttonKey) => {
         if(buttonKey === 'all'){
            setFilteredLists(null)   
         } else if(buttonKey === 'active') {
            setFilteredLists(lists.filter(list => list.active))
         } else if(buttonKey === 'completed') {
            setFilteredLists(lists.filter(list => !list.active))
        } else if(buttonKey === 'clearCompleted') {
            setLists(lists.filter(list => list.active)) 
        }
    }
    const renderLists = filteredLists || lists
    return (
        <div className="task-list">
            <div className="header">
                my list
          </div>
            <Filters onFilterApply={onFilterApply}/>
            <div className="lists-box">
                <div className="add-list">
                    <form onSubmit={handleTaskSubmit}>
                            <input placeholder="What needs to be done?"
                             value={task}
                             onChange={handleChange} 
                            />
                        <input type="submit" value="Add task" />
                    </form>
                </div>
                <div className="lists">
                    {
                        renderLists.map(list =>
                            <List
                                key={list.id}
                                id={list.id}
                                task={list.task}
                                active={list.active}
                                handleDeleteItem={handleDeleteItem}
                            />)
                    }
                </div>
            </div>
        </div>
    )
}

export default TaskList