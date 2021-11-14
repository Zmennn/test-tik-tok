import "./App.css";
import request from "./helpers/request";
import { Gallery } from "./components/index";
import { useEffect, useState } from "react";

function App() {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    request().then((res) => {
      setDataArray(res.data);
    });
  }, []);

  return <Gallery dataArray={dataArray} />;
}

export default App;
