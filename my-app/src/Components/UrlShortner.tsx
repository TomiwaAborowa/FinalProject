import React, { useState } from "react";
import InputShortener from "./InputShortener";
import LinkResult from "./LinkResult";



type Props = {};

const Shortener = (props: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <div className="">
      <InputShortener setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
    </div>
  );
};

export default Shortener;