import React from "react";
import ReactDOM from "react-dom/client";

const portalElement = document.getElementById("overlays");

const Backdrop = props => {
  return (
    <div className="fixed inset-0 z-[1000] h-full w-full bg-red-200"></div>
  );
};
const Menu = props => {
  return (
    <div className="fixed inset-0 z-[1200] w-3/4 bg-yellow-300">
      <div> {props.children}</div>
    </div>
  );
};
const MenuOverlay = props=> {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<Menu>{props.children}</Menu>, portalElement)}
    </>
  );
};

export default MenuOverlay;
