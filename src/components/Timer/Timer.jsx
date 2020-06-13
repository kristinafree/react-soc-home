import React, {useState, useEffect} from 'react'
import styles from './timer.module.css'
import addImg from '../../assets/images/play-button.png'
import removeImg from '../../assets/images/remove.png'

const Timer = () => {
  let init = 0 
  const [second, setSecond] = useState(init)


  const startTime = () => {
   let timer =  setInterval(()=> setSecond(second + 1), 1000)
  }

  
  // useEffect(
  //   () => {
  //     return () => {
  //       clearTimeout(timer)
  //     }
  //   },
  //   [second]
  // )

  const stopTime = (timer) => {
    return clearTimeout(timer)
  }

  // tick() {
  //   this.setState(state => ({
  //     seconds: state.seconds + 1
  //   }));
  // }

  return(
    <>
    <div>Time: {second}</div>
    <button onClick={startTime()}>Start</button>
    <button onClick={stopTime}>Stop</button>
    </>
  )

  
}

export default Timer;