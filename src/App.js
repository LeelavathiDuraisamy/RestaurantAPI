import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Category from "./component/Category";
import ListItems from "./component/ListItems";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [], listHeading: "" };
  }
  listOnClick = (e) => {
    fetch(`http://stream-restaurant-menu-svc.herokuapp.com/item?category=${e}`)
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        this.setState({ list: resp, listHeading: e });
        console.log(this.state.listHeading);
      });
  };
  render() {
    return (
      <div className="App">
        <div>
          <Category getShortName={this.listOnClick} />
        </div>
        <div>
          {this.state.list.length > 0 && (
            <ListItems
              list={this.state.list}
              listheading={this.state.listHeading}
            />
          )}
        </div>
      </div>
    );
  }
}
export default App;
