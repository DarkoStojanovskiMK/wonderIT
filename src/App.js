import React, {useState} from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {ScheduleContext} from './context/ScheduleContext'
import HomeScreen from "./screens/HomeScreen";
import ScheduleScreen from "./screens/ScheduleScreen";


function App() {

  const [activity, setActivity] = useState('')
  const [duration, setDuration] = useState(null)
  const [date, setDate] = useState(null)
  const [fullActivity, setFullActivity] = useState([])
  const [id, setId] = useState(null)
  const [isScheduled, setIsScheduled] = useState(false)

  return (
    <ScheduleContext.Provider value={{activity, setActivity, duration, setDuration, date, setDate, fullActivity, setFullActivity, id, setId,isScheduled, setIsScheduled}}>
        <Router>
          <Routes>
            <Route path='/' element={<HomeScreen/>}/>
            <Route path='/schedule' element={<ScheduleScreen/>}/>
          </Routes>
      </Router>
    </ScheduleContext.Provider>
    
  );
}

export default App;
