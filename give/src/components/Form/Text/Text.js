import "./Text.css";

export const Text = ({
  className = "", // string
  constraint = "text", // string - "text" | "textarea" | "email" | "tel" | "date" | "number" | "password"
  lines = 2, // int
  label = "Label", // string
  hideLabel = false, // bool
  name = "", //string
  value = "", // string
  help = "", // string
  placeholder = false, // bool
  required = false, // bool
  requiredMessage = "", // string
  readonly = false, // bool
  disabled = false, // bool
  id = "", // string
}) => {
  const classes = className !== "" ? " " + className : className;
  const isTextarea = constraint === "textarea" ? true : false;
  const placeholderText = help && placeholder === true ? help : null;
  const props = {
    placeholder: placeholderText,
    id: id ? id : null,
    name: name ? name : null,
    value: value,
    required: required,
    readOnly: readonly,
    disabled: disabled ? disabled : null,
  };

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
            rows={lines}
            {...props}
          ></textarea>
        ) : (
          <input className="cmp-form-text__text" type={constraint} {...props} />
        )}
      </div>
    </div>
  );
};

export const TextExamples = () => {
  return (
    <>
      <Text label="Text" required />
      <Text label="Textarea" constraint="textarea" readonly />
      <Text label="Email" constraint="email" disabled />
      <Text label="Telephone" constraint="tel" help="Helper text" />
      <Text label="Date" constraint="date" />
      <Text label="Number" constraint="number" help="12345" placeholder />
      <Text label="Password" constraint="password" value="password" />
    </>
  );
};
