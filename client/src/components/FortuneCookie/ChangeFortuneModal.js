import React, { useContext, useState } from "react";
import classNames from "classnames";

import { AppContext } from "../../context/Context";

import { updateFortune } from "../../api/requests";

const ChangeFortuneModal = ({ fortune }) => {
  const { dispatch } = useContext(AppContext);
  const [textarea, setTextarea] = useState(fortune?.notes);
  const [request, setRequest] = useState({
    status: "IS_EDITING",
    errorMessage: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    setTextarea(value);
  };

  const handleSave = async () => {
    setLoading(true);
    setRequest({ ...request, errorMessage: null });

    if (textarea === fortune?.notes) {
      setRequest({
        status: "IS_ERROR",
        errorMessage: "Did not detect changes. Make sure you edited the text.",
      });
      setLoading(false);
    } else {
      const config = {
        id: fortune?.id,
        body: {
          notes: textarea,
        },
      };

      try {
        const newFortune = await updateFortune(config);
        dispatch({
          type: "UPDATE_FORTUNE",
          payload: newFortune,
        });
        setLoading(false);
        setRequest({ status: "IS_SUCCESS" });
      } catch (error) {
        setLoading(false);
        setRequest({
          request: "IS_ERROR",
          errorMessage: "Something went wrong. Please try again.",
        });
        console.error(error);
      }
    }
  };

  const handleCloseModal = () => {
    dispatch({
      type: "HIDE_MODAL",
    });
  };

  switch (request?.status) {
    case "IS_EDITING":
    case "IS_ERROR":
    default:
      return (
        <div className="box has-text-centered">
          <h3 className="heading is-size-2" htmlFor="newFortune">
            Dictate your fate
          </h3>
          <p>Not satisfied with this fortune? Improve it by editing below.</p>
          <textarea
            name="newFortune"
            className="textarea is-medium my-3"
            rows={3}
            onChange={handleChange}
            value={textarea}
          ></textarea>

          {!!request?.errorMessage ? (
            <div className="notification is-warning is-light is-small p-3 my-2">
              {request?.errorMessage}
            </div>
          ) : null}

          <div className="buttons is-centered mt-5">
            <button
              className={classNames("button is-primary", {
                "is-loading": loading,
              })}
              onClick={handleSave}
            >
              Save
            </button>

            <button
              className={classNames("button is-warning")}
              disabled={loading}
              onClick={handleCloseModal}
            >
              Cancel
            </button>
          </div>
        </div>
      );

    case "IS_SUCCESS":
      return (
        <div className="box has-text-centered">
          <h3 className="heading is-size-1">Success</h3>
          <div className="notification is-warning is-light is-small p-3 my-2">
            Fortune changed as desired.
          </div>
          <button
            className={classNames("button is-primary")}
            disabled={loading}
            onClick={handleCloseModal}
          >
            OK
          </button>
        </div>
      );
  }
};

export default ChangeFortuneModal;
