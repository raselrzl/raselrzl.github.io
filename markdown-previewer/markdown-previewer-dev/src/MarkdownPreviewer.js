import React, {useState} from 'react'
import Markdown from 'react-markdown';

function MarkdownPreviewer() {
    const [inputData, setInputData]=useState()

    const placeholder = `# Thank You for using my Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!    
Or _italic_.  
Or... wait for it... **_both!_**  
And feel free to go crazy.

There's also a link for [Quote Matchine](https://raselrzl.github.io/quote/), and  
> Block Quotes!



- And of course there are lists.
  - Some are bulleted.
  - This is the same
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

const handleChange=()=>{
  return e=>setInputData(e.target.value);
}



    return (
        
        <div id="input-area">
            <div id="editor-header"><p><i class="bi bi-pen-fill"></i>Editor </p><p><i class="bi bi-arrows-move"></i></p></div>
            <textarea id="editor" onChange={handleChange()}>{placeholder}</textarea>
            <div id="previewer-header"><p><i class="bi bi-view-list"></i>Previewer </p><p><i class="bi bi-arrows-move"></i></p></div>
            <div id="preview"><Markdown>{inputData}</Markdown></div>         
        </div>


    )
}
export default MarkdownPreviewer;
