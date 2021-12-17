import "./Button.css";

const ButtonType = ({ href, children }) => {
  return href !== "" ? (
    <a className="cmp-button" href={href}>
      {children}
    </a>
  ) : (
    <button className="cmp-button">{children}</button>
  );
};

const ButtonIcon = ({ icon }) => {
  if (!icon) return null;

  return <span className={"cmp-button__icon cmp-button__icon--" + icon}></span>;
};

export const Button = ({
  className = "", // string
  text = "", // string
  href = "", // string - URL
  type = "", // string - "standard" | "combo" | "dot" | "tag"
  styling = "", // string - "solid" | "outline"
  color = "", // string - various
  textColor = "", // string - for combo type only
  icon = "", // string
  shadow = false, // bool - for combo and dot types only
  disabled = false, // bool
}) => {
  const classes = className !== "" ? " " + className : className;
  const typeClass = " cru-button-" + type;
  const stylingClass = " cru-button-" + styling;
  const colorClass = " cru-button-" + color;
  const textColorClass = " cru-button-" + textColor;
  const shadowClass = shadow ? " cru-button-shadow" : "";
  const disabledClass = disabled ? " disabled" : "";

  return (
    <>
      <div
        className={
          "button" +
          typeClass +
          stylingClass +
          colorClass +
          textColorClass +
          shadowClass +
          disabledClass +
          classes
        }
      >
        <ButtonType href={href}>
          {text !== "" ? (
            <span className="cmp-button__text">{text}</span>
          ) : null}
          <ButtonIcon icon={icon} />
        </ButtonType>
      </div>
    </>
  );
};

export const ButtonExamples = () => {
  const Buttons = ({ text, type, styling, color, textColor, shadow, icon }) => {
    let isStandard = false;
    let isTag = false;

    if (type === "standard") {
      isStandard = true;
    } else if (type === "tag") {
      isTag = true;
    }

    return (
      <>
        {isStandard || isTag ? (
          <Button
            text={text}
            type={type}
            styling={styling}
            color={color}
            textColor={textColor}
            shadow={shadow}
          />
        ) : null}
        <Button
          text={text}
          type={type}
          styling={styling}
          color={color}
          textColor={textColor}
          icon={icon}
          shadow={shadow}
        />
        {isStandard || isTag ? (
          <Button
            text={text ? text + " (disabled)" : null}
            type={type}
            styling={styling}
            color={color}
            textColor={textColor}
            shadow={shadow}
            disabled
          />
        ) : null}
        <Button
          text={text ? text + " (disabled)" : null}
          type={type}
          styling={styling}
          color={color}
          textColor={textColor}
          icon={icon}
          shadow={shadow}
          disabled
        />
      </>
    );
  };

  return (
    <>
      <h2 style={{ clear: "both" }}>Standard solid buttons</h2>
      <div>
        <Buttons
          text="Yellow/Gray"
          type="standard"
          styling="solid"
          color="yellow-gray"
          icon="shopping_cart"
        />
        <Buttons
          text="Gray/White"
          type="standard"
          styling="solid"
          color="gray-white"
          icon="shopping_cart"
        />
        <Buttons
          text="White/Gray"
          type="standard"
          styling="solid"
          color="white-gray"
          icon="shopping_cart"
        />
      </div>

      <h2 style={{ clear: "both" }}>Standard outline buttons</h2>
      <div>
        <Buttons
          text="Yellow/Gray"
          type="standard"
          styling="outline"
          color="yellow-gray"
          icon="shopping_cart"
        />
        <Buttons
          text="Yellow/White"
          type="standard"
          styling="outline"
          color="yellow-white"
          icon="shopping_cart"
        />
        <Buttons
          text="Gray/Gray"
          type="standard"
          styling="outline"
          color="gray-gray"
          icon="shopping_cart"
        />
        <Buttons
          text="White/White"
          type="standard"
          styling="outline"
          color="white-white"
          icon="shopping_cart"
        />
      </div>

      <h2 style={{ clear: "both" }}>Combo solid buttons /w shadow</h2>
      <div>
        <Buttons
          text="Gray/Yellow/Gray"
          type="combo"
          styling="solid"
          color="yellow-gray"
          textColor="gray-text"
          icon="arrow_forward"
          shadow
        />
        <Buttons
          text="White/Yellow/Gray"
          type="combo"
          styling="solid"
          color="yellow-gray"
          textColor="white-text"
          icon="arrow_forward"
          shadow
        />
        <Buttons
          text="Gray/Gray/White"
          type="combo"
          styling="solid"
          color="gray-white"
          textColor="gray-text"
          icon="arrow_forward"
          shadow
        />
        <Buttons
          text="White/Gray/White"
          type="combo"
          styling="solid"
          color="gray-white"
          textColor="white-text"
          icon="arrow_forward"
          shadow
        />
      </div>

      <h2 style={{ clear: "both" }}>Combo solid buttons</h2>
      <div>
        <Buttons
          text="Gray/Yellow/Gray"
          type="combo"
          styling="solid"
          color="yellow-gray"
          textColor="gray-text"
          icon="arrow_forward"
        />
        <Buttons
          text="White/Yellow/Gray"
          type="combo"
          styling="solid"
          color="yellow-gray"
          textColor="white-text"
          icon="arrow_forward"
        />
        <Buttons
          text="Gray/Gray/White"
          type="combo"
          styling="solid"
          color="gray-white"
          textColor="gray-text"
          icon="arrow_forward"
        />
        <Buttons
          text="White/Gray/White"
          type="combo"
          styling="solid"
          color="gray-white"
          textColor="white-text"
          icon="arrow_forward"
        />
      </div>

      <h2 style={{ clear: "both" }}>Combo outline buttons</h2>
      <div>
        <Buttons
          text="Gray/Yellow/Yellow"
          type="combo"
          styling="outline"
          color="yellow-yellow"
          textColor="gray-text"
          icon="arrow_forward"
        />
        <Buttons
          text="White/Yellow/Yellow"
          type="combo"
          styling="outline"
          color="yellow-yellow"
          textColor="white-text"
          icon="arrow_forward"
        />
        <Buttons
          text="Gray/Gray/Gray"
          type="combo"
          styling="outline"
          color="gray-gray"
          textColor="gray-text"
          icon="arrow_forward"
        />
        <Buttons
          text="White/White/White"
          type="combo"
          styling="outline"
          color="white-white"
          textColor="white-text"
          icon="arrow_forward"
        />
      </div>

      <h2 style={{ clear: "both" }}>Dot solid buttons /w shadow</h2>
      <div>
        <Buttons
          type="dot"
          styling="solid"
          color="yellow-gray"
          icon="arrow_forward"
          shadow
        />
        <Buttons
          type="dot"
          styling="solid"
          color="gray-white"
          icon="arrow_forward"
          shadow
        />
        <Buttons
          type="dot"
          styling="solid"
          color="white-gray"
          icon="arrow_forward"
          shadow
        />
      </div>

      <h2 style={{ clear: "both" }}>Dot solid buttons</h2>
      <div>
        <Buttons
          type="dot"
          styling="solid"
          color="yellow-gray"
          icon="arrow_forward"
        />
        <Buttons
          type="dot"
          styling="solid"
          color="gray-white"
          icon="arrow_forward"
        />
        <Buttons
          type="dot"
          styling="solid"
          color="white-gray"
          icon="arrow_forward"
        />
      </div>

      <h2 style={{ clear: "both" }}>Dot outline buttons</h2>
      <div>
        <Buttons
          type="dot"
          styling="outline"
          color="yellow-yellow"
          icon="arrow_forward"
        />
        <Buttons
          type="dot"
          styling="outline"
          color="gray-gray"
          icon="arrow_forward"
        />
        <Buttons
          type="dot"
          styling="outline"
          color="white-white"
          icon="arrow_forward"
        />
      </div>

      <h2 style={{ clear: "both" }}>Tag solid buttons</h2>
      <div>
        <Buttons
          text="Gray/White"
          type="tag"
          styling="solid"
          color="gray-white"
          icon="cancel"
        />
        <Buttons
          text="White-Gray"
          type="tag"
          styling="solid"
          color="white-gray"
          icon="cancel"
        />
      </div>

      <h2 style={{ clear: "both" }}>Tag outline buttons</h2>
      <div>
        <Buttons
          text="Gray/Gray"
          type="tag"
          styling="outline"
          color="gray-gray"
          icon="cancel"
        />
        <Buttons
          text="White-White"
          type="tag"
          styling="outline"
          color="white-white"
          icon="cancel"
        />
      </div>
    </>
  );
};
