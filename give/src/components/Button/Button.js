import "./Button.css";

const ButtonType = ({ href, children }) => {
  return href !== "" ? (
    <a class="cmp-button" href={href}>
      {children}
    </a>
  ) : (
    <button class="cmp-button">{children}</button>
  );
};

export const Button = ({
  className = "", // string
  type = "standard", // string - "standard" | "combo" | "dot" | "tag"
  style = "solid", // string = "solid" | "outline"
  text = "Button", // string
  href = "", // string - URL
  icon = "",
}) => {
  const classes = className !== "" ? " " + className : className;
  const typeClass = " cru-button-" + type;
  const styleClass = " cru-button-" + style;

  return (
    <>
      <div class={"button" + typeClass + styleClass + classes}>
        <ButtonType href={href}>
          <span class="cmp-button__text">{text}</span>
        </ButtonType>
      </div>
    </>
  );
};

export const ButtonExamples = () => {
  return (
    <>
      <Button text="Google" href="https://google.com" />
      <Button text="Facebook" href="https://facebook.com" />
      <Button text="Twitter" href="https://twitter.com" />
      <Button text="Cru" href="https://cru.org" />
      <Button text="Button that doesn't do anything" />
    </>
  );
};
