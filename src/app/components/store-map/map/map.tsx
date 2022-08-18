import React, { FC } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

const MapWrapper: FC<{ markers: Store[] }> = ({ markers }) => {
  const [zoom, setZoom] = React.useState(13);
  const [firstMarkerLat, firstMarkerLng] = markers[0].coordinates;
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: firstMarkerLat,
    lng: firstMarkerLng,
  });

  const onClick = (e: google.maps.MapMouseEvent) => {
    // avoid directly mutating state
    console.log(e.latLng!);
    // setClicks([...clicks, e.latLng!]);
  };

  const onIdle = (m: google.maps.Map) => {
    console.log("onIdle");
    setZoom(m.getZoom()!);
    setCenter(m.getCenter()!.toJSON());
  };

  return (
    <Wrapper apiKey={"AIzaSyCGgGVPxRd-WDgUZHeNII9_8g56fSDuZIQ"} render={render}>
      <Map
        center={center}
        onClick={onClick}
        onIdle={onIdle}
        zoom={zoom}
        style={{
          flexGrow: "1",
          height: "100%",
        }}
      >
        {markers.map((store, i) => (
          <Marker
            key={i}
            position={{ lat: store.coordinates[0], lng: store.coordinates[1] }}
            label={{ text: (i + 1).toString(), color: "white" }}
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
      ["click", "idle"].forEach((eventName) =>
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
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = React.useState<google.maps.Marker>();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      marker.setOptions({ ...options });
    }
  }, [marker, options]);

  return null;
};

export default MapWrapper;
