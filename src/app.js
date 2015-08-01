import React from "react";

const HelloMessage = React.createClass({

  render () {
    return (
      <div> Hello Max </div>
    );
  }

});

React.render(<HelloMessage />, document.body);
