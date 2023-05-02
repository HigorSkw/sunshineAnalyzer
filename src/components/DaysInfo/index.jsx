import React, { useContext, useEffect, useState } from "react";
import { Container, Data, Info, InfoWrapper, SubTitle, Title } from "./style";
import { GlobalContext } from "../../providers/indexContext";

const DaysInfoContainer = () => {
  const [loading, setLoading] = useState(true);

  const {
    longestDay,
    shortestDay,
    averageTime,
    dayDurationDif,
    totalDurationTime,
    data,
    differenceDurationFX,
    comprehensionRate,
    savedStorage,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (data[0] !== undefined) {
      setLoading(false);
    }
  }, [data]);

  return (
    <Container>
      {loading ? (
        <>
          <Title> Importe um arquivo TXT para continuar...</Title>
        </>
      ) : (
        <>
          <Title> Pato Branco - Paraná</Title>
          <InfoWrapper>
            <Info>
              <SubTitle>Dia mais longo do ano:</SubTitle>
              {longestDay.day && (
                <Data>
                  {longestDay.day} - {longestDay.hours} horas e{" "}
                  {longestDay.minutes} minutos
                </Data>
              )}
            </Info>
            <Info>
              <SubTitle>Dia mais curto do ano:</SubTitle>
              {shortestDay.day && (
                <Data>
                  {shortestDay.day} - {shortestDay.hours} horas e{" "}
                  {shortestDay.minutes} minutos
                </Data>
              )}
            </Info>
            <Info>
              <SubTitle>Média de duração dos dias: </SubTitle>
              {averageTime.hours && (
                <Data>
                  {averageTime.hours.toFixed(0)} horas e{" "}
                  {averageTime.minutes.toFixed(0)} minutos
                </Data>
              )}
            </Info>
            <Info>
              <SubTitle>Diferença dia mais longo x mais curto: </SubTitle>
              {averageTime.hours && (
                <Data>
                  {dayDurationDif.hours.toFixed(0)} horas e{" "}
                  {dayDurationDif.minutes.toFixed(0)} minutos
                </Data>
              )}
            </Info>
            <Info>
              <SubTitle>Total de horas de sol da cidade: </SubTitle>
              {averageTime.hours && (
                <Data>
                  {totalDurationTime.hours} horas e{" "}
                  {totalDurationTime.minutes.toFixed(0)} minutos
                </Data>
              )}
            </Info>
            <Info>
              <SubTitle>Estimativa de erro por meio de f(x): </SubTitle>
              {differenceDurationFX.hours && (
                <Data>
                  {differenceDurationFX.hours} horas e{" "}
                  {differenceDurationFX.minutes.toFixed(0)} minutos
                </Data>
              )}
            </Info>
            <Info>
              <SubTitle>
                {" "}
                É possível compactar todos os dados medidos de nascer e por do
                sol em apenas duas constantes a e b?{" "}
              </SubTitle>
              {differenceDurationFX.hours && (
                <Data>
                  É possível da seguinte forma: Constante A = data + horário do
                  Nascer do Sol | Constante B = data + horário do Pôr do Sol
                </Data>
              )}
            </Info>
            <Info>
              <SubTitle>Taxa de compressão:</SubTitle>
              {comprehensionRate && <Data>{comprehensionRate}</Data>}
            </Info>

            <Info>
              <SubTitle>Quantidade de Armazenamento economizado:</SubTitle>
              {savedStorage && (
                <Data>
                  {savedStorage} bites ou {(comprehensionRate - 1).toFixed(3)}%
                </Data>
              )}
            </Info>
          </InfoWrapper>
        </>
      )}
    </Container>
  );
};

export default DaysInfoContainer;
