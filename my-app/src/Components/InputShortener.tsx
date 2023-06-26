import React, { useState } from "react";

type Props = {
  setInputValue: (value: string) => void;
};

const InputShortener = ({ setInputValue }: Props) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };
  return (
    <div>
      <h1 className="">Shorten your Url</h1>
      <div>
        <input
          type="text "
          placeholder="Paste URL here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={handleClick}
          className="outline outline-cyan-500 py-1 px-2 rounded-md hover:outline-none hover:bg-cyan-500 hover:text-white m-2"
        >
          Trim Url
        </button>
      </div>
    </div>
  );
};

export default InputShortener;
