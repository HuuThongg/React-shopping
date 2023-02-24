
'use client'
import React,{useEffect, useState} from "react";
import { createPortal } from 'react-dom';
import classes from './Modal.module.css'

const Backdrop = (props: { onClose: React.MouseEventHandler<HTMLDivElement> | undefined; }) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>
}
const ModalOverlay = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  return (
    <div className={classes.modal}>
      <div> {props.children}</div>
    </div>
  )
}

const Modal = (props: { onClose: any; children: any; }) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById('modalLogin'))
  }, [portalElement])
  return (
    <>
      {portalElement && (
        <>
          {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
          {createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            portalElement
          )}
        </>
      )}
    </>
  )

}
export default Modal;