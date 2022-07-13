import React, { useState } from "react";
import style from "../SearchBar/SearchBar.module.css"


export default function SearchBar({onSearch}) {


  const [input, setInput] = useState('')

  function seEnvioLaInfo(e){
    e.preventDefault();
    if(!input) return alert("debes escribir el nombre de una ciudad");
    else {
      onSearch(input);
      setInput('')
    };
  }

  const onInputChange = (e) => {
        setInput(e.target.value)
  }


  return (
      
    <form onSubmit = {(e) => seEnvioLaInfo(e)}>
      <div className={style.bar}>
      <input
      className={style.bar}
        value={input}
        onChange={(e) => onInputChange(e)}
        type="text"
        placeholder="Buscar ciudad"
      />
      <img class="search" src={require("../images/search.png")} alt='search' width="25px" height="25px"/>
      </div>
    </form>
  );
}
