import React from 'react'

const Card = ({ item }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img 
                    className='w-96'
                    src={item.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                   {item.name}
                    <div className="badge badge-secondary">{item.category}</div>
                </h2>
                <p> {item.title}</p>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">${item.price}</div>
                    <div className="badge badge-outline hover:bg-pink-500 cursor-pointer px-4 py-3 rounded-full  hover:text-white duration-200">Buy Now</div>
                </div>
            </div>
        </div>
    )
}

export default Card