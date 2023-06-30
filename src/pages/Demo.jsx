import axios from "axios";
import React, { useState, } from "react";
import ShowData from "../components/ShowData";

require('dotenv').config();

export default function Demo (){




    


const [venues,setVenues]=useState();

const [city,setCity]=useState();

const [err1,setErr]=useState();

const [open,setOpen]=useState();

const [sort,setSort]=useState();
const [myLocation,setMyLocation]=useState();



console.log(sort);



    async function placeSearch() {

      if(!(city &&venues &&open && sort) ) {
        setErr('make choice')
        console.log('sdf');
      }
      else {

       if(!myLocation)  {

        try {
            const searchParams = new URLSearchParams({
              query: venues,
              near: city,
              open_now: open,
              sort: sort
              
            });
            const results = await fetch(
              `https://api.foursquare.com/v3/places/search?${searchParams}`,
              {
                method: 'GET',
                headers: {
                  Accept: 'application/json',
                  Authorization: process.env.REACT_APP_FOURSQUARE_API
                }
              }
            );
            const data = await results.json();
           const  list=data.results
            console.log(list);
            return list;
        } catch (err) {
            console.error(err);
        }
    }
   
        else {
   
   
        try {
            const searchParams = new URLSearchParams({
              query: {venues},
              ll: '41.8781,-87.6298',
              open_now: {open},
              sort: {sort}
            });
            const results = await fetch(
              `https://api.foursquare.com/v3/places/search?${searchParams}`,
              {
                method: 'GET',
                headers: {
                  Accept: 'application/json',
                  Authorization: process.env.FOURSQUARE_API,
                }
              }
            );
            const data = await results.json();
            data=data.result
            return data;
        } catch (err) {
            console.error(err);
        }
   
    }
   }
    }











    return(

<div>
<div className="mb-3">
<label for="exampleInputPassword1" className="form-label">City</label>
    <input type="text" className="form-control" id="description" placeholder="City" value={city}   onChange={(e)=> setCity(e.target.value)} />
    
   
  </div>
  <div className="mb-3">

  <label for="exampleInputEmail1" className="form-label">venues</label>
    <input type="text" className="form-control" id="task"  placeholder="venues" value={venues}   onChange={(e)=>  setVenues(e.target.value)} />
    
  </div>
  


<div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded"> 
<label for="nearby" className="form-label">in my location</label>
<input type="checkbox"  className="form-check-input" value='true'  name="nearby" onChange={(e)=>  setMyLocation(e.target.value)} />  
<div>
<label for="nearby" className="form-label">Sort by</label>
<select name="" className="form-select" aria-label="Default select example"  onChange={(e)=>  setSort(e.target.value)}>
<option selected value=''  name="nearby" >  Select Sort</option>
<option   value='RELEVANCE'   name="nearby" >   RELEVANCE</option>
<option  value='RATING'  name="nearby" >  RATING</option>
<option  value='DISTANCE'  name="nearby" >  DISTANCE</option>
<option  value='POPULARITY'  name="nearby" >  POPULARITY</option>
</select>
</div>
<label for="nearby" className="form-label">Status</label>
<select name="" className="form-select" aria-label="Default select example" onChange={(e)=>  setOpen(e.target.value)}>
<option selected  value='' name="nearby" > Select Status</option>
<option  value={true}   name="nearby" > Open </option>
<option   value={false}  name="nearby" > All</option>
</select>

<i>{err1 ? err1 : null}</i> <br />

  <button onClick={()=>placeSearch()} className="btn btn-primary">Search </button>
  </div>
  



  </div>
    )


    


}