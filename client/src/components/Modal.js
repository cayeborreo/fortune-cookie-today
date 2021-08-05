import React from "react";
import classNames from "classnames";

const Modal = ({ state, dispatch }) => {
  const { modal } = state;
  return (
    <div className={classNames("modal", { "is-active": modal?.isActive })}>
      <div
        className="modal-background"
        onClick={() =>
          dispatch({
            type: "HIDE_MODAL",
          })
        }
      ></div>
      <div className="modal-content mx-5">{modal?.component}</div>
    </div>
  );
};

export default Modal;
