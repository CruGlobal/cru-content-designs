import "./Options.css";

const BoxOption = ({ type, value, children, ...other }) => {
  return (
    <label className="cmp-form-options__field-label">
      <input
        className={"cmp-form-options__field cmp-form-options__field--" + type}
        type={type}
        value={value}
        {...other}
      />
      <span className="cmp-form-options__field-description">{children}</span>
    </label>
  );
};

const Options = ({
  className = "", // string
  title = "", // string
  help = "", // string
  inline = false, // bool
  children,
}) => {
  const classes = className !== "" ? " " + className : className;
  const inlineClass = inline ? " cru-form-options--inline" : "";

  return (
    <div className={"options" + inlineClass + classes}>
      <fieldset className="cmp-form-options cmp-form-options--<?= $type ?>">
        <legend className="cmp-form-options__legend">{title}</legend>
        {children}
        {help ? (
          <p className="cmp-form-options__help-message">Help text.</p>
        ) : null}
      </fieldset>
    </div>
  );
};

export const Select = () => {
  return <p>Howdy select</p>;
};

export const OptionsExamples = () => {
  return (
    <>
      <Options title="Checkboxes" inline>
        <BoxOption type="checkbox" name="name1" checked>
          Option 1
        </BoxOption>
        <BoxOption type="checkbox">Option 2</BoxOption>
        <BoxOption type="checkbox" disabled>
          Option 3
        </BoxOption>
      </Options>
      <Options title="Radio buttons">
        <BoxOption type="radio" name="radio1" checked>
          Option 1
        </BoxOption>
        <BoxOption type="radio" name="radio2">
          Option 2
        </BoxOption>
        <BoxOption type="radio" name="radio3" disabled>
          Option 3
        </BoxOption>
      </Options>
      {/* <Select /> */}
    </>
  );
};
