//  import React, {useState, useEffect} from "react";
//  import axios from "axios";

// function DataFetching(){
//     const [counties, setCounties] = useState([]);
    
//     useEffect(() => {
//         //url is in the package.json.I did so in order to solve the cors error that had hindered the datat fetching
//         axios.get("/counties")
//             .then(res=>{
//                 console.log(res)
//                 setCounties(res.data)
//             })
//             .catch(err=>{
//                 console.log(err)
//             },[])
//     },[]);
    
//     return (
//         <div>
//                 {counties.map(county=> <li key={county.id}>County:{county.name},Country:{county.country}</li>)}
//         </div>
//     )

// //fetch("/counties")
//     //.then(counties=>console.log(counties))
// }
//  export default DataFetching;