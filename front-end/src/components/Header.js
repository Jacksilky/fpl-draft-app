import React from 'react'

const Header = () => {
    return (
        <header className="border-solid border-t-2 border-bookmark-red">
            <nav className="container flex items-center py-4 mt-1 sm:mt-1">
                <div className="py-1">
                    <h1 className="text-2xl font-extrabold text-bookmark-red">Card Trader.</h1>
                </div>
                <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
                    <li className="cursor-pointer">Features</li>
                    <li className="cursor-pointer">Pricing</li>
                    <li className="cursor-pointer">Contact</li>
                    <button type="button" className="bg-bookmark-red text-white rounded-md uppercase px-7 py-3">Login</button>
                </ul>
                <div className="flex sm:hidden flex-1 justify-end">
                    <i className="text-2xl fas fa-bars"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
