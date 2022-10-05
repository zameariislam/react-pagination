import React from 'react';

const Pagination = ({postsPerpage,totalPosts,handlePaginate}) => {

    const pageNumber=[]

    for(let i=1; i<=Math.ceil(totalPosts/postsPerpage);i++){
        pageNumber.push(i)

    }



    return (
        <nav>
            <ul className="pagination">
                {
                   pageNumber.map(number=>
                    <li className='page-item' key={number}>
                        <a onClick={()=>handlePaginate(number)} href="#" className='page-link'>
                            {number}
                        </a>
                        </li>
                    ) 
                }
            </ul>
            
        </nav>
    );
};

export default Pagination;