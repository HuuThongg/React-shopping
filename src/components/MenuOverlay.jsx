import React from "react";
import ReactDOM from "react-dom/client";
const portalElement = document.getElementById('overlays');

const Backdrop = props => {
  return (
    <div className="fixed inset-0 w-full h-full bg-red-200 z-[1000]"></div>
  );
};
const Menu = props=> {
  return (
    <div className="fixed inset-0 w-3/4 bg-yellow-300 z-[1200]">
      <div> {props.children}</div>
    </div>
  );
};
const MenuOverlay = props => {
  // const  toggle = true;
  return (
    <>
      {ReactDOM.createPortal(
      <Backdrop />, portalElement)}
      {ReactDOM.createPortal(<Menu>{props.children}</Menu>, portalElement)}
    </>
  );
};

export default MenuOverlay;
