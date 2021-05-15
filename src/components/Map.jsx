import GoogleMapReact from "google-map-react";
import { useState } from "react";
import LocationInfo from "./LocationInfo";
import LocationMarker from "./LocationMarker";
import Loading from "./Loading";

const Map = ({ eventData, center, zoom, loading }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [close, setClose] = useState(true);

  const markers = eventData.map((ev) => {
    if (ev.categories[0].id == 8) {
      return (
        <LocationMarker
          onClick={() => {
            setLocationInfo({ id: ev.id, title: ev.title });
            setClose(true);
          }}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          text="My Marker"
        />
      );
    } else {
      return null;
    }
  });

  return !loading ? (
    <div className="map">
      <h1>Check The Fire In the world</h1>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDInhk7BY37v1yoJP7gO-wODZ_ElcsHSHY" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo ? (
        <LocationInfo info={locationInfo} setClose={setClose} close={close} />
      ) : null}
    </div>
  ) : (
    <Loading />
  );
};
Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
  eventData: [],
};
export default Map;
