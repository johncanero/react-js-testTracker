import { useState, useEffect } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
      const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()

        console.log(data)
      }

      fetchTasks()
  }, []) 



  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    // console.log(id)

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
      // console.log('delete', id)
      setTasks(tasks.filter((task) => task.id !==id))
  }


  // Toggle Reminder
  const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }


  return (
    <div className="container">
        <Header 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask} />

        {showAddTask &&<AddTask onAdd={addTask}/>}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'}
    </div>

  );
}


export default App;











// Notes: 
// You could use <> </> instead of div

    // const name = 'John'
    // const x = true

    // <div className="container">
    //     <h1>Hello From React</h1>
    //     <h2>Hello {name}!</h2>
    //     <h2>Hello {2 + 2}!</h2>
    //     {/* ? = then and : = else*/}
    //     <h2>Hello {x ? 'Yes' : 'No'}!</h2>    
    // </div>