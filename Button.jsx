import React from "react";

const Button = (props) => {
  const { children, outline, className, ...rest } = props;

  // const classNames = clsx(
  //   {
  //     btn: true,
  //     "btn-default": !outline,
  //     "btn-outline": outline,
  //   },
  //   className
  // );
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
