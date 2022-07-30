import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false
    },
  ]);

  return (
    <div className="container">
        <Header />
        <Tasks tasks={tasks} />
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