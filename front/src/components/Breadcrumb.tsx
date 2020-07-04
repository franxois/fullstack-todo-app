import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

import "./Breadcrumb.scss";

/**
 * Breadcrumb component using Portal and Context API
 *
 * copied from
 * - https://jjenzz.com/smarter-dumb-breadcrumb
 * - https://medium.com/@BeharEfe/breadcrumb-component-with-react-portals-19e92f392f51
 */

const Context = React.createContext<
  [
    HTMLUListElement | undefined,
    Dispatch<SetStateAction<HTMLUListElement | undefined>>
  ]
>([undefined, () => {}]);

const useBreadcrumbContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("Missing BreadcrumbProvider.");
  }

  return context;
};

const BreadcrumbProvider: React.FC = ({ children }) => {
  const portalNodeState = useState<HTMLUListElement>();

  return (
    <Context.Provider value={portalNodeState}>{children}</Context.Provider>
  );
};

const BreadcrumbPortal: React.FC = ({ children }) => {
  const portalNodeRef = useRef<HTMLUListElement>(null);
  const [, setPortalNode] = useBreadcrumbContext();

  useEffect(() => {
    portalNodeRef.current && setPortalNode(portalNodeRef.current);
  }, [setPortalNode]);

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ul ref={portalNodeRef} />
    </nav>
  );
};

const Breadcrumb: React.FC<{ to: string }> = ({ children, to, ...props }) => {
  const [portalNode] = useBreadcrumbContext();

  return portalNode
    ? ReactDOM.createPortal(
        <li {...props}>
          <NavLink to={to}>{children}</NavLink>
        </li>,
        portalNode
      )
    : null;
};

export { BreadcrumbProvider, BreadcrumbPortal, Breadcrumb };
