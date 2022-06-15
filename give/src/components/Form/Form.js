import { TextExamples } from "./Text/Text";
// import { OptionsExamples } from "./Options/Options";

export const Form = ({
  className = "", // string
  underline = false, // bool
  dark = false, // bool
  children,
}) => {
  if (!children) return null;

  const classes = className !== "" ? " " + className : className;
  const underlineClass = underline ? " cru-form--underlined" : "";
  const darkClass = dark ? " cru-form--dark" : "";

  return (
    <div
      className={"container cru-form" + underlineClass + darkClass + classes}
    >
      <form className="cmp-form">{children}</form>
    </div>
  );
};

export const FormExamples = () => {
  return (
    <>
      <Form>
        <TextExamples />
        {/* <OptionsExamples /> */}
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
