import { useState, useEffect } from "react"

export default function ShowUser() {
    const [user, setuser] = useState()
    const [loading, setloading] = useState(true)
    useEffect(() => {
        const userdata = JSON.parse(localStorage.getItem("user"))
        setuser(userdata)
        setloading(false)
    }, [])

    if(loading){
        return <div>Loading...</div>
    }

    return (
        <div className="p-20 text-2xl font-semibold">
            <h2 >Full Name: {user.firstName} {user.lastName}</h2>
            <span>Age : {user.age}</span>
        </div>
    )
}
