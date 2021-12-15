// import "./Component.css"; // Import component stylesheet

export const Component = ({
  className = "", // string
  str = "Hello world!", // string
  bool = true, // bool
}) => {
  if (!bool) return null; // Condition for rendering nothing

  const classes = className !== "" ? " " + className : className;

  return <p className={classes}>{str}</p>;
};

export const ComponentExamples = () => {
  return (
    <>
      <Component className="randomClass" />
      <Component />
      <Component />
      <Component />
      <Component />
    </>
  );
};
