import axios from "axios"
import { useEffect, useState } from "react"


export default function FetchFile () {

    const [textList,setTextList]=useState([]);
    const [num,setNum]=useState(0);
    const [text,setText]=useState({})
    const [isloading,setIsLoading]= useState(false)



  useEffect(  ()=> {axios.get('https://type.fit/api/quotes').then((res)=> setTextList(res.data) );
  setIsLoading(true)},[])

console.log('sdfgdsf');

console.log(textList);





useEffect( ()=> { 
    setText(textList[num]); console.log(textList[num]); setIsLoading(true)
},[num] )
 
const getNewText=()=> {

     
    setNum( Math.floor(Math.random()*textList.length))
   
console.log(num);
}

    return(

<div>
   

   <h1>Quote Generator</h1>


   {
       
       text
        ?
   <h3>
   {text.text} <br />
     <b>{text.author}</b>
      
   </h3>
       :
<div class="spinner-border" role="status">
<span class="visually-hidden">Loading...</span>
</div> 

}

   
<button class="btn btn-success" onClick={getNewText}>new Quote</button>

</div>


    )
}