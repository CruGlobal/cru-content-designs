// Based on v2
// https://github.com/adobe/aem-core-wcm-components/blob/main/content/src/content/jcr_root/apps/core/wcm/components/form/container/v2/container/container.html

import { ComponentWrapper } from "../shared";
import { TextExamples } from "./Text/Text";
import { OptionsExamples } from "./Options/Options";

export const Form = ({
  className = "", // string
  underline = false, // bool
  dark = false, // bool
  children,
}) => {
  if (!children) return null;

  const underlineClass = underline ? "cru-form--underlined" : "";
  const darkClass = dark ? "cru-form--dark" : "";

  return (
    <ComponentWrapper
      type="form"
      wrapperClass="container"
      className={`${underlineClass} ${darkClass} ${className}`}
    >
      {children}
    </ComponentWrapper>
  );
};

const Errors = () => {
  const messages = [
    "Error message!",
    "OMG! Another error!",
    "What am I doing wrong?!",
  ];

  if (messages.length > 0) {
    return (
      <div className="cmp-form-error">
        {messages.map((msg, index) => (
          <p className="cmp-form-error__item" key={index}>
            {msg}
          </p>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export const FormExamples = () => {
  return (
    <>
      <Form>
        <Errors />
        <TextExamples />
        <OptionsExamples />
      </Form>
      {/* <Form underline>
        <TextExamples />
        <OptionsExamples />
      </Form> */}
      {/* <Form dark>
        <TextExamples />
      </Form>
      <Form underline dark>
        <TextExamples />
      </Form> */}
    </>
  );
};
