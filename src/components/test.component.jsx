import React, { Fragment } from "react";

const TestComponent = () => {
  const title = "Shlomo LLC.";
  return (
    // using Fragment to avoid adding a more div tags
    <Fragment>
      <h1>{title}</h1>
      <h2>H2</h2>
    </Fragment>
  );
};

export default TestComponent;
