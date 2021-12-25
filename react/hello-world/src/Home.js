import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
    const {data:blogs, isPending, Error}=useFetch('http://localhost:8000/blogs');
     
    
    return ( 
            <div className="home">
                {Error && <div className="error-message">{Error}</div>}
                {isPending&& <div className="error-message">Loading...</div>}
               {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}            
            </div>
     );
}
 
export default Home;