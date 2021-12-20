import "./Text.css";

export const Text = ({
  className = "", // string
  constraint = "text", // string - "text" | "textarea" | "email" | "tel" | "date" | "number" | "password"
  lines = 1, // int
  label = "Label", // string
  hideLabel = false, // bool
  name = "", //string
  value = "", // string
  help = "", // string
  placeholder = false, // bool
  required = false, // bool
  requiredMessage = "", // string
  readonly = false, // bool
  error = false, // bool
  id = "", // string
}) => {
  const classes = className !== "" ? " " + className : className;
  const isTextarea = constraint === "textarea" ? true : false;
  const placeholderText = help && placeholder === true ? help : "";

  return (
    <div className={"text" + classes}>
      <div
        className="cmp-form-text"
        data-cmp-required-message={requiredMessage}
      >
        {hideLabel === false ? <label htmlFor={id}>{label}</label> : null}
        {help !== "" && placeholder === false ? (
          <p className="cmp-form-text__help-block">{help}</p>
        ) : null}
        {isTextarea ? (
          <textarea
            className="cmp-form-text__textarea"
            placeholder={placeholderText}
            id={id}
            name={name}
            value={value}
            rows={lines}
            required={required}
            readOnly={readonly}
          ></textarea>
        ) : (
          <input
            className="cmp-form-text__text"
            type={constraint}
            placeholder={placeholderText}
            id={id}
            name={name}
            value={value}
            required={required}
            readOnly={readonly}
          />
        )}
      </div>
    </div>
  );
};

export const TextExamples = () => {
  return (
    <>
      <Text label="Text input label" required readonly />
    </>
  );
};
