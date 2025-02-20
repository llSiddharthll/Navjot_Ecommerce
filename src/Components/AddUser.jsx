import { useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
export default function AddUser(){
    const navigate = useNavigate()

    const [formdata, setformdata]  = useState({
        firstName:"",
        lastName: "",
        age: ""
    })

    function handleChange(e){
        setformdata({
            ...formdata,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        axios.post('https://dummyjson.com/users/add', formdata)
        .then(response=>{
            localStorage.setItem("user", JSON.stringify(response.data))
            navigate("/showuser")
        })
    }   
    return(
        <div className="container mx-auto py-20">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 border-2 border-white p-5 m-5">
                <input onChange={handleChange} placeholder="Enter First Name" className="border-2 border-white text-white p-2 rounded-md" type="text" name="firstName"/>
                <input onChange={handleChange} placeholder="Enter Last Name" className="border-2 border-white text-white p-2 rounded-md" type="text" name="lastName"/>
                <input onChange={handleChange} placeholder="Enter Age" className="border-2 border-white text-white p-2 rounded-md" type="number" name="age" />
                <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-3">Save</button>
            </form> 
        </div>
    )
}