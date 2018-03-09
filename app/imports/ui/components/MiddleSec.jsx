import React from "react";
import { Grid } from "semantic-ui-react";

export default class MiddleSection extends React.Component {
  render() {
    return (
        <div className="hero-container">
          <Grid
              centered
              columns={2}
              textAlign="center"
              verticalAlign="middle"
              style={{ height: "500px" }}
          >
            <Grid.Column centered>
              <img
                  alt="Murphy's hero logo"
                  src="http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png"
              />
            </Grid.Column>
            <Grid.Column>
              A traditional downtown saloon and eatery located in the Honolulu
              Financial District, just one block off the waterfront, Murphy’s has
              been a haven for mariners, businessmen and locals since 1891.
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}
