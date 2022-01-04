import { useState, useEffect} from 'react';

const Quote = () => {
    const [quote, setQuote] = useState('Hello Quote Matchine, This is from react');
    const [autname, setAutname]=useState('Rasel');
    const [quotebox, setBoxcolor]=useState("quote-box");
    const [bodycolor, setBodycolor]=useState("body");
    const [randomNumber, setRandomNumber]=useState('0')

    let quoteLink="https://github.com/raselrzl/raselrzl.github.io/blob/main/API/quotes.json"

   // const [apiData, setApiData]=useState([])

/*     const apiGet=()=>{
        fetch("https://raselrzl.github.io/API/quotes.json")
        .then((response)=>response.json())
        .then((json)=>{
            console.log(json);
            setApiData(json);
        });
    };

    useEffect(()=>{
        apiGet();
    },[]) */
    
    
    const handleClick=()=>{       
       setBoxcolor("box-color");
       setBodycolor("body2");
       
       let quoteArray=[{quote:"Life isn’t about getting and having, it’s about giving and being.",author:"Kevin Kruse"},{quote:"Whatever the mind of man can conceive and believe, it can achieve.",author:"Napoleon Hill"},{quote:"Strive not to be a success, but rather to be of value.",author:"Albert Einstein"}];
       let randomValue=Math.floor(Math.random()*quoteArray.length);
       setRandomNumber(randomValue);
       
        setQuote(quoteArray[randomValue].quote);
        setAutname(quoteArray[randomValue].author);
       
    }

    return (      
        <div id={bodycolor}> 
        
        <div id={quotebox}>  
                   
        
            <div>
                <h1 id="text"><span><i class="bi bi-chat-square-quote-fill"></i></span>  {quote}</h1>
                <h2>{randomNumber}</h2>
                <p id="author"><i class="bi bi-pen-fill"></i> {autname}</p>
            </div>
            <div className="flex-container">
            <div className="buttons" >
                 <div class="logo"><a><i class="bi bi-facebook"></i></a></div>
                 <div class="logo"><a id="tweet-quote"><i class="bi bi-twitter"></i></a></div>                   
            </div>
            <div className="buttons" id="next-quote-button"><button id="new-quote" onClick={()=>handleClick()}>Next Quote</button></div>
            </div>
        </div>
       
        </div>
        
     );
}
 
export default Quote;