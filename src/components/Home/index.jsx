import React from "react";
import ItemList from "../ItemList";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    fetch("https://fun-english.herokuapp.com/items")
      .then(res => res.json())
      .then(res => {
        const items = res.sort((a, b) => b.date - a.date);
        this.setState({ items });
      });
  }
  render() {
    return (
      <React.Fragment>
        <ItemList items={this.state.items} />
      </React.Fragment>
    );
  }
}

export default Home;
