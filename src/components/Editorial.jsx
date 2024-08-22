import React, { useRef, useState, useContext, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { UserContext } from '../context/UserContext';
import { NavBar } from './NavBar';
import { useLocation } from 'react-router-dom';

export const Editorial = () => {
    const { objectContainer, setObjectContainer } = useContext(UserContext);
    const editor = useRef(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const location = useLocation();

    useEffect(() => {
        if (location.state) {

            setTitle(location.state.item.title);
            setContent(location.state.item.content);
        }
    }, [location.state]);

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const infoSave = (e) => {
        e.preventDefault();

        if (!location.state) {
            const item = {
                title: title,
                content: content
            };

            setObjectContainer([...objectContainer, item]);
            setTitle('');
            setContent('');
        }
        else {
            const index = objectContainer.findIndex(item => item.title === location.state.item.title);
            objectContainer[index].title = title;
            objectContainer[index].content = content;
        }
    };

    return (
        <>
            <div className='bg-yellow-50 flex justify-center m-10 gap-5 p-6 items-center '>
                <label htmlFor="title" className='font-bold'>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={handleChange}
                    className='border-black border rounded-[10px] p-2'
                />
            </div>

            <JoditEditor
                ref={editor}
                value={content}
                tabIndex={1}
                onBlur={(newContent) => setContent(newContent)}
                onChange={(newContent) => setContent(newContent)}
            />
            <div className='flex justify-center'>
                {
                    location.state ? (
                        <button type="submit"
                            className='bg-[#1552f1] mt-5 p-3 items-center text-xl font-bold text-white rounded-sm'
                            onClick={infoSave}
                        >Save</button>
                    ) : (
                        <button
                        type="submit"
                        className='bg-[#1552f1] mt-5 p-3 items-center text-xl font-bold text-white rounded-sm'
                        onClick={infoSave}
                    >
                        Submit Info
                    </button>
                    )
                }
               
            </div>
        </>
    );
};
