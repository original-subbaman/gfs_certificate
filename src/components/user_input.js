import { useState } from "react";
function LinkInput() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor="linkInput">Enter Google Drive Link</label>
      <input
        type="text"
        id="userInput"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default LinkInput;
