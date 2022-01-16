import React from 'react'

const Zeras= ({zerass, deleteZeras})=>{
        /* const zerasList=zerass.map(zeras=>{
            if(zeras.age>20){

            return(
            <div className='ras' key={zeras.id}>
                <div>Name: {zeras.name}</div>
                <div>Age: {zeras.age}</div>
                <div>Belt: {zeras.belt}</div>                
            </div>
            )
            }else{
                return null
            }
        }) */
         
        const zerasList=zerass.map(zeras=>{
            return zeras.age>20 ? (
                <div className='ras' key={zeras.id}>
                <div>Name: {zeras.name}</div>
                <div>Age: {zeras.age}</div>
                <div>Belt: {zeras.belt}</div>   
                <button onClick={()=>{deleteZeras(zeras.id)}}>Delete Zeras</button>            
            </div>    
            ) : null;
        })



       // console.log(this.props)
        return (
            <div className='zeras-list'>
                { zerasList }
            </div>
            
        )
    }
export default Zeras;
