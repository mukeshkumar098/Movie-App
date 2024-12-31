import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";


const Header = ({ data }) => {
  const datas = data;
  const [Bar, setBar] = useState(false)

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

    const data = datas.filter((item) =>
      item.movie.toLowerCase().includes(inputData)
    );
    setSearchResults(data);
    console.log(searchQuery);
    inputData='';

  };

  console.log("hasjhabdasmdk", searchResults);

  return (
    <>
      <div className='text-3xl flex pt-6 font-bold text-orange-500 justify-center'>
        <h1>MK movies</h1>
      </div>
     
      <div className='flex items-center pt-10 justify-center'>
        <input className='px-3 py-2 w-80 opacity-60 border-none bg-gray-200 text-black placeholder:text-black  text-[13px]' onChange={debounce(2000, handelChange)} type="text" placeholder='what are you looking for?' />
        <button onClick={() => handelChange({ target: { value: searchQuery } })} className='text-white text-[20px] px-2 py-2 bg-orange-400'><IoSearch />
        </button>
      </div>
      <div className='flex justify-center items-center pt-3 pb-5'>
      <div  onClick={()=>setBar(!Bar)} className='bg-sky-600  w-80 flex justify-between items-center px-2 py-1'>
     <FaBars size={20} color='white'/>
        <h1 className='  text-white rounded-sm font-bold'>MENU</h1>

      </div>
      </div>
      {Bar&&<div className='absolute '>
      <div className='bg-black text-white z-90 px-6 h-44'>
        <ul>
          <li>latest</li>
        </ul>
      </div>
      </div>}

      <div className='flex justify-center gap-2 flex-wrap'>
        {
          searchResults.map((ele, i) => {
            return (
              <>
                <div key={i} className=' border  my-2 shadow-xl shadow-gray'>

                  <div className='w-48 '>
                    {/* <img src={item.image} alt="moves" /> */}
                    <img className='object-contain' src="photo.jpg" alt="" />
                  </div>
                  <div className='relative'>
                    <p className='w-32  absolute -top-3 text-white text-sm px-1 py-1 bg-sky-600'>best movie 2024</p>
                    <p className='pt-3 absolute -top-10 text-sm text-white right-2'>{ele?.rating}</p>
                    <a href={ele?.imdb_url}></a>
                  </div>
                  <div className='pt-5 w-48 px-2 opacity-90'>
                    <p className='text-sm  '>{ele?.movie}</p>
                    <h1>{ele.id}</h1>
                  </div>
                  <div className='flex justify-end px-2 pb-2'>
                    <p className='text-xs  opacity-80'>26 nov 2024</p>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default Header