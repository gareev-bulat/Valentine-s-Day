import React from 'react'
import { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";



const HeartSharp = ( {name, ...props} ) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="30em"
      height="30em"
      {...props}
    >
      <path
        fill="red"
        d="m256 448l-9-6c-42.78-28.57-96.91-60.86-137-108.32c-42.25-50-62.52-101.35-62-157C48.63 114.54 98.46 64 159.08 64c48.11 0 80.1 28 96.92 48.21C272.82 92 304.81 64 352.92 64c60.62 0 110.45 50.54 111.08 112.65c.56 55.68-19.71 107-62 157c-40.09 47.49-94.22 79.78-137 108.35Z"
      ></path>
      <text x="50%" y="50%" textAnchor="middle" className="textDesign">
          {name}
      </text>
    </svg>
  )
}

const HeartSharpText = ( { congratulations, goBack } ) => {
  const lines = congratulations.split("\n");

  return (
    <main className="heart-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="45em"
        height="45em"
        fill="red"
      >
        <path d="m256 448l-9-6c-42.78-28.57-96.91-60.86-137-108.32c-42.25-50-62.52-101.35-62-157C48.63 114.54 98.46 64 159.08 64c48.11 0 80.1 28 96.92 48.21C272.82 92 304.81 64 352.92 64c60.62 0 110.45 50.54 111.08 112.65c.56 55.68-19.71 107-62 157c-40.09 47.49-94.22 79.78-137 108.35Z"></path>
        <text x="50%" y="45%" textAnchor="middle" className="textDesign2">
        {lines.slice(0, -1).map((line, index) => (
            <tspan key={index} x="50%" dy={index === 0 ? "0" : "1.2em"}>
              {line}
            </tspan>
          ))}
          <tspan x="50%" dy="7.0em" className="textDesign2">
            {lines[lines.length - 1]}
          </tspan>
        </text>
      </svg>
      <button onClick={goBack} className="backButton">
        <FaArrowLeft className="backIcon" />
      </button>
    </main>
  );
}


const App = () => {
  const [valentine, setValentine] = useState("");

  return (
    <main>
      {valentine === "" ? (
        <>
          <HeartSharp
            name="Для Мамы"
            className="heartCard"
            onClick={() => setValentine("mom")}
          />
          <HeartSharp
            name="Для Папы"
            className="heartCard"
            onClick={() => setValentine("dad")}
          />
          <HeartSharp
            name="Для Альбины"
            className="heartCard"
            onClick={() => setValentine("albina")}
          />
        </>
      ) : (
        <HeartSharpText
          congratulations={
            valentine === "mom"
              ? "Дорогая мамочка! \n Поздравляю С Днем Святого Валентина! \n От Булата"
              : valentine === "dad"
              ? "Дорогой папочка! \n Поздравляю С Днем Святого Валентина! \n От Булата"
              : "Дорогая Альбиночка! \n Поздравляю С Днем Святого Валентина! \n От Булата"
          }
          goBack={() => setValentine("")}
        />
      )}
    </main>
  );
}

export default App;