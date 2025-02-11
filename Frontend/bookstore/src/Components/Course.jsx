import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from "axios";
function Course() {
  const [book,setBook] = useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try {
      const res= await axios.get("http://localhost:4001/book");
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-2 md:px-20'>
        <div className='mt-16 items-center justify-center text-center'>
            <h1 className='md:ml-0 ml-44 py-6 md:border-none  md:h-auto md:w-auto h-36 w-40 text-2xl md:text-4xl md:py-8 md:mt-25'>We're delighted to have you
             <span className='text-pink-500 font-semibold'> Here :)</span>
             </h1>
             <p className='mt-12'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla delectus optio odit officia quis harum voluptatibus excepturi, iure officiis sit magnam libero eveniet, ducimus rerum exercitationem consequuntur. Maiores, eveniet aut!
                Perspiciatis et iusto molestias tempora autem laboriosam dolore laudantium deserunt repellendus. Praesentium id illum pariatur minima magni deleniti saepe? Laudantium ipsa quidem est maiores unde nemo deleniti blanditiis nobis nam.
             </p>
            <Link to="/">
            <button type='submit' className='mt-6 bg-pink-500 rounded-md text-white px-4 py-2 hover:bg-pink-600 duration-200'>Back</button>
            </Link>
        </div>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-4 '>
            {book.map((item)=>(
                    <Cards item = {item} key={item.id}/>
                ))}
        </div>
    </div>
    </>
  )
}

export default Course