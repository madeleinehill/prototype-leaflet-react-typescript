import { Observations } from "../types";

const testObservations: Observations = {
  events: {
    x01: {
      uuid: "x01",
      name: "Comanche enter New Mexico",
      description:
        "They came to the plains from the west, slipping through the canyon passes of the Sangre de Cristo Range in small, roving bands. Like so many other Native groups of the age, the Numunu moved to the great continental grasslands seeking new opportunities, to build a new way of life around the emerging ecological triad of grasses, bison, and horses. They were few in number, possessed little wealth beyond a handful of mounts, and seemed indistinguishable from their more prominent allies, the Utes. New Mexico’s Spanish officials noted their arrival to the southern grasslands in 1706 and wrote it off as a minor event.",
      dateRange: [1800, 1810],
      associatedActors: ["a03"],
      associatedDocuments: ["d01"],
      coord: [45, -90],
    },
    x02: {
      uuid: "x02",
      name: "Apache consolidate control of Southwestern plains",
      description:
        "Just as they faced the Comanche assault, the Apaches solidified their control over the entire southern grasslands by simultaneously annihilating and absorbing the last of the Jumanos, a once-prominent nation of hunter-traders that vanished from the historical record by 1715.",
      dateRange: [1810, 1815],
      associatedActors: ["a04"],
      associatedDocuments: [""],
      coord: [46, -90],
    },
    x03: {
      uuid: "x03",
      name: "France builds forts",
      description:
        "France built a series of forts on Biloxi Bay and along the lower Mississippi valley, creating a springboard for what they hoped would become a great western empire stretching across the plains and beyond.",
      dateRange: [1800, 1808],
      associatedActors: ["a01"],
      associatedDocuments: [""],
      coord: [44, -90],
    },
  },
  documents: {
    d01: {
      uuid: "d01",
      name: "Colonial officials document Comanche movement",
      description:
        "New Mexico’s Spanish officials noted their arrival to the southern grasslands in 1706 and wrote it off as a minor event.",
      dateRange: [1806, 1806],
      associatedActors: ["a02", "a03"],
      coord: [45, -91],
    },
  },
  actors: {
    a01: {
      uuid: "a01",
      name: "France",
    },
    a02: {
      uuid: "a02",
      name: "Spain",
    },
    a03: {
      uuid: "a03",
      name: "Comanche",
    },
    a04: {
      uuid: "a04",
      name: "Apache",
    },
  },
  geoEntities: {
    g01: {
      uuid: "e01",
      name: "New Mexico",
    },
    g02: {
      uuid: "e02",
      name: "Comancheria",
    },
  },
};
export default testObservations;
