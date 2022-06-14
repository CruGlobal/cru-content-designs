import { ComponentWrapper } from "./shared";
// import "./Component.css"; // Import component stylesheet

export const Component = ({
  className = "", // string
  children,
}) => {
  if (!children) return null; // Condition for rendering nothing

  return (
    <ComponentWrapper type="test" className={className}>
      {children}
    </ComponentWrapper>
  );
};

export const ComponentExamples = () => {
  return (
    <>
      <Component className="someClass">
        <p>
          This is a simple component to be used as a template for building out
          larger components.
        </p>
      </Component>
    </>
  );
};
