import "./button.scss";

export function Button({ children, variant, disabled, onClick }) {
  let buttonClass = "";

  if (variant === "button") {
    buttonClass = "button";
  }

  if (variant === "bigButton") {
    buttonClass = "button button__big";
  }

  return (
    <button className={buttonClass} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: "button",
};
