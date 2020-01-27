import { LatLngTuple } from "leaflet";

export interface EntityObject {
  uuid: string;
  name: string;
}

export interface MapObject extends EntityObject {
  description: string;
  dateRange: number[];
  coord: LatLngTuple;
}

export interface AbstractEvent extends MapObject {
  associatedActors: string[];
  associatedDocuments: string[];
}

export interface Document extends MapObject {
  description: string;
  dateRange: number[];
  associatedActors: string[];
}

export interface StateTree {
  globalTime: number;
  focusedObject: MapObject | null;
  observations: Observations;
}

export interface Observations {
  events: { [key: string]: AbstractEvent };
  documents: { [key: string]: Document };
  actors: { [key: string]: EntityObject };
  geoEntities: { [key: string]: EntityObject };
}
