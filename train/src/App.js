import {useState} from 'react';

import './App.css';



function App () {
  const storageJobs = JSON.parse(localStorage.getItem('job'))
  const [job, setJob] = useState()
  const [jobs, setJobs] = useState(storageJobs || [])
  
  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job]
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('job', jsonJobs)
      return newJobs
    })
    setJob('')


  }
   return (
    <div>
      <input value = {job} onChange = {e => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>

      <ul style={{listStyle: 'none'}}>
       {jobs.map((job, index) => (
        <li key= {index}>{job}</li>
       ))}
      </ul>
    </div>
   )
}

export default App;
