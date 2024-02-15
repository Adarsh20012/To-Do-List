"use client"
import React, { useState } from 'react'

const page = () => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [maintask, setMaintask] = useState([])

    const submitHandler = (e)=> {
        e.preventDefault()
        setMaintask([...maintask, {title, desc}])
        console.log(maintask) 
        settitle("")
        setdesc("")
    }

    const deleteHandler = (i) => {
        let copytask = [...maintask]
        copytask.splice(i, 1)
        setMaintask(copytask)
    }

    let renderTask = <h2>No Task Available</h2>;
    if(maintask.length > 0){
        renderTask =  maintask.map((t,i) => {
            return(
                <li key={i} className='flex items-center justify-between mb-8'>
                    <div className='flex justify-between mb-5 w-2/3'>
                        <h5 className='text-2xl font-semibold'>{t.title}</h5>
                        <h5 className='text-xl font-semibold'>{t.desc}</h5>
                    </div>
                    <button
                    onClick={
                        () =>{
                            deleteHandler(i)
                        }
                    }
                    className='bg-red-600 rounded-b-lg p-3 border-2 text-white font-bold hover:bg-red-300'>Delete</button>
                </li>
            );
        })
    }

    return (
        <>
            <h1 className='bg-purple-800 text-white p-5 text-5xl font-bold text-center font-sans hover:font-serif'>ADARSH's TO-DO's</h1>
            <form onSubmit={submitHandler}>
                <input type='text' className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2' placeholder='Enter TO-DO' value={title} onChange={(e)=>{
                    settitle(e.target.value)
                }}/>
                <input type='text' className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2' placeholder='Enter Description' value={desc} onChange={(e)=>{
                    setdesc(e.target.value)
                }}/>
                <button className='bg-purple-800 text-white p-3 rounded mt-6 hover:bg-gray-500 m-5'>Add Task</button>

            </form>
            <div className='p-5 bg-purple-200 text-black'>
                <ol>
                    {renderTask}
                </ol>
                
            </div>
        </>
    )
}

export default page
