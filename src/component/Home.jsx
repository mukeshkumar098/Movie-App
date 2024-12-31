import React, { useEffect, useState } from 'react'
import Pagination from './Pagination';
import ReactPaginate from 'react-paginate';
import Header from './Header';

const Home = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            let res = await fetch("https://dummyapi.online/api/movies")
            res = await res.json()
            setData(res);

        } catch (error) {
            console.log(error);

        }
    }
    console.log(data);

    useEffect(() => {
        getData();
    }, [])

    // const fetchMovieData = async (currentPage) => {
    //     let response = await fetch(`http://localhost:3000/movie?_page= ${currentPage}&_limit=10`)
    //     response = await response.json();
    //     return response;
    // }

    // const handelPageClick = async (item) => {
    //     let currentPage = item.selected + 1;
    //     const movieData = await fetchMovieData(currentPage);
    //     setData(movieData)
    //     console.log(item.selected);

    // }
    console.log("nsdjkamndbaskdabb aahdadakjadjjjk",data);
    
    return (
        <>
           <Header data={data}/>
            <div className='flex justify-center gap-2 flex-wrap'>
                {data.map((item, index) => {
                    return (
                        <>

                            <div key={index} className=' border  shadow-xl shadow-gray'>

                                <div className='w-44 '>
                                    {/* <img src={item.image} alt="moves" /> */}
                                    <img className='object-contain' src="photo.jpg" alt="" />
                                </div>
                                <div className='relative'>
                                    <p className='w-32  absolute -top-3 text-white text-sm px-1 py-1 bg-sky-600'>best movie 2024</p>
                                    <p className='pt-3 absolute -top-10 text-sm text-white right-2'>{item?.rating}</p>
                                    <a href={item?.imdb_url}></a>
                                </div>
                                <div className='pt-5 w-48 px-2 opacity-90'>
                                    <p className='text-sm  '>{item?.movie}</p>
                                    <h1>{item.id}</h1>
                                </div>
                                <div className='flex justify-end px-2 pb-2'>
                                    <p className='text-xs  opacity-80'>26 nov 2024</p>
                                </div>
                            </div>
                        </>
                    )
                })}

            </div>
            {/* <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                pageCount={100}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handelPageClick}
                containerClassName='flex   gap-2 pb-10 bg-white justify-center '
                pageClassName=' '
                pageLinkClassName='text-[9px] px-2 py-2  border-2 hover:bg-orange-300 '
                previousClassName='bg-orange-300 px-2 py-2 text-[9px]'
                previousLinkClassName=' '
                nextClassName='bg-orange-300 px-2 py-2 text-[10px]'
            /> */}

        </>
    )
}

export default Home