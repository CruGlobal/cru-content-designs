import "./Separator.css";

export const Separator = ({
  className = "", // string
  color = "yellow", // string - "yellow" | "gray-dark" | "gray-medium" | "gray-light" | "white"
}) => {
  const classes = className !== "" ? " " + className : className;
  const colorClass = color ? " cru-separator-" + color : "";

  return (
    <div className={"separator cru-separator" + colorClass + classes}>
      <div class="cmp-separator">
        <hr class="cmp-separator__horizontal-rule" />
      </div>
    </div>
  );
};

export const SeparatorExamples = () => {
  return (
    <>
      <Separator />
      <Separator color="gary-dark" />
      <Separator color="gray-medium" />
      <Separator color="gray-light" />
      <Separator color="white" />
      <Separator color="yellow" />
    </>
  );
};
