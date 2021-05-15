import { useEffect, useState } from "react";
import "./App.css";
import Map from "./components/Map";
import axios from "axios";
import Loading from "./components/Loading";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import PictureDay from "./components/PictureDay";
function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    try {
      let result = await axios.get(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      setEventData(result.data.events);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <Switch>
        {" "}
        <Route
          exact
          path="/"
          render={(props) => (
            <Map eventData={eventData} {...props} loading={loading} />
          )}
        />
        <Route path="/photo" component={PictureDay} />
      </Switch>
    </div>
  );
}

export default App;
