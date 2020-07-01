import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

const Ini: React.FC = () => {
  return <div>Ini</div>;
};
const A: React.FC = () => <div>A</div>;
const B: React.FC = () => <div>B</div>;

export const Paths: React.FC = () => {
  let location = useLocation();

  const urlSplit = location.pathname.split("/").filter((u) => u.length > 0);

  console.log(urlSplit);

  let breadCrumbsItems = [];
  for (let i = 0; i < urlSplit.length; i++) {
    console.log(urlSplit, urlSplit.slice(0, i));
    breadCrumbsItems.push(
      <Link
        key={urlSplit.slice(1, i + 1).join("/")}
        to={urlSplit.slice(1, i + 1).join("/")}
      >
        {urlSplit[i]}
      </Link>
    );
  }

  return (
    <>
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
      <nav>
        {breadCrumbsItems.reduce((prev, curr) => (
          <>{[prev, " > ", curr]}</>
        ))}
      </nav>
      <Routes>
        <Route path="/" element={<Ini />} />
        <Route path="a" element={<A />} />
        <Route path="b" element={<B />} />
      </Routes>
    </>
  );
};
