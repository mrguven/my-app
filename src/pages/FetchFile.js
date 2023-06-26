import axios from "axios"
import { useEffect, useState } from "react"


export default function FetchFile () {

    const [textList,setTextList]=useState([]);
    const [num,setNum]=useState(0);
    const [text,setText]=useState({})

const getNewText=()=> {

    
    setNum(()=> num+1)
   
console.log(num);
}

useEffect( ()=> {axios.get('https://type.fit/api/quotes').then(response=> { return setTextList(response.data)})},[])

console.log('sdfgdsf');

console.log(textList);
useEffect(()=> { 
  setText(textList[num]); console.log(textList[num]); }
    ,[num] )



    return(

<div>
   

   <h1>Quote Generator</h1>


   {  <h3>
   
{text.text}
  
   
</h3>}
   
<button class="btn btn-success" onClick={getNewText}>new Quote</button>

</div>


    )
}