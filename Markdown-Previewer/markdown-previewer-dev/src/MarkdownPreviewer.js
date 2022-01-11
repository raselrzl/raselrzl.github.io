import React, {useState} from 'react'
import Markdown from 'react-markdown';

function MarkdownPreviewer() {
    const [inputData, setInputData]=useState(null)

    return (
        
        <div id="input-area">
            <div id="editor-header"><p>Editor</p></div>
            <textarea id="editor" value={inputData} onChange={e=>setInputData(e.target.value)}></textarea>
            <div id="previewer-header"><p>Previewer</p></div>
            <div id="preview"><Markdown>{inputData}</Markdown></div>         
        </div>


    )
}
export default MarkdownPreviewer;
