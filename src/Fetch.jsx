
import { useEffect, useState } from "react"


function Fetch() {

   const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://testing-backend-91bc.onrender.com/sql") // from public folder
      .then(response => response.json())
      .then(json => setData(json.a));
  }, []);

  return (
    <div>
      <h1>Names List</h1>
      <ul>
        {data.map(item => (
          <>
          <li >{item.name}</li>
          
          </>
        ))}
      </ul>
    </div>

    
    )
}

export default Fetch