import React, { useState, useContext } from "react";
import { GlobalContext } from "../../providers/indexContext";
import { FileInputStyled } from "./style";
import { FaFileImport } from "react-icons/fa";

const FileInput = () => {
  const { setData, setHeaders } = useContext(GlobalContext);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileContent = e.target.result;
      const rows = fileContent.split("\n");
      const parsedData = rows
        .filter((row) => row !== "") // Remove linhas vazias utilizando o filter
        .map((row, index) => row.split("\t").slice(0, 3)); //Utilizo as 3 primeiras colunas do arquivo
      const parsedHeaders = parsedData.shift(); // Remove o primeiro elemento e o armazena em headers
      setHeaders(parsedHeaders);
      setData(parsedData);
    };
    reader.readAsText(file);
  };

  return (
    <FileInputStyled>
      <input type="file" onChange={handleFileChange} accept=".txt" />
      <FaFileImport />
      <span>Importar Arquivo TXT</span>
    </FileInputStyled>
  );
};

export default FileInput;
