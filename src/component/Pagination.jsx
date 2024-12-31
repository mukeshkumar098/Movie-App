import React from 'react'

const Pagination = ({totalPost,postPerpage}) => {
    let pages=[];
for(let i=1; i<= Math.ceil(totalPost/postPerpage);i++){
        pages.push(i);
    }
  return (
    <>
       <div className='flex justify-center gap-2 flex-wrap py-7'>
                {pages.map((page, i) => {
                    return (
                       <button className='text-black bg-slate-950' key={i}>{page}</button>
                    )
                })}

            </div>
    </>
  )
}

export default Pagination