import logo from "./logo.svg";
import "./App.css";
import locker2 from "./assets/images/locker2.jpg";
import star from "./assets/images/starredi.svg";
import unstarred from "./assets/images/unstarredi.svg"
import asterisk from "./assets/images/asterisk.svg";
import { useEffect, useState } from "react";
import LockerResult from "./components/lockerResult";
import LockerItem from "./components/lockerItem";
import Menu from "./components/menu";

function Home() {
  const [locationResults, setLocationResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({})
  const [lockerResults, setLockerResults] = useState([])
  const [filteredResults, setFilteredResults] = useState([])

  const searchLocations = async (searchTerm) => {
    const locations = await fetch(
      "https://assessing.herokuapp.com/locations/" + searchTerm,
      {
        method: "GET",
      }
    );

    const locationsList = await locations.json();

    setLocationResults(locationsList.locations);
  };

  const searchLockers = async (location, locationNumber) => {
    const foundLockers = await fetch("https://assessing.herokuapp.com/lockers/" + location + "/" + locationNumber, {
      method : "GET"
    })

    const lockerResult = await foundLockers.json()
    setLockerResults(lockerResult.lockers)
    filter(lockerResult.lockers, "Small")
  }

  const filter = (results, size) => {
    const filtered = results.filter(item => item.size === size)
    setFilteredResults(filtered)
  }

  useEffect(() => {
    searchLocations();
  }, []);

  return (
    <div className="App">
      <Menu />

      <div className="hero">
        <div>
          <h1>Find A Locker</h1>

          <div className="search">
            <input
              placeholder="Enter City Or State"
              onChange={(e) => {
               if (e.target.value.length === 0){
                setLocationResults([])
               } else {
                searchLocations(e.target.value);
               }
              }}
            />

            <div>
              <div>
                <p>Find Locker</p>
                <p>One Naira For First Rent</p>
              </div>
            </div>
          </div>

          <div className="resultContainer">
            <div className="resultContent">
              {locationResults.map((item, index) => (
                <LockerResult key={Math.random()} data={item} selectLocation={() => {
                  setSelectedLocation(item)
                  setLocationResults([])
                  searchLockers(item.location, item.locationNumber)
                }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="filter">
        {
            <p>{ (filteredResults.length === 1 ? "1 locker available" : (filteredResults.length === 0 ? "Search to find available lockers" : `${filteredResults.length} lockers available`))}</p>
        }

        <div>
          <label>Sort By</label>

          <select>
            <option>Closest</option>
            <option>Lowest Price</option>
          </select>
        </div>
      </div>

      <div className="main">
        <div className={Object.values(selectedLocation).length === 0 ? "left hidden" : "left"}>
          <img alt="locker" src={locker2} />
          <a href="/">{selectedLocation?.address}</a>
          <div className="stars">
            <img alt="star" src={selectedLocation?.rating >= 1 ? star : unstarred} />
            <img alt="star" src={selectedLocation?.rating >= 2 ? star : unstarred} />
            <img alt="star" src={selectedLocation?.rating >= 3 ? star : unstarred} />
            <img alt="star" src={selectedLocation?.rating >= 4 ? star : unstarred} />
            <img alt="star" src={selectedLocation?.rating >= 5 ? star : unstarred} />
          </div>

          <a href="/">{selectedLocation?.distance + (selectedLocation?.distance === 1 ? " mile away" : " miles away")}</a>
        </div>

        <div className="right">
          <div className="sizeFilter">
            <select onChange={e => {
              filter(lockerResults, e.target.value)
            }}>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>

            <a href="/">View the size guide</a>
          </div>

          <table>
            <tbody>
            {
              filteredResults.map((item, index) => <LockerItem key={index} data={item} />)
            }
            </tbody>
          </table>

          <div className="contentFooter">
            <img alt="divider" src={asterisk} />
            <a href="/">View all the lockers at this location</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
