import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import Loader from "./Loader"

export default function ProductDetail() {
    const navigate = useNavigate()
    const [product, setproduct] = useState()
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(response => {
                console.log(response)
                setproduct(response.data)
                setInterval(() => {
                    setLoading(false)
                }, 2000);
            })
    }, [id])

    if (loading) {
        return (
            <div className="h-[80vh] w-screen flex justify-center items-center">
                <Loader />
            </div>
        )
    }

    return (
        <div>
            <div className="flex gap-10 container mx-auto">
                <div className="w-1/2"><img onClick={()=>{navigate("/products")}} src={product.thumbnail} alt="" /></div>
                <div className="w-1/2 flex flex-col gap-5">
                    <h2 className="text-2xl font-semibold">{product.title}</h2>
                    <span>${product.price}</span><span>{product.rating}⭐</span>
                    <div>{product.description}</div>
                </div>
            </div>
        </div>
    )
}