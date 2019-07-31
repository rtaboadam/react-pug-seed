import React, { Component } from "react";

const PugReactComponent = props => (pug`
  .wrapper
    if props.shouldShowGreeting
      p.greeting Hello World!
 
    button(onClick=props.notify) Click Me`);

export default PugReactComponent;