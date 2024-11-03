import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = ("");
    setText(newText);
  };
  const handleOnDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "textfile.txt";
    document.body.appendChild(element); // Required for Firefox
    element.click();
    document.body.removeChild(element);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('enter the text here');

  return (
    <>
      <div className="container">
        <div>
          <h2>{props.heading}</h2>
          <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
          </div>
          <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
          <button type="button" className="btn btn-primary mx-1" onClick={handleClearClick}>clear text</button>
          <button type="button" className="btn btn-primary mx-1" onClick={handleOnDownload}>Text Download</button>
        </div>
      </div>

      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").filter(word => word.length > 0).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter(word => word.length > 0).length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
