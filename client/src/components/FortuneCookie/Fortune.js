import React, { useContext } from "react";
import { AppContext } from "../../context/Context";

const Fortune = () => {
  const { state } = useContext(AppContext);
  if (state?.todaysFortune) {
    return (
      <center>
        <div className="box is-size-4 my-4 box__fortune">
          {state?.todaysFortune?.notes}
        </div>
      </center>
    );
  } else return null;
};

export default Fortune;
