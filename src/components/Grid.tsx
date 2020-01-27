import React from "react";
import * as _ from "lodash";
import { Theme, makeStyles } from "@material-ui/core/styles";

import { SizeMe } from "react-sizeme";

interface StyleProps {
  gridLineColor?: string;
  gridLineWeight?: number;
}
const useStyles = makeStyles<Theme, StyleProps>(theme => ({
  grid: props => ({
    position: "absolute",
    top: "0",
    left: "0",

    width: "100%",
    height: "100%",

    "& line": {
      stroke: props.gridLineColor ? props.gridLineColor : "#000",
      strokeWidth: props.gridLineWeight ? props.gridLineWeight : 1,
    },
  }),
}));

interface GridProps {
  gridSpacing: number;
  gridLineColor?: string;
  gridLineWeight?: number;
}
const Grid: React.FunctionComponent<GridProps> = props => {
  const { gridSpacing } = props;

  const classes = useStyles(props);

  return (
    <SizeMe monitorHeight={true}>
      {({ size }) => {
        const nLinesHor = size.width ? Math.ceil(size.width / gridSpacing) : 0;
        const nLinesVert = size.height
          ? Math.ceil(size.height / gridSpacing)
          : 0;
        return (
          <>
            <svg className={classes.grid}>
              {_.range(nLinesHor).map((i: number) => (
                <line
                  x1={gridSpacing * i}
                  x2={gridSpacing * i}
                  y1={0}
                  y2={size.height ? size.height : undefined}
                />
              ))}
              {_.range(nLinesVert).map((i: number) => (
                <line
                  x1={0}
                  x2={size.width ? size.width : undefined}
                  y1={gridSpacing * i}
                  y2={gridSpacing * i}
                />
              ))}
            </svg>
          </>
        );
      }}
    </SizeMe>
  );
};

export default Grid;
