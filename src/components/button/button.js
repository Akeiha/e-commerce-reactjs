import "./button.scss";

export function Button({ children, variant, disabled }) {
  let buttonClass = "";

  if (variant === "button") {
    buttonClass = "button";
  }

  if (variant === "bigButton") {
    buttonClass = "button button__big";
  }

  return (
    <button className={buttonClass} disabled={disabled}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: "button",
};
