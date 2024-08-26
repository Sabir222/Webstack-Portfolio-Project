"use client";

import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

import { useMemo } from "react";

interface MapProps {}
//
const Map: React.FC<MapProps> = ({}) => {
  const centerMorocco = useMemo(
    () => ({ lat: 31.507988891432337, lng: -9.766707913682572 }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  return isLoaded ? (
    <div className="">
      <GoogleMap
        mapContainerClassName="h-[500px] w-[100%]  "
        zoom={7.89}
        center={centerMorocco}
      >
        <MarkerF
          position={{ lat: 31.507988891432337, lng: -9.766707913682572 }}
        />
      </GoogleMap>
    </div>
  ) : (
    <div>map</div>
  );
};

export default Map;

/*
{ lat: 31.501120166432887, lng: -9.75375476694082 } morocco
*/
