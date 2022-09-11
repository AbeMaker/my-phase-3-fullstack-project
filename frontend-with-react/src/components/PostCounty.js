import { useState } from "react";

function PostCounty() {
    const [name, setName] = useState ("") 
    const [country, setCountry ] = useState ("") 
    const [population, setPopulation] = useState ("") 
    const [county_number, setCounty_number ]= useState ("") 

    function handleSubmit(e){
      e.preventDefault();
      const county = { name, country, population, county_number };
    
      fetch(`/counties/add/${name}/${country}/${population}/${county_number}`,{
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(county)
      })
      .then(() => {
         console.log(county);  
      })
    }

    return (
        <div className = "post-county-container">
            <h1>COUNTIES IN KENYA</h1>
            <form onSubmit={handleSubmit}>
                <label>Name of the new county:</label>
                <input
                 type="text" 
                 placeholder="County"
                 required
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 />
                 
                 
                 <label>Country:</label>
                 <input
                 type="text" 
                 placeholder="Country"
                 required
                 value={country}
                 onChange={(e) => setCountry(e.target.value)}
                 />

                 <label>Population:</label>
                <input
                 type="number" 
                 placeholder="Population"
                 required
                 value={population}
                 onChange={(e) => setPopulation(e.target.value)}
                 />

                 <label>County Number:</label>
                 <input
                 type="number"
                 placeholder="County Number"
                 required
                 value={county_number}
                 onChange={(e) => setCounty_number(e.target.value)}
                 />
                 
                 <button>Add County</button>
            </form>
        </div>
     );
}
export default PostCounty;
//
