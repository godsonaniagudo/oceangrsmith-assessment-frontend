import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <div>
          <img alt="logo" />
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

      <div>
        <div>
          <h1>Find A Locker</h1>

          <div>
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

      <div>
        <p>Open Lockers Available</p>

        <div>
          <label>Sort By</label>

          <select>
            <option>Closest</option>
            <option>Lowest Price</option>
          </select>
        </div>
      </div>

      <div>
        <div>
          <div>
            <img alt="locker iamge" />
            <a href="/">The address</a>
            <div>
              <img alt="star" />
              <img alt="star" />
              <img alt="star" />
              <img alt="star" />
              <img alt="star" />
            </div>

            <a href="/">Distance</a>
          </div>
        </div>

        <div>
          <div>
            <select>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>

            <a href="/">View the size guide</a>
          </div>

          <div>
            <img alt="divider" />
            <a href="/">View all the lockers at this location</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
