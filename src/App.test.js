import { render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("App test", () => {
    const { getByText } = render(<App />);
    console.log(getByText("START!").click());
  });
});
