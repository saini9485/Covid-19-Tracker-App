import React, { useEffect, useState } from "react";
import "./CovidData.css";

export function CovidData() {
  const [country, setCountry] = useState("");
  const [cases, setCases] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  const [todayCases, setTodayCases] = useState("");
  const [deathCases, setDeathCases] = useState("");
  const [recoveredCases, setRecoveredCases] = useState("");
  const [userInput, setUserInput] = useState("");
  const [toggle, setToggle] = useState(true);
  //const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        //setData("");
        
      });
  }, []);

  if (toggle) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }



  const setData = ({
    country,
    cases,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
  }) => {
    setCountry(country);
    setCases(cases);
    setRecovered(recovered);
    setDeaths(deaths);
    setTodayCases(todayCases);
    setDeathCases(todayDeaths);
    setRecoveredCases(todayRecovered);
  };

  const handleSearch = (e) => {
    // if(userInput==""){
    //     alert("please inter Country name")
    // }else{
         setUserInput(e.target.value);
    //}
    // userInput("")

    // covidData__country__info ="block"
  };

  // const handleDarkThemeChange = () => {
  //     setDarkTheme(!darkTheme);
  //   };

  const handleSubmit = (props) => {
    props.preventDefault();
    fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };[]

  // if (toggle) {
  //   document.body.style.backgroundColor = "white";
  //   document.body.style.color = "black";
  // } else {
  //   document.body.style.backgroundColor = "black";
  //   document.body.style.color = "white";
  // }



  return (

<>
    <div>
    {toggle ? (
      <button onClick={() => setToggle(!toggle)}>DARK THEME</button>
    ) : (
      <button onClick={() => setToggle(!toggle)}>LIGHT THEME</button>
    )}
  </div>

    <div className="covidData">
      {/* <div>
        backgroundColor={darkTheme ? "dark" : "light"}
        text={darkTheme ? "light" : "dark"}
        className="text-center"
        style={{ margin: "10px" }}
      </div>
         */}

      {/* style={{
        backgroundColor: darkTheme ? "black" : "white",
        color: darkTheme ? "white" : "black",
      }} */}

      <h1>LIVE COVID-19 CASES COUNTRY WISE</h1>
      <div className="covidData__input">
        <form onSubmit={handleSubmit}>
          <div>
          <input onChange={handleSearch} placeholder="Enter Country Name" />
          <button type="submit">Search</button>
          </div>
        </form>
      </div>

      <div className="covidData__country__info">
        {/* <div> */}
        <p className="Country">Country Name : {country} </p>

        <p className="Cases">Cases : {cases}</p>

        <p className="Deaths">Deaths : {deaths}</p>

        <p className="Recovered" >Recovered : {recovered}</p>

        <p className="CasesToday">Cases Today : {todayCases}</p>

        <p className="DeathsToday">Deaths Today : {deathCases}</p>

        <p className="RecoveredToday">Recovered Today : {recoveredCases}</p>
        {/* </div> */}
      </div>
      
    </div>
    </>
  );
}
