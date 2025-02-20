import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
    const location = useLocation()

    return (
        <nav className="flex gap-6 bg-white p-4">
            <Link to="/" className={
                `${location.pathname==="/"? "text-red-500": "text-black"}`
            }>Home</Link>
            <Link to="/about" className={
                `${location.pathname==="/about"? "text-red-500": "text-black"}`
                }>About</Link>
            <Link to="/contact" className={
                `${location.pathname==="/contact"? "text-red-500": "text-black"}`
                }>Contact</Link>
            <Link to="/products" className={
                `${location.pathname==="/products"? "text-red-500": "text-black"}`
                }>Products</Link>
            <Link to="/user_add" className={
                `${location.pathname==="/user_add"? "text-red-500": "text-black"}`
                }>Add User</Link>
        </nav>
    )
}