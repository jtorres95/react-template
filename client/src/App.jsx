import "./App.css";
import axios from "axios";
import { useState } from "react";
import RenderUsers from "./components/RenderUsers";
import RenderQuestions from "./components/RenderQuestions";

function App() {
  const [data, setData] = useState('');
  const urlWithProxy = "/api/v1";

  function getDataFromServer(proxyUrl, pathToRoute, renderFunction) {
    const route = proxyUrl + pathToRoute;
    axios
      .get(route)
      .then((res) => setData(renderFunction(res.data)))
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="App">
      {getDataFromServer(urlWithProxy, "/questions", RenderQuestions)}
      <h1>Questions</h1>
      <div>{data}</div>
    </div>
    
  );
}

export default App;
