import './App.css';
import {useEffect, useState} from "react"
import SocketIO from "socket.io-client";
const socket =  SocketIO.io("http://localhost:5000")

function App() {

  useEffect(() => {
    socket.on("state", (state) => console.log(state))
  }, [])


  return (
    <>
      
    </>
  );
}

export default App;
