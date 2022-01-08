import React, {useState} from 'react'


function MarkdownPreviewer() {
    const [inputData, setInputData]=useState(null)


    function getData(val){
        setInputData(val.target.value);
    }

    return (
        
        <div id="input-area">
            <div id="editor-header">Editor</div>
            <textarea id="editor" onChange={getData}></textarea>
            <div id="previewer-header">Previewer</div>
            <div id="preview"> {inputData}</div>
        </div>


    )
}
export default MarkdownPreviewer;
