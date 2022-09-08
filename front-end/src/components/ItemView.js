import React from 'react'

const ItemView = ({player}) => {
    return (
        <div className="container grid grid-cols-1 sm:grid-cols-2 mt-8">
            <img className="mx-auto rounded-lg w-11/12" src={player.image} alt="" />
            <div className="w-11/12 mt-2 mx-auto rounded-lg drop-shadow-md bg-white shadow-lg">
                <h2 className="text-2xl px-4 pt-4">{player.title}</h2>
                <div className="divide-y divide-bookmark-red w-full">
                    <p  className="text-sm p-4">{player.description}</p>
                    <div className="hidden sm:flex py-4">
                    <p  className="text-sm p-4">Place some sort of info here: looking for, ratings, etc</p>
                    </div>
                    <div className="flex py-4">
                        <button type="button" className="mx-auto border-2 font-semibold border-bookmark-red text-bookmark-red rounded-full uppercase px-7 py-1">Trade</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemView
