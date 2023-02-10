import React,{useEffect, useState} from 'react'
import DisplayComponent from './DisplayComponent'
const url="http://3.17.216.66:4000/restaurant"

function HooksComponent(){
    const [title] = useState("Hooks Component")
    const [counter,setCounter] = useState(0)
    const [counter1,setCounter1] = useState(0)
    const [restaurant,setRestaurant] = useState(0)


    const handleChange = () => {
        return setCounter(counter+1)
    }
    useEffect(()=>{
        fetch(url,{method:"GET"})
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data);
            setRestaurant(data);
        })
    },[counter])
    return(
        <>
        <h2>{title}</h2>
        <h2>{counter}</h2>
        <button type="button" onClick={handleChange}>Click Here!....</button>
        <h2>{counter1}</h2>
        <button type="button" onClick={()=> setCounter1(counter1+1)}>Click Here!....</button>
        <DisplayComponent myData={restaurant}/>
        </>
    )
}
export default HooksComponent