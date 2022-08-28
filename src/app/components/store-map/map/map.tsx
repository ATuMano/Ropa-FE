import React, { FC } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useDispatch } from "react-redux";
import { setSelectedStore } from "features/selected-store/actions/selected-store-actions";

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

const MapWrapper: FC<{ markers: Store[] }> = ({ markers }) => {
  const [zoom, setZoom] = React.useState(13);
  const [firstMarkerLat, firstMarkerLng] = markers[0].coordinates;
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: firstMarkerLat,
    lng: firstMarkerLng
  });

  const onIdle = (m: google.maps.Map) => {
    setZoom(m.getZoom()!);
    setCenter(m.getCenter()!.toJSON());
  };

  return (
    <Wrapper apiKey={"AIzaSyCGgGVPxRd-WDgUZHeNII9_8g56fSDuZIQ"} render={render}>
      <Map
        center={center}
        onIdle={onIdle}
        zoom={zoom}
        style={{
          flexGrow: "1",
          opacity: "1",
          height: "100%"
        }}
      >
        {markers.map((store, i) => (
          <Marker
            key={i}
            position={{ lat: store.coordinates[0], lng: store.coordinates[1] }}
            label={{ text: (i + 1).toString(), color: "white" }}
            title={store.name}
            storeID={store.__id__}
          />
        ))}
      </Map>
    </Wrapper>
  );
};
interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
  children?: React.ReactNode;
}

const Map: React.FC<MapProps> = ({
  onClick,
  onIdle,
  children,
  style,
  ...options
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  React.useEffect(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  React.useEffect(() => {
    if (map) {
      ["click", "idle"].forEach(eventName =>
        google.maps.event.clearListeners(map, eventName)
      );

      if (onClick) {
        map.addListener("click", onClick);
      }
    }
  }, [map, onClick, onIdle]);

  return (
    <>
      <div ref={ref} style={style} />
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

interface MarkerProps {
  storeID: string;
  position: google.maps.LatLngLiteral;
  label: google.maps.MarkerLabel;
  title: string;
  map?: google.maps.Map | null;
}

const Marker: React.FC<MarkerProps> = ({ storeID, ...options }) => {
  const [marker, setMarker] = React.useState<google.maps.Marker>();
  const dispatch = useDispatch();
  const svgMarker = {
    path:
      "M54.9869 50.1579C61.2611 45.6075 65.3332 38.273 65.3332 30C65.3332 16.1929 53.9911 5 39.9998 5C26.0086 5 14.6665 16.1929 14.6665 30C14.6665 38.273 18.7386 45.6075 25.0127 50.1579C29.7766 53.7004 36.4903 59.2871 38.0423 68.2769C38.2091 69.243 39.0195 69.9924 39.9998 69.9924C40.9802 69.9924 41.7906 69.243 41.9574 68.2769C43.5094 59.2871 50.223 53.7004 54.9869 50.1579Z",
    fillColor: "#0BB3BE",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 0.8,
    labelOrigin: new google.maps.Point(40, 30),
    anchor: new google.maps.Point(9, 35)
  };
  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      const newOptions = { ...options, icon: svgMarker };
      marker.setOptions({ ...newOptions });
      marker.addListener("click", () => {
        dispatch(setSelectedStore(storeID));
      });
    }
  }, [marker, options]);

  return null;
};

export default MapWrapper;
