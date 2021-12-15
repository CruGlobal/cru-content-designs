import "./Title.css";

export const Title = ({
  className = "", // string
  type = "h2", // string = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  size = "md", // string - "xxl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs"
  children,
}) => {
  if (!children) return null;

  const classes = className !== "" ? " " + className : className;
  const sizeClass = size !== "" ? " cru-title-" + size : size;

  let heading = "";
  if (type === "h1") heading = <h1 className="cmp-title__text">{children}</h1>;
  else if (type === "h2")
    heading = <h2 className="cmp-title__text">{children}</h2>;
  else if (type === "h3")
    heading = <h3 className="cmp-title__text">{children}</h3>;
  else if (type === "h4")
    heading = <h4 className="cmp-title__text">{children}</h4>;
  else if (type === "h5")
    heading = <h5 className="cmp-title__text">{children}</h5>;
  else if (type === "h6")
    heading = <h6 className="cmp-title__text">{children}</h6>;
  else heading = <h2 className="cmp-title__text">{children}</h2>;

  return (
    <div className={"title cru-title" + sizeClass + classes}>
      <div className="cmp-title">{heading}</div>
    </div>
  );
};

export const TitleExamples = () => {
  return (
    <>
      <Title size="xxl" type="h1">
        Heading XXL
      </Title>
      <Title size="xl" type="h2">
        Heading XL
      </Title>
      <Title size="lg" type="h3">
        Heading LG
      </Title>
      <Title size="md" type="h4">
        Heading MD
      </Title>
      <Title size="sm" type="h5">
        Heading SM
      </Title>
      <Title size="xs" type="h6">
        Heading XS
      </Title>
      <Title size="xxs">Heading XXS</Title>
    </>
  );
};
