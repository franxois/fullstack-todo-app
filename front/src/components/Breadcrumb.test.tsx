import React from "react";
import { render } from "@testing-library/react";
import {
  Routes,
  Route,
  MemoryRouter,
  useLocation,
  Outlet,
} from "react-router-dom";
import { BreadcrumbProvider, BreadcrumbPortal, Breadcrumb } from "./Breadcrumb";

test("renders breadcrumb", () => {
  const LocationDisplay: React.FC = () => {
    let location = useLocation();
    return <span>{JSON.stringify(location)}</span>;
  };

  const { container } = render(
    <BreadcrumbProvider>
      <MemoryRouter initialEntries={["/pages/A"]}>
        <LocationDisplay />
        <BreadcrumbPortal />
        <Routes>
          <Route path="/*">
            <Route
              path="pages/*"
              element={
                <div>
                  <Breadcrumb to="pages">Home</Breadcrumb>
                  <Outlet />
                </div>
              }
            >
              <Route
                path="A"
                element={
                  <div>
                    <Breadcrumb to="A">A</Breadcrumb>Page A
                  </div>
                }
              />
              <Route
                path="B"
                element={
                  <div>
                    <Breadcrumb to="B">B</Breadcrumb>Page B
                  </div>
                }
              />
            </Route>
          </Route>
          {/* <Route path="/pages/A" element={<div>Tata 3</div>} /> */}
        </Routes>
      </MemoryRouter>
    </BreadcrumbProvider>
  );
  expect(container.querySelector("nav.breadcrumb > ul")).toHaveTextContent(
    "HomeA"
  );
  // expect(container.querySelector("nav.breadcrumb > ul")).toHaveLength(2);
});
