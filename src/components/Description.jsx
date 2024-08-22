import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const Description = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const item = location.state.item;
    const goBack = () => {
        navigate("/blogs");
    }
  return (
    <div className='flex justify-center flex-col items-center text-center p-6 gap-3'>
        <h1 className='font-bold text-[24px]'>{item.title}</h1>
         <div dangerouslySetInnerHTML={{ __html: item.content }} className='m-3 p-2 font-semibold flex justify-center flex-col items-center p-2 w-[99%] gap-3' />
         <button onClick={() => goBack()} className='w-[100px] bg-lime-400 p-3 border rounded m-6'>Go Back</button>
    </div>
  )
}
