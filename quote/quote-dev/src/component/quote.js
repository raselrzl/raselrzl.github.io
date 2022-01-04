import { useState, useEffect} from 'react';

const Quote = () => {
    const [quote, setQuote] = useState('I never compare to others neither I did, just compare to me, want to make today better then of mine yesterday');
    const [autname, setAutname]=useState('Dr. Zeras');
   
    const [bodycolor, setBodycolor]=useState("body");
    

    const [quotesArray, setQuotesArray]=useState(null);

    let quoteLink="https://raselrzl.github.io/API/quotes.json";
    

    const fetchQuotes=async(url)=>{
        const res=await fetch(url);
        const getJSON= await res.json();
        setQuotesArray(getJSON.quotes);
        console.log(getJSON);
    }
    useEffect(()=>{
        fetchQuotes(quoteLink);
    },[quoteLink]);

    
    
   
    
    const handleClick=()=>{       
      
       setBodycolor("body2");       
       let randomValue=Math.floor(Math.random()*quotesArray.length);     
       
        setQuote(quotesArray[randomValue].quote);
        setAutname(quotesArray[randomValue].author);
        
        let colorArr=['body2', 'body3', 'body4', 'body5', 'body6', 'body7', 'body8', 'body9', 'body10']
        let randomColor=Math.floor(Math.random()*colorArr.length);
        setBodycolor(colorArr[randomColor]);
        
       
    }

    return (      
        <div id={bodycolor}>
            <div  id="quote-box">                    
                <h3 id="text"><span><i class="bi bi-chat-square-quote-fill"></i></span>  {quote}</h3>
                <p id="author"><i class="bi bi-pen-fill"></i> {autname}</p>
                    
                <div className="flex-container">
                    <div className="buttons" >
                        <div class="logo"><a target="_blank" href={encodeURI(`https://facebook.com?text=${quote}-${autname}`)}><i class="bi bi-facebook"></i></a></div>
                        <div class="logo"><a target="_blank" id="tweet-quote" href={encodeURI(`https://twitter.com/intent/tweet?text=${quote}-${autname}`)}><i class="bi bi-twitter"></i></a></div>
                    </div>

                    <div className="buttons" id="next-quote-button"><button id="new-quote" onClick={()=>handleClick()}>Next Quote</button></div>
                </div>
            </div>       
        </div>
        
     );
}
 
export default Quote;