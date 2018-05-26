import "react-native";
import React from "react";
import App from "./App";

import renderer from "react-test-renderer";


it("renders without crashing", () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});


//snapshot testing
//Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.. Instead of rendering the graphical UI

test("renders without changes", () => {
  const snap = renderer.create(<App />).toJSON();
  expect(snap).toMatchSnapshot();
});