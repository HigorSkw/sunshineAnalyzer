import TableDaysContainer from "./components/TableDays";
import Header from "./components/Header";
import FileInput from "./components/InputFile";
import DaysInfoContainer from "./components/DaysInfo";
import RechartsExample from "./components/Chart";

function App() {
  return (
    <div className="App">
      <Header />
      <FileInput />
      <DaysInfoContainer />
      <RechartsExample />
      <TableDaysContainer />
    </div>
  );
}

export default App;
