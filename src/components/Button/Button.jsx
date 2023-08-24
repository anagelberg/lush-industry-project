import "./Button.scss";

function Button({ modifier, text, icon, ...buttonAttributes }) {
  return (
    <button
      className={icon ? `btn btn${modifier} btn--icon` : `btn btn${modifier}`}
      {...buttonAttributes}
    >
      {icon && <img className="btn__icon" src={icon} alt="btn icon"></img>}
      <div className={icon && "btn__text-hide"}>{text}</div>
    </button>
  );
}

export default Button;
