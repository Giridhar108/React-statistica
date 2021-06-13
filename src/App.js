import React from "react";
import Graph from "./components/Graph"
import { useDispatch } from "react-redux";
import { fetchStatistics } from "../src/redux/action/statistics";



function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchStatistics());
  });
  return <div className="App">
    <Graph/>
  </div>;
}

export default App;
