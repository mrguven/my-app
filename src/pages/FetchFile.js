import axios from "axios"
import { useEffect, useState } from "react"


export default function FetchFile () {

    const [textList,setTextList]=useState([]);
    const [num,setNum]=useState(0);
    const [text,setText]=useState({})
    const [isloading,setIsLoading]= useState(true)

 const getText= ()=>{ 
    
        try{axios.get('https://type.fit/api/quotes').then((res)=> {setTextList(res.data);setIsLoading(false) } )} 
        catch (err){
          {console.log(err)}
        }
    
         
     }
    

  useEffect( ()=> {
    getText(); setText(setTextList[0])
  },[])
 

console.log('sdfgdsf');

console.log(textList);

console.log(text);

console.log(isloading);

useEffect( ()=> { 
    setText(textList[num]); console.log(textList[num]); 
},[num] )
 
const getNewText=()=> {

     
    setNum( Math.floor(Math.random()*textList.length))
   
console.log(num);
}

    return(

<div>
   

   <h1>Quote Generator</h1>

   <div>
{
    isloading?
   <p></p>
  :
<div>
{
    !text ?
  <p></p>
    :
    <div>
   <i>{text.text}</i>  <br />
   <b>{text.author}</b> 
   </div>
}
   </div>
}



</div>
<button class="btn btn-success"  id="quoteButton" onClick={getNewText}>new Quote</button>

</div>


    )
}