import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { Todos } from "./Todos";
import { Paths } from "./Paths";

import "./Main.scss";

const Menu: React.FC = () => (
  <ul>
    <li>
      <a href="/">
        <span role="img" aria-label="home">
          🏠
        </span>
      </a>
    </li>
    <li>
      <Link to="/todos">Todos</Link>
    </li>
    <li>
      <Link to="/paths">Paths</Link>
    </li>
  </ul>
);

const Home: React.FC = () => <Navigate to="/todos" replace={true} />;

const Pages: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/todos/*" element={<Todos />}></Route>
    <Route path="/paths/*" element={<Paths />}></Route>
  </Routes>
);

const Main: React.FC = () => (
  <>
    <nav>
      <Menu />
    </nav>
    <main>
      <Pages />
    </main>
  </>
);

export default Main;
