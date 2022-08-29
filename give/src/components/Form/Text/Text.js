// Based on v2
// https://www.aemcomponents.dev/content/core-components-examples/library/core-form/form-text.html
// https://github.com/adobe/aem-core-wcm-components/blob/main/content/src/content/jcr_root/apps/core/wcm/components/form/text/v2/text/text.html

import { ComponentWrapper } from "../../shared";
import "./Text.css";

export const Text = ({
  className = "", // string
  constraint = "text", // string - "text" | "textarea" | "email" | "tel" | "date" | "number" | "password"
  textLines = 2, // int
  label = "Label", // string
  hideLabel = false, // bool
  elementName = "", //string
  value = "", // string
  helpMessage = "", // string
  helpAsPlaceholder = false, // bool
  constraintMessage = "", // string
  required = false, // bool
  requiredMessage = "", // string
  readOnly = false, // bool
  disabled = false, // bool
  id = "", // string
}) => {
  const constraints = [
    "text",
    "textarea",
    "email",
    "tel",
    "date",
    "number",
    "password",
  ];

  if (!constraints.includes(constraint)) return null;

  const sharedAttrs = {
    id: id ? "form-text-" + id : id,
    placeholder: helpMessage && helpAsPlaceholder ? helpMessage : "",
    name: elementName,
    defaultValue: value,
    readOnly: readOnly,
    required: required,
    disabled: disabled,
  };

  const textarea = (textLines, sharedAttrs) => (
    <textarea
      className="cmp-form-text__textarea"
      rows={textLines}
      {...sharedAttrs}
    ></textarea>
  );

  const input = (constraint, sharedAttrs) => (
    <input className="cmp-form-text__text" type={constraint} {...sharedAttrs} />
  );

  return (
    <ComponentWrapper
      type="form-text"
      wrapperClass="text"
      className={className}
      data-cmp-constraint-message={constraintMessage}
      data-cmp-required-message={requiredMessage}
    >
      {label && !hideLabel && <label htmlFor={sharedAttrs.id}>{label}</label>}
      {!helpAsPlaceholder && helpMessage && (
        <p id={`${id}-helpMessage`} className="cmp-form-text__help-block">
          {helpMessage}
        </p>
      )}
      {constraint === "textarea"
        ? textarea(textLines, sharedAttrs)
        : input(constraint, sharedAttrs)}
    </ComponentWrapper>
  );
};

export const TextExamples = () => {
  return (
    <>
      <Text
        label="Name"
        helpMessage="Please enter your name"
        helpAsPlaceholder
        elementName="firstName"
        id="991299145"
      />
      <Text
        label="Email"
        constraint="email"
        helpMessage="Please enter your email"
        helpAsPlaceholder
        elementName="email"
        id="2014401237"
        required
      />
      <Text
        label="Message"
        constraint="textarea"
        helpMessage="Please enter your message"
        helpAsPlaceholder
        elementName="textarea"
        id="1948726228"
        rows="2"
      />
      <Text
        label="Phone Number"
        constraint="tel"
        helpMessage="+44 87 299 777 22"
        helpAsPlaceholder
        elementName="phonenumber"
        id="1329437060"
      />
      <Text
        label="Date"
        constraint="date"
        helpMessage="01.01.2020"
        helpAsPlaceholder
        elementName="date"
        id="1343522562"
      />
      <Text
        label="Favorite number"
        constraint="number"
        elementName="favoritenumber"
        id="18445995110"
      />
      <Text
        label="Set Password"
        constraint="password"
        helpMessage="password"
        helpAsPlaceholder
        elementName="pw"
        value="12345"
        id="1421884385"
        required
      />
      <Text
        label="Confirm"
        constraint="password"
        helpMessage="password"
        helpAsPlaceholder
        elementName="confirmpw"
        id="1128578176"
        required
      />
    </>
  );
};
