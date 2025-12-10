import './App.css'
import { Navbar } from './components/Navbar'
import { Filter } from './components/Filter'
import { Cards } from './components/Cards'
import { filterData, apiUrl } from './data'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Loader } from './components/Loader'

function App() {
  
  const [courses,setCourses] = useState(null);
  const [loading,setLoading] = useState(true);

  async function fetchData(){
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    } catch (error) {
       toast.error("failed to fetch data");
    }
    setLoading(false);
  }

  useEffect(()=>{
     fetchData();
  },[])
  
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter filterData={filterData}/>
      </div>
      <div>
        {
          loading ? (<Loader/>) : (<Cards courses={courses}/>)
        }
      </div>
    </div>
  )
}

export default App
