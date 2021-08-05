import React, { useContext } from "react";
import classNames from "classnames";

import { AppContext } from "../../context/Context";
import ChangeFortuneModal from "./ChangeFortuneModal";

const FortuneButton = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleClick = (event) => {
    const id = event.target.id;

    switch (id) {
      case "getFortune":
        return dispatch({
          type: "UPDATE_FORTUNE",
        });

      case "changeFortune":
        return dispatch({
          type: "SHOW_MODAL",
          payload: (
            <ChangeFortuneModal
              status="IS_EDITING"
              fortune={state?.todaysFortune}
            />
          ),
        });

      default:
        break;
    }
  };

  if (!state?.todaysFortune) {
    // No fortune yet
    return (
      <button
        className={classNames(
          "button button__get-fortune is-primary is-medium",
          {
            "is-loading": !state?.fortunes?.length,
          }
        )}
        id="getFortune"
        onClick={handleClick}
      >
        What's my fortune?
      </button>
    );
  } else {
    // They already have one, so next steps
    return (
      <div className="buttons are-medium is-large is-centered">
        <button
          className="button is-primary"
          id="getFortune"
          onClick={handleClick}
        >
          Have another
        </button>
        <button
          className="button is-warning"
          id="changeFortune"
          onClick={handleClick}
        >
          Change this fortune
        </button>
      </div>
    );
  }
};

export default FortuneButton;
