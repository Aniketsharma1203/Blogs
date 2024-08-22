import React from 'react'
import { Link, Navigate } from "react-router-dom";


export const NavBar = () => {
    return (
        <div>
            <div className='flex bg-gray-400 justify-around p-3 sticky font-montserrat font-bold'>
            <Link to={"/"}>Home</Link>
                <Link to={"/blogs"}>Blogs</Link>
            </div>
        </div>
    )
}
