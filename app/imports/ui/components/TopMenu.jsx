import React from "react";
import { Container, Menu, Dropdown } from "semantic-ui-react";

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless secondary className="topmenu">
          <Container>
            <Menu.Item fitted className="image">
              <img
                  alt="Murphy's Logo"
                  src="http://murphyshawaii.com/media/2014/04/murphyshawaii.png"
              />
            </Menu.Item>
            <Menu.Item position="right">Home</Menu.Item>
            <Dropdown item text="About Us" icon="dropdown" />
            <Menu.Item>St. Patrick's Day</Menu.Item>
            <Dropdown item text="Menu" icon="dropdown" />
            <Dropdown item text="Bar" icon="dropdown" />
            <Menu.Item icon="search" />
          </Container>
        </Menu>
    );
  }
}
