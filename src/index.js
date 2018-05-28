import React from "react";
import ReactDOM from "react-dom";
import ComponentHeader from "./js/components/header.js";
import ComponentFooter from "./js/components/footer.js";
import BodyIndex from "./js/components/bodyindex.js";
class Index extends React.Component {
  render() {
    return (
      <div>
        <ComponentHeader />
        <BodyIndex />
        <ComponentFooter />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
