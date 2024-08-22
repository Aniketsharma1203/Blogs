import React, { useContext, useState } from 'react';
import { NavBar } from './NavBar';
import { UserContext } from '../context/UserContext';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Navigate, useNavigate } from 'react-router-dom';
import { LuClock4 } from "react-icons/lu";

const PageSize = 5;

export const Blogs = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const date = new Date();
    const formattedDate = date.toDateString();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = dayNames[date.getDay()];

    const navigate = useNavigate();

    const { objectContainer, setObjectContainer } = useContext(UserContext);

    const handleRemove = (item) => {
        const filteredItem = objectContainer.filter(currentItem => currentItem.title !== item.title)
        setObjectContainer(filteredItem);
    }

    const handleEdit = (item) => {
        navigate("/", { state: { item } });
    }

    const desc = (item) => {
        navigate("/desc", { state: { item } });
    }

    const extractImages = (htmlContent) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        const imgTags = doc.querySelectorAll('img');
        return Array.from(imgTags).map(img => img.src);
    }

    const currentData = objectContainer.slice(
        (currentPage - 1) * PageSize,
        currentPage * PageSize
    );

    return (
        <div>
            <div>
                <Carousel >
                {currentData.map((item, key) => (
                    <div key={key} className='m-auto mt-9 p-2 border border-b-slate-300 bg-slate-100 w-[70%] rounded-[10px]'>
                        <div className='flex items-center gap-2 text-[12px] font-bold font-mono'>
                            <LuClock4 color='red' />
                            <div>{formattedDate}{" "}</div>
                        </div>
                        <h1 className='font-bold text-[22px] w-[340px] m-auto hover:cursor-pointer' onClick={() => desc(item)}>{item.title}</h1>

                        <div className='m-3 p-2'>
                            {extractImages(item.content).map((src, index) => (
                                <img key={index} src={src} alt={`Image ${index}`} className='w-full mb-3 rounded' />
                            ))}
                        </div>

                        <div className='m-7 flex justify-between'>
                            <button className='w-[80px] bg-red-400 p-3 border rounded' onClick={() => handleRemove(item)}>Delete</button>
                            <button className='w-[80px] bg-lime-400 p-3 border rounded' onClick={() => handleEdit(item)}>Edit</button>
                        </div>
                    </div>
                ))}
                </Carousel>
            </div>
        </div>
    );
};
