import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";

import Map from "./components/Map";

interface StyleProps {
  booleanStyle: boolean;
}
const useStyles = makeStyles<Theme, StyleProps>(theme => ({
  "@global": {
    body: {
      margin: 0,
    },
  },
  app: {
    width: "100vw",
    height: "100vh",

    backgroundColor: "#8af",
  },
}));

interface Props {
  booleanStyle: boolean;
}
const App: React.FunctionComponent<Props> = props => {
  const classes = useStyles(props);

  return (
    <div className={classes.app}>
      <Map></Map>
    </div>
  );
};

export default App;
