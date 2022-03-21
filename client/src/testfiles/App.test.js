import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
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

// Default App.js Render Test
it("renders without crashing", () => {
  render(<App />);
});

// Smoke Test

// Routes Render Test
it("renders without crashing", () => {
  render(<WebRoutes />);
});

// Navbar Render Test
it("renders without crashing from App.js", () => {
  render(<Navbar />);
});

// Home Page Render Test
it("renders without crashing", () => {
  render(<Home />);
});

// About Page Render Test
it("renders without crashing", () => {
  render(<About />);
});

// Create Page Render Test
it("renders without crashing", () => {
  render(<Create />);
});

// GM Page Render Test
it("renders without crashing", () => {
  render(<GM />);
});

// Dark Page Render Test
it("renders without crashing", () => {
  render(<Dark />);
});

// LBD Page Render Test
it("renders without crashing", () => {
  render(<LBD />);
});

// Mike Dean Page Render Test
it("renders without crashing", () => {
  render(<MikeDean />);
});

// Account Page Render Test
it("renders without crashing", () => {
  render(<Account />, { wrapper: MemoryRouter });
});

//Templates Page Render Test
it("renders without crashing", () => {
  render(<Templates />, { wrapper: MemoryRouter });
});

//EditForm Page Render Test
it("renders without crashing", () => {
  render(<EditForm />, { wrapper: MemoryRouter });
});

//LoginForm Page Render Test
it("renders without crashing", () => {
  render(<LoginForm />, { wrapper: MemoryRouter });
});

//SignupForm Page Render Test
it("renders without crashing", () => {
  render(<SignupForm />, { wrapper: MemoryRouter });
});
