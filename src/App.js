import React, { useState } from "react";
import axios from "axios";
import Plot from "react-plotly.js";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [string, setString] = useState([]);
  const [occurrence, setOccurrence] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsAnonymous(true);
    console.log("button clicked");
    const { data } = await axios.get(
      "https://www.terriblytinytales.com/test.txt"
    );
    setData(data);
    const words = data.split(" ");
    const frequency = {};
    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase().replace(/[^\w\s]/gi, "");
      if (frequency[word]) {
        frequency[word]++;
      } else {
        frequency[word] = 1;
      }
    }
    let arr = Object.entries(frequency);
    arr.sort((a, b) => b[1] - a[1]);
    const newArr = arr.slice(0, 20);

    const a = newArr.map((item) => item[0]);
    const b = newArr.map((item) => item[1]);

    setString(a);
    setOccurrence(b);
  };

  const downloadCsv = () => {
    const csvData =
      "Word,Frequency\n" +
      string.map((word, index) => `${word},${occurrence[index]}`).join("\n");

    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "histogram.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="bg"></div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <button
          
            className="btn"
            disabled={isAnonymous ? true : false}
            type="submit"
          >
            Submit
          </button>
        </form>
        {data.length > 0 && (
          <div className="plot">
            <Plot
              data={[
                {
                  x: string,
                  y: occurrence,
                  type: "bar",
                },
              ]}
              layout={{
                title: "Top 20 Most Frequent Words",
                xaxis: { title: "Words" },
                yaxis: { title: "Frequency" },
                height:600,
                width:1200,
              }}
            />
            <button onClick={downloadCsv}>Export</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
