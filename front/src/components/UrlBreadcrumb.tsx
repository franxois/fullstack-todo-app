import React from "react";
import { Link, useLocation } from "react-router-dom";

export const UrlBreadcrumb: React.FC = () => {
  let location = useLocation();

  const urlSplit = location.pathname.split("/").filter((u) => u.length > 0);

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
    <nav>
      {breadCrumbsItems.reduce((prev, curr) => (
        <>{[prev, " > ", curr]}</>
      ))}
    </nav>
  );
};
