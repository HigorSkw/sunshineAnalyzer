import React, { useContext } from "react";
import { GlobalContext } from "../../providers/indexContext";
import { Chart } from "react-google-charts";
import { ContainerChart } from "./style";

export const options = {
  title: "Duração dos dias ao longo do ano dados vs f(x)",
  curveType: "function",
  legend: { position: "bottom" },
};

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

const ChartContainer = () => {
  const { arrayGraphic } = useContext(GlobalContext);

  const chartData = [
    ["Data", "Dados", "F(X)"],
    ...arrayGraphic.map((item, index) => {
      const dataNumber = index + 1; // adiciona +1 ao índice para começar do número 1
      const dadosNumber = Number(item.dados.replace(":", ".")); // converte o valor de "13:44" para 13.44
      const fxNumber = Number(item["f(x)"].replace(":", ".")); // converte o valor de "13:43" para 13.43
      return [dataNumber.toString(), dadosNumber, fxNumber];
    }),
  ];

  return (
    <ContainerChart>
      {chartData[1] && (
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={chartData}
          options={options}
        />
      )}
    </ContainerChart>
  );
};

export default ChartContainer;
