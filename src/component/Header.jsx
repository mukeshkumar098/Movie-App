import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";

const Header = ({data}) => {
    const [searchResults, setSearchResults] = useState([]); 
    const [searchQuery, setSearchQuery] = useState(''); 
    const debounce = (ms, cb) => {
        let id;
        return (...args) => {
          if (id) clearTimeout(id);
          id = setTimeout(() => cb(...args), ms);
        };
      };
    
      const handelChange = (e) => {
        const inputData = e.target.value.toLowerCase();
        setSearchQuery(inputData);
    
        const data = data.filter((item) =>
          item.title.toLowerCase().includes(inputData)
        );
        setSearchResults(data);
        console.log(searchQuery);
        
      };
    return (
        <>
            <div className='text-3xl flex py-5 font-bold text-orange-500 justify-center'>
                <h1>MK movies</h1>
            </div>
            <div className='flex justify-center pb-4'>
                <h1 className=' bg-slate-200 px-3 py-2 rounded-sm font-bold'>MENU</h1>
            </div>
            <div className='flex items-center justify-center'>
                <input className='px-3 py-2 w-80 opacity-60 border-none bg-gray-200 text-black placeholder:text-black  text-[13px]'  onChange={debounce(2000, handelChange)} type="text" placeholder='what are you looking for?' />
                <button  onClick={() => handelChange({ target: { value: searchQuery } })} className='text-white text-[20px] px-2 py-2 bg-orange-400'><IoSearch />
                </button>
            </div>
        </>
    )
}

export default Header