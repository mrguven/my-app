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
const getData = async ( ) => {
      await axios.get('https://type.fit/api/quotes').then((res)=> setTextList(res.data) );
   
}
  useEffect(  ()=> {getData()},[])

console.log('sdfgdsf');

console.log(textList);


const sendData = async ()=>{
await setText(textList[num]); console.log(textList[num]); }




useEffect( ()=> { 
  sendData()
},[num] )
 


    return(

<div>
   

   <h1>Quote Generator</h1>

{
    text==''  &&
    <h3>
    {text.text} <br />
      <b>{text.author}</b>
       
    </h3>

}

    
   
<button class="btn btn-success" onClick={getNewText}>new Quote</button>

</div>


    )
}