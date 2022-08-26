import React from "react";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menu: [] };
  }
  componentDidMount() {
    fetch("https://stream-restaurant-menu-svc.herokuapp.com/category")
      .then((resp) => resp.json())
      .then((res) => {
        console.log(res);
        this.setState({ menu: res });
        console.log(this.state.menu);
      });
  }

  clickItem = (shortName) => {
    console.log(shortName);
    this.props.getShortName(shortName);
  };

  render() {
    return (
      <div>
        <div>
          <h1>Menu Categories</h1>
        </div>
        <ul>
          {this.state.menu.map((item) => (
            <li onClick={() => this.clickItem(item.short_name)} key={item.name}>
              {" "}
              <span>{`${item.name}-(${item.short_name})`}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Category;
