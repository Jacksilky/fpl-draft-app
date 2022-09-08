import React from 'react'

const SearchBar = () => {
    return (
            <div class="container border-r border-b-2 border-t rounded-md overflow-hidden shadow-sm flex w-full mb-2">
                <button class="justify-left px-4 sm:px-8 bg-bookmark-red rounded ">
                    <i className="fa fa-search text-white"></i>
                </button>
                <input type="text" class="w-full px-4 py-2 focus:outline-none text-gray-800" placeholder="Search..."/>
    
                <select name="" id="" className="text-sm border-l px-2 focus:outline-none bg-transparent text-gray-800">
                    <option value="Recently Added" selected>Recently Added</option>
                    <option value="Rating: High to Low">Rating: High to Low</option>
                </select> 
            </div>

    )
}

export default SearchBar
