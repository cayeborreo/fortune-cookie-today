import React from "react";
import classNames from "classnames";

const Container = ({
  mobile = 12,
  tablet = 10,
  desktop = 8,
  fullhd = 6,
  children,
  className,
}) => {
  return (
    <div
      className={classNames("columns is-centered is-mobile px-1", {
        [className]: className,
      })}
    >
      <div
        className={`column is-${mobile}-mobile is-${tablet}-tablet is-${desktop}-desktop is-${fullhd}-fullhd`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
