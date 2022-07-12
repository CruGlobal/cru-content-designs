// Based on v2
// https://www.aemcomponents.dev/content/core-components-examples/library/core-form/form-options.html
// https://github.com/adobe/aem-core-wcm-components/blob/main/content/src/content/jcr_root/apps/core/wcm/components/form/options/v2/options/options.html

import { ComponentWrapper } from "../../shared";
import "./Options.css";

export const Options = ({
  className = "", // string
  type, // string
  title, // string
  name, // string
  helpMessage = "", // string
  id, // string
  options, // array of objects {text, value, selected, disabled}
}) => {
  const types = ["checkbox", "radio", "drop-down", "multi-drop-down"];

  if (!types.includes(type) || options.length === 0) return null;

  const isCheckbox = type === "checkbox";
  const isRadio = type === "radio";
  const isSelect = type === "drop-down";
  const isMultiSelect = type === "multi-drop-down";

  const selectValues = () => {
    const values = options.flatMap((option) => {
      return option.selected ? option.value : [];
    });

    return isSelect ? values.pop() : values;
  };

  return (
    <ComponentWrapper
      type="form-options"
      wrapperClass="options"
      className={className}
      hideInner
    >
      <fieldset className={`cmp-form-options cmp-form-options--${type}`}>
        {(isCheckbox || isRadio) && (
          <>
            <legend className="cmp-form-options__legend">{title}</legend>
            {options.map((option) => (
              <label
                className="cmp-form-options__field-label"
                key={option.text}
              >
                <input
                  className={`cmp-form-options__field cmp-form-options__field--${type}`}
                  name={name}
                  value={option.value}
                  defaultChecked={option.selected}
                  disabled={option.disabled}
                  type={type}
                />
                <span className="cmp-form-options__field-description">
                  {option.text}
                </span>
              </label>
            ))}
          </>
        )}
        {(isSelect || isMultiSelect) && (
          <>
            <label className="cmp-form-options__label" htmlFor={id}>
              {title}
            </label>
            <select
              className={`cmp-form-options__field cmp-form-options__field--${type}`}
              name={name}
              id={id}
              multiple={isMultiSelect}
              defaultValue={selectValues()}
            >
              {options.map((option) => (
                <option
                  value={option.value}
                  disabled={option.disabled}
                  key={option.text}
                >
                  {option.text}
                </option>
              ))}
            </select>
          </>
        )}
        {helpMessage && (
          <p
            id={`${id}--helpMessage`}
            className="cmp-form-options__help-message"
          >
            {helpMessage}
          </p>
        )}
      </fieldset>
    </ComponentWrapper>
  );
};

export const OptionsExamples = () => {
  const options = [
    {
      text: "I like red!",
      value: "red",
      selected: false,
      disabled: false,
    },
    {
      text: "I like blue!",
      value: "blue",
      selected: true,
      disabled: false,
    },
    {
      text: "I like yellow!",
      value: "yellow",
      selected: true,
      disabled: false,
    },
    {
      text: "I like black!",
      value: "black",
      selected: false,
      disabled: true,
    },
  ];

  return (
    <>
      <Options
        type="checkbox"
        title="Favorite Colors"
        name="favorite-colors"
        helpMessage="Pick as many as you want!"
        id="123456789"
        options={options}
      />
      <Options
        type="radio"
        title="Favorite Color"
        name="favorite-color"
        helpMessage="You can only choose one."
        id="123456789"
        options={options}
      />
      <Options
        type="drop-down"
        title="Favorite Color"
        name="favorite-color"
        helpMessage="You can only choose one."
        id="123456789"
        options={options}
      />
      <Options
        type="multi-drop-down"
        title="Favorite Colors"
        name="favorite-colors"
        helpMessage="Pick as many as you want!"
        id="123456789"
        options={options}
      />
    </>
  );
};
