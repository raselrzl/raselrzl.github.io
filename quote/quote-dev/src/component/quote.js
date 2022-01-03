import { useState} from 'react';

const Quote = () => {
    //let quote=" Hello Quote Matchine, This is from react";
    const [quote, setQuote] = useState('Hello Quote Matchine, This is from react');
    const [autname, setAutname]=useState('Rasel');
    const [quotebox, setBoxcolor]=useState("quote-box");
    const [bodycolor, setBodycolor]=useState("body");

    const handleClick=()=>{
       setQuote('Hello its from state');
       setAutname('Abba Rasel');
       setBoxcolor("box-color");
       setBodycolor("body2");

    }

    return (      
        <div id={bodycolor}>   
        <div id={quotebox}>
            <div>
                <h1 id="text"><span><i class="bi bi-chat-square-quote-fill"></i></span>  {quote}</h1>
                <p id="author"><i class="bi bi-pen-fill"></i> {autname}</p>
            </div>
            <div className="flex-container">
            <div className="buttons" >
                 <div class="logo"><a><i class="bi bi-facebook"></i></a></div>
                 <div class="logo"><a id="tweet-quote"><i class="bi bi-twitter"></i></a></div>                   
            </div>
            <div className="buttons" id="next-quote-button"><button id="new-quote" onClick={handleClick}>Next Quote</button></div>
            </div>
        </div>
        </div>
        
     );
}
 
export default Quote;