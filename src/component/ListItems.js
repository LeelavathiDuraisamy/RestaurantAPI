import React from "react";
class ListItems extends React.Component {
  render() {
    return (
      <div class="listtable">
        {
          <table>
            <caption>
              <b>Items in Category:({this.props.listheading})</b>
            </caption>

            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {this.props.list.map((items) => (
                <tr>
                  <td class="columnlist">{items.name}</td>
                  <td>{items.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    );
  }
}

export default ListItems;
