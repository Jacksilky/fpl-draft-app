import React from 'react'

// const items = [item, item, item, item, item, item];

const ItemCard = ({player}) => {
    return (
        <div className=" bg-white mx-auto shadow-lg rounded-lg cursor-pointer">
            <img className="rounded-t-lg h-80 w-full sm:w-96 object-cover" src={player.image} alt="" />
            <div className="py-4 px-8">
                <h2 className="hover:cursor-pointer mt-2 text-gray-900 font-semibold text-base tracking-tight">{player.title}</h2>
                <p className=" line-clamp-4 hover:cursor-pointer pt-3 text-gray-400 leading-6 text-base">{player.description}</p>
            </div>
        </div>
    )
}


export default ItemCard
