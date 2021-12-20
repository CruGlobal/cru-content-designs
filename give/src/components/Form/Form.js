import { TextExamples } from "./Text/Text";

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
      </Form>
      {/* <Form underline>
        <TextExamples />
      </Form>
      <Form dark>
        <TextExamples />
      </Form>
      <Form underline dark>
        <TextExamples />
      </Form> */}
    </>
  );
};
