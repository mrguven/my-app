import axios from "axios";
import { useState, } from "react";


export default function Demo (){




    


const [venues,setVenues]=useState('');

const [city,setCity]=useState('');

const [err,setErr]=useState()


const search =()=> {



    async function placeSearch() {
        try {
            const searchParams = new URLSearchParams({
              query: 'coffee',
              near: 'Seattle, WA',
              open_now: 'true',
              sort: 'DISTANCE'
            });
            const results = await fetch(
              `https://api.foursquare.com/v3/places/search?${searchParams}`,
              {
                method: 'GET',
                headers: {
                  Accept: 'application/json',
                  Authorization: FOURSQUARE_API,
                }
              }
            );
            const data = await results.json();
            return data;
        } catch (err) {
            console.error(err);
        }
    }





}



    return(

<div>
<div class="mb-3">
<label for="exampleInputPassword1" class="form-label">City</label>
    <input type="text" className="form-control" id="description" placeholder="City" value={city}   onChange={(e)=> setCity(e.target.value)} />
    {err}
   
  </div>
  <div class="mb-3">

  <label for="exampleInputEmail1" class="form-label">venues</label>
    <input type="text" className="form-control" id="task"  placeholder="venues" value={venues}   onChange={(e)=>  setVenues(e.target.value)} />
   
  </div>
  {err}


{/* <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded"> 
<label for="exampleInputEmail1" class="form-label">Near by me</label>

<input type="radio" value="treu" name="nearby" />  
  </div> */}

  <button onClick={()=>search()} class="btn btn-primary">Search </button>

  </div>
    )
}