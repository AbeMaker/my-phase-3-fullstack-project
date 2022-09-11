import React, {useState, useEffect} from 'react';
import Axios from 'axios';

export default function Update(props) {
    const url = "/counties/add/:name/:country/:population/:county_number"
    //const [CategoryList, setCategory]=useState([])
   const [data, setData]=useState({
    name: "",
    country: "",
    population: "",
    county_number: "",
   })

   useEffect(() =>{
    Axios.get(url)
    .then((res=> {
        console.log(res.data);
        setData(res.data)
   }).catch(err => console.error(err))
   )},[]
 )

    function submit(e){
        e.preventDefault();
        const id = props.id.match.params.id
        Axios.put(url+id, data)
        .then((res=> {
           console.log(res.data);
          props.history.push("/counties")
        }).catch(err => console.error(err))
    )}

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value 
        setData(newdata)
    }

    return (
        <div className="update-container">
            <form onSubmit={(e)=>submit(e)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input onChange={(e)=>handle(e)} value={data.name} type="text" name="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor='country'>Country</label>
                    <input onChange={(e)=>handle(e)} value={data.country} type="text" name="country"/>
                </div>
                <div className="form-group">
                    <label htmlFor="population">Population</label>
                    <input onChange={(e)=>handle(e)} value={data.population} type="text" name="population"/>
                </div>
                <div className="form-group">
                    <label htmlFor="country_number">County Number</label>
                    <input onChange={(e)=>handle(e)} value={data.county_number} type="text" name="county_number"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
    

}
