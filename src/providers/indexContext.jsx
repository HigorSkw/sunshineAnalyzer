import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);
  const [longestDay, setLongestDay] = useState({});
  const [shortestDay, setShortestDay] = useState({});
  const [averageTime, setAverageTime] = useState({});
  const [dayDurationDif, setDayDurationDif] = useState({});
  const [totalDurationTime, setTotalDurationTime] = useState({});
  const [totalDurationFX, setTotalDurationFX] = useState({});
  const [differenceDurationFX, setDifferenceDurationFX] = useState({});
  const [comprehensionRate, setComprehensionRate] = useState();
  const [savedStorage, setSavedStorage] = useState();

  const [arrayGraphic, setArrayGraphic] = useState([]);

  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(":");
    return parseInt(hours) * 60 + parseInt(minutes);
  };

  // b ) Apresenta a duração do dia mais longo do ano
  const findLongestDay = (data) => {
    let early = null;
    let later = null;
    let dayFound = null;
    let duration = null;

    data.forEach((day) => {
      const sunriseTime = timeToMinutes(day[1]);
      const sunsetTime = timeToMinutes(day[2]);
      const durationTime = sunsetTime - sunriseTime;

      if (!early) {
        early = sunriseTime;
        later = sunsetTime;
        dayFound = day;
        duration = durationTime;
      } else if (duration < durationTime) {
        early = sunriseTime;
        later = sunsetTime;
        dayFound = day;
        duration = durationTime;
      }
    });
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    longestDay.day = dayFound[0];
    longestDay.hours = hours;
    longestDay.minutes = minutes;

    return longestDay;
  };

  // c ) Apresente a duração do dia mais curto do ano
  const findShortestDay = (data) => {
    let early = null;
    let later = null;
    let dayFound = null;
    let duration = null;

    data.forEach((day) => {
      const sunriseTime = timeToMinutes(day[1]);
      const sunsetTime = timeToMinutes(day[2]);
      const durationTime = sunsetTime - sunriseTime;

      if (!early) {
        early = sunriseTime;
        later = sunsetTime;
        dayFound = day;
        duration = durationTime;
      } else if (duration > durationTime) {
        early = sunriseTime;
        later = sunsetTime;
        dayFound = day;
        duration = durationTime;
      }
    });
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    shortestDay.day = dayFound[0];
    shortestDay.hours = hours;
    shortestDay.minutes = minutes;

    return shortestDay;
  };

  // d ) Apresente a média de diferença dos dias do ano
  const calculateAverageDay = (data) => {
    let totalDuration = 0;
    let countDays = 0;

    data.forEach((day) => {
      const sunriseTime = timeToMinutes(day[1]);
      const sunsetTime = timeToMinutes(day[2]);
      const durationTime = sunsetTime - sunriseTime;

      totalDuration += durationTime;
      countDays++;
    });

    const averageDurationTime = totalDuration / countDays;

    const hours = Math.floor(averageDurationTime / 60);
    const minutes = Math.round(averageDurationTime % 60);

    averageTime.hours = hours;
    averageTime.minutes = minutes;

    return averageTime;
  };

  // e ) Calcule a diferença entre o dia mais longo e o dia mais curto
  const calculateDayDurationDifference = (data) => {
    // 1° encontrar o dia mais longo e mais curto
    const longestDay = findLongestDay(data);
    const shortestDay = findShortestDay(data);

    // 2° Calcular a duração do sol nesses 2 dias
    const longestDuration = longestDay.hours * 60 + longestDay.minutes;
    const shortestDuration = shortestDay.hours * 60 + shortestDay.minutes;

    // 3° Calcular a diferença em horas e minutos
    const diffHours = Math.floor((longestDuration - shortestDuration) / 60);
    const diffMinutes = (longestDuration - shortestDuration) % 60;

    // Salvar dentro da variável que foi criada anteriormente
    dayDurationDif.hours = diffHours;
    dayDurationDif.minutes = diffMinutes;

    return dayDurationDif;
  };

  // f ) Calcule e apresente o total de horas de sol do ano
  const calculateTotalDuration = (data) => {
    let totalDuration = 0;

    data.forEach((day) => {
      const sunriseTime = timeToMinutes(day[1]);
      const sunsetTime = timeToMinutes(day[2]);
      const durationTime = sunsetTime - sunriseTime;

      totalDuration += durationTime;
    });

    const hours = Math.floor(totalDuration / 60);
    const minutes = Math.round(totalDuration % 60);

    totalDurationTime.hours = hours;
    totalDurationTime.minutes = minutes;

    return totalDurationTime;
  };

  const calculateTotalFX = (data) => {
    let totalDuration = 0;

    data.forEach((day) => {
      let formatedTime = timeToMinutes(day["f(x)"]);
      totalDuration += formatedTime;
    });

    const hours = Math.floor(totalDuration / 60);
    const minutes = Math.round(totalDuration % 60);

    totalDurationFX.hours = hours;
    totalDurationFX.minutes = minutes;

    return totalDurationFX;
  };

  const calculateDifferenceRX = () => {
    // 2° Calcular a duração do sol nesses 2 dias
    const totalDuration =
      totalDurationTime.hours * 60 + totalDurationTime.minutes;
    const totalFX = totalDurationFX.hours * 60 + totalDurationFX.minutes;

    // 3° Calcular a diferença em horas e minutos
    const diffHours = Math.floor((totalDuration - totalFX) / 60);
    const diffMinutes = (totalDuration - totalFX) % 60;

    // Salvar dentro da variável que foi criada anteriormente
    differenceDurationFX.hours = diffHours;
    differenceDurationFX.minutes = diffMinutes;

    setComprehensionRate(totalDuration / totalFX);
    setSavedStorage(totalDuration - totalFX);

    return differenceDurationFX;
  };

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const hoursString = String(hours).padStart(2, "0");
    const minsString = String(mins).padStart(2, "0");
    return `${hoursString}:${minsString}`;
  };

  // g ) construir o gráfico com os dados de duração dos dias ao longo do ano, a curva apresentada pode

  const calculateValues = (a, b) => {
    const values = [];

    for (let i = 0; i <= 365; i++) {
      const y = a * Math.cos((i * 2 * Math.PI) / 365) + b;
      values.push(y);
    }

    return values;
  };

  const chatData = (data) => {
    // Encontrando valor de C &
    const longestDuration = longestDay.hours * 60 + longestDay.minutes;
    const shortestDuration = shortestDay.hours * 60 + shortestDay.minutes;

    // c é a duração do dia mais longo, em minutos.
    let c = longestDuration;

    // d é a duração do dia mais curto, em minutos.
    let d = shortestDuration;

    // b é a média aritmética das durações de todos os dias, em minutos.
    let b = averageTime.hours * 60 + averageTime.minutes;

    // a é o valor resultante da equação: (c - d) / 2
    let a = (c - d) / 2;

    const values = calculateValues(a, b);

    const results = [];

    for (let i = 0; i < data.length; i++) {
      const date = data[i][0];
      const duration = a * Math.cos(((i + 10) * 2 * Math.PI) / 365) + b;
      const y = formatTime(duration);

      const sunriseTime = timeToMinutes(data[i][1]);
      const sunsetTime = timeToMinutes(data[i][2]);
      const dailyDuration = sunsetTime - sunriseTime;
      const dailyFormat = formatTime(dailyDuration);
      const obj = {
        Data: date,
        dados: dailyFormat,
        "f(x)": y.slice(0, 5),
      };
      results.push(obj);
    }

    setArrayGraphic(results);
  };

  useEffect(() => {
    if (data[0] !== undefined) {
      findLongestDay(data);
      findShortestDay(data);
      calculateAverageDay(data);
      calculateDayDurationDifference(data);
      calculateTotalDuration(data);
      calculateTotalFX(arrayGraphic);
      calculateDifferenceRX();
      chatData(data);
      setReload(true);
    }
  }, [data, reload]);

  return (
    <GlobalContext.Provider
      value={{
        setData,
        headers,
        setHeaders,
        longestDay,
        shortestDay,
        averageTime,
        dayDurationDif,
        totalDurationTime,
        data,
        arrayGraphic,
        differenceDurationFX,
        comprehensionRate,
        savedStorage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
