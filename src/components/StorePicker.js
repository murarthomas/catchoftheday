import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  constructor(props) {
    super(props);

    this.goToStore = this.goToStore.bind(this);
  }

  myInput = React.createRef();

  goToStore(event) {
    event.preventDefault();
    console.log(event.target);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please Enter A Store</h2>
        <input
          ref={this.myInput}
          type="text"
          placeholder="Store Name"
          required
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
