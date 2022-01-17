import { useParams } from 'react-router-dom';
import React from 'react'
import axios from 'axios';

export default function Post() {
    let { id }=useParams();

return (
        <div className='container'>
        <h4> {id} </h4>        
    </div>
    )
}

