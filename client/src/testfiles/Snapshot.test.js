import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import WebRoutes from "../App";
import Navbar from "../App";
import Home from "../pages/Home";
import Templates from "../pages/Templates";
import Account from "../pages/Account";
import About from "../pages/About";
import Create from "../pages/Create";
import GM from "../pages/GM-Manual";
import Dark from "../pages/Dark";
import LBD from "../pages/LBD";
import MikeDean from "../pages/MikeDean";
import EditForm from "../auth/EditForm";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";

// Snapshot Test

// Account Page Snapshot Test
test("it matches snapshot", () => {
  const { asFragment } = render(<Account />, { wrapper: MemoryRouter });
  expect(asFragment()).toMatchSnapshot();
});

// Routes Snapshot Test
test("it matches snapshot", () => {
  const { asFragment } = render(<WebRoutes />);
  expect(asFragment()).toMatchSnapshot();
});

// Navbar Snapshot Test
test("it matches snapshot", () => {
  const { asFragment } = render(<Navbar />);
  expect(asFragment()).toMatchSnapshot();
});

// Home Page Snapshot Test
test("it matches snapshot", () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});

// About Page Snapshot Test
test("it matches snapshot", () => {
  const { asFragment } = render(<About />);
  expect(asFragment()).toMatchSnapshot();
});

// Create Page Snapshot Test
test("it matches snapshot", () => {
  const { asFragment } = render(<Create />);
  expect(asFragment()).toMatchSnapshot();
});

// GM Page Snapshot Test
test("it matches snapshot", () => {
  const { asFragment } = render(<GM />);
  expect(asFragment()).toMatchSnapshot();
});

// Dark Page Snapshot Test
test("it matches snapshot", () => {
  const { asFragment } = render(<Dark />);
  expect(asFragment()).toMatchSnapshot();
});

// LBD Page Snapshot Test
test("it matches snapshot", () => {
  const { asFragment } = render(<LBD />);
  expect(asFragment()).toMatchSnapshot();
});

// Mike Dean Page Snapshot Test
test("it matches snapshot", () => {
  const { asFragment } = render(<MikeDean />);
  expect(asFragment()).toMatchSnapshot();
});

//Templates Page Snapshot Test
test("it matches snapshot", () => {
  const { asFragment } = render(<Templates />, { wrapper: MemoryRouter });
  expect(asFragment()).toMatchSnapshot();
});

//EditForm Page Snapshot Test
test("it matches snapshot", () => {
  const { asFragment } = render(<EditForm />, { wrapper: MemoryRouter });
  expect(asFragment()).toMatchSnapshot();
});

//LoginForm Page Snapshot Test
test("it matches snapshot", () => {
  const { asFragment } = render(<LoginForm />, { wrapper: MemoryRouter });
  expect(asFragment()).toMatchSnapshot();
});

//SignupForm Page Snapshot Test
test("it matches snapshot", () => {
  const { asFragment } = render(<SignupForm />, { wrapper: MemoryRouter });
  expect(asFragment()).toMatchSnapshot();
});
