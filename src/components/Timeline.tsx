import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { StateTree } from "../types";
import { useSelector, useDispatch } from "react-redux";
import { Slider } from "@material-ui/core";
import { SET_GLOBAL_TIME } from "../actions";

interface StyleProps {}

const useStyles = makeStyles<Theme, StyleProps>(theme => ({
  floatingBox: {
    position: "absolute",
    bottom: "5px",
    left: "5px",
    width: "200px",

    zIndex: 500,
    backgroundColor: "#FFFA",

    padding: "15px",
  },
}));

interface MapWrapperProps {}
const MapWrapper: React.FunctionComponent<MapWrapperProps> = props => {
  const classes = useStyles(props);

  const dispatch = useDispatch();
  const globalTime: number = useSelector(
    (state: StateTree) => state.globalTime,
  );

  const updateTime = (event: any, newValue: number | number[]) => {
    dispatch({ type: SET_GLOBAL_TIME, value: newValue as number });
  };

  return (
    <div className={classes.floatingBox}>
      <div>{globalTime}</div>
      <Slider
        min={1800}
        max={1820}
        onChange={updateTime}
        defaultValue={globalTime}
      />
    </div>
  );
};

export default MapWrapper;
