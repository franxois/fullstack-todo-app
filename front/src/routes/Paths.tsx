import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  BreadcrumbProvider,
  BreadcrumbPortal,
  Breadcrumb,
} from "../components/Breadcrumb";

const Base: React.FC = () => {
  return (
    <div>
      {/* <Breadcrumb to="">Ini</Breadcrumb> */}
      Page "base"
    </div>
  );
};
const A: React.FC = () => (
  <div>
    <Breadcrumb to="">A</Breadcrumb>
    Page A
  </div>
);
const B: React.FC = () => (
  <div>
    <Breadcrumb to="">B</Breadcrumb>
    Page B
  </div>
);

export const Paths: React.FC = () => {
  return (
    <BreadcrumbProvider>
      Menu :{" "}
      <nav>
        <ul>
          <li key="ini">
            <Link to="">ini</Link>
          </li>
          <li key="a">
            <Link to="a">a</Link>
          </li>
          <li key="b">
            <Link to="b?todo=1">b</Link>
          </li>
        </ul>
      </nav>
      Breadcrumb :
      <BreadcrumbPortal />
      <Breadcrumb to="">Paths</Breadcrumb>
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="a" element={<A />} />
        <Route path="b" element={<B />} />
      </Routes>
    </BreadcrumbProvider>
  );
};
