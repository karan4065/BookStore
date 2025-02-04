import React from 'react'

function Cards({item}){
    console.log(item);
  return (
<>
<div className='mt-4 my-2 p-3'>
<div className="dark:border card bg-base-100 w-92 mt-4 shadow-xl">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary h-auto w-auto bg-pink-500 text-white">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="px-2 py-1 cursor-pointer rounded-full border-[2px]">{item.price}</div>
      <div className="px-2 py-1 cursor-pointer rounded-full border-[2px] hover:bg-pink-400 hover:text-white duration-200 p-2">Buy Now</div>
    </div>
  </div>
</div>
</div>
</>
  )
}

export default Cards