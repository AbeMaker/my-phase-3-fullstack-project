import React from 'react';


function DeleteCounty({id,name,country, population, county_number,onDelete}){
    const handleDelete = ()=> {
        onDelete(id);
    }
    function Update(id){
        console.log(id);
    }
    return (
        <div className='list-of-counties'>
            <span>County:{name},</span>
            <span>Country:{country},</span>
            <span>Population:{population},</span>
            <span>County Number:{county_number},</span>

            <span>
                <div>
                <button onClick={()=>Update(id)}>edit</button>
                <button className='delete-county' onClick={handleDelete}>delete</button>
                </div>
            </span>
        </div>
    )
}

export default DeleteCounty