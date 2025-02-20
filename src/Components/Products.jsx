import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products(){
    const [products, setproducts] = useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(response=>{
            console.log(response.data)
            setproducts(response.data.products)
        })
    }, [])
    return(
        <div className="flex flex-col gap-10 py-20">
            <h2 className="text-center text-2xl font-semibold">MY PRODUCTS</h2>
            <div className="grid grid-cols-3 gap-10 container mx-auto">
                {
                    products.map(product=>(
                        <Link to={`/product_detail/${product.id}`} key={product.id} className="flex flex-col gap-2 border-2 border-white p-2 rounded-lg">
                            <div><img className="rounded-md" src={product.thumbnail} alt="" /></div>
                            <div>
                                <h2 className="text-lg font-semibold">{product.title}</h2>
                                <span className="text-lg font-bold">${product.price} <span className="text-sm font-normal text-gray-500">{product.rating}⭐</span></span>
                            </div>
                            <button className="bg-yellow-500 text-white rounded-md w-full">Add To Cart</button>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}