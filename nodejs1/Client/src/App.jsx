import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const BASE_URL = "http://localhost:3000";

  const [info, setInfo] = useState([]);  // Make sure 'info' is used consistently

  // Fetch data
  const getAllData = async () => {
    try {
      const response = await axios(`${BASE_URL}/data`);
      setInfo(response.data);  // Set the fetched data to the state 'info'
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete button handler
  const deletebtn = async (pId) => {
    try {
      const res = await axios.delete(`${BASE_URL}/data/${pId}`);
      if (res.status === 200) {
        // Update state after successful deletion, using setInfo
        setInfo(info.filter((p) => p.id !== pId));  // Correctly filter out the deleted product
      } else {
        throw new Error("Failed to delete");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <ul>
        {info.length > 0 && info.map((p) => {
          return (
            <li key={p.id}>
              <span>{p.name }</span> 
              <button onClick={() => {
                if (window.confirm("Are you sure you want to delete?")) {
                  deletebtn(p.id);
                }
              }}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
