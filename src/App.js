import logo from "./logo.svg";
import "./App.css";
import locker2 from "./assets/images/locker2.jpg";
import star from "./assets/images/starredi.svg"
import asterisk from "./assets/images/asterisk.svg"

function App() {
  return (
    <div className="App">
      <nav>
        <div>
          <p className="logo">HubLocker</p>
        </div>

        <div>
          <a href="/">Home</a>
          <a href="/">Find A Locker</a>
          <a href="/">Size Guide</a>
          <a href="/">Locations</a>
          <a href="/">Help Center</a>
        </div>

        <div>
          <a href="/">My Account</a>
          <a href="/">080-188-0872</a>
          <button>PAY YOUR BILL</button>
        </div>
      </nav>

      <div className="hero">
        <div>
          <h1>Find A Locker</h1>

          <div className="search">
            <input placeholder="Enter City Or State" />

            <div>
              <div>
                <p>Find Locker</p>
                <p>One Naira For First Rent</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="filter">
        <p>Open Lockers Available</p>

        <div>
          <label>Sort By</label>

          <select>
            <option>Closest</option>
            <option>Lowest Price</option>
          </select>
        </div>
      </div>

      <div className="main">
        <div className="left">
          <img alt="locker" src={locker2} />
          <a href="/">The address</a>
          <div className="stars">
            <img alt="star" src={star} />
            <img alt="star" src={star} />
            <img alt="star" src={star} />
            <img alt="star" src={star} />
            <img alt="star" src={star} />
          </div>

          <a href="/">Distance</a>
        </div>

        <div className="right">
          <div className="sizeFilter">
            <select>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>

            <a href="/">View the size guide</a>
          </div>

          <div className="contentFooter">
            <img alt="divider" src={asterisk} />
            <a href="/">View all the lockers at this location</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
