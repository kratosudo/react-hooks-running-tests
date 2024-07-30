import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  //   expect(screen.queryByText("please pass this test")).toBeInTheDocument();
  // });
  //   //to se how the DOM looks like
  //   screen.debug();

  //   expect(screen.queryByText("please pass this test")).toBeInTheDocument();
  // });
 

  //to debug a single element
  const element = screen.queryByText("please pass this test");

  screen.debug(element);

  expect(element).toBeInTheDocument();
});
