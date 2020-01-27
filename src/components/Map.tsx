import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Timeline from "./Timeline";
import { StateTree, MapObject } from "../types";
import { useSelector } from "react-redux";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

interface StyleProps {}
const useStyles = makeStyles<Theme, StyleProps>(theme => ({
  map: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
}));

interface MapWrapperProps {}
const MapWrapper: React.FunctionComponent<MapWrapperProps> = props => {
  const classes = useStyles(props);

  const globalTime: number = useSelector(
    (state: StateTree) => state.globalTime,
  );
  const mapObjects: MapObject[] = useSelector((state: StateTree) =>
    Object.values({
      ...state.observations.events,
      ...state.observations.documents,
    }).filter(
      obj => globalTime >= obj.dateRange[0] && globalTime <= obj.dateRange[1],
    ),
  );

  console.log(mapObjects);

  return (
    <>
      <Map className={classes.map} center={[35, -100]} zoom={5}>
        {props.children}
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri &mdash; Source: US National Park Service"
          minZoom={4}
          maxZoom={10}
        />
        {mapObjects.map(obs => (
          <Marker key={obs.uuid} position={obs.coord}>
            <Popup>{`${obs.name}: ${obs.description}`}</Popup>
          </Marker>
        ))}
      </Map>
      <Timeline></Timeline>
    </>
  );
};

export default MapWrapper;
