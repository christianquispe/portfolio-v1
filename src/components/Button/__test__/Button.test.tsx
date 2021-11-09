/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import Buttom from "../index";

describe("Buttom", () => {
  const message = "Yesy";
  const rgc = new RegExp(message);

  it("render a buttom with chilren prop", () => {
    render(<Buttom>{message}</Buttom>);

    const button = screen.getByRole("button", {
      name: rgc,
    });

    expect(button).toBeInTheDocument();
  });
});
