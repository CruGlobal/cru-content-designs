// Based on v1
// https://www.aemcomponents.dev/content/core-components-examples/library/core-content/separator.html
// https://github.com/adobe/aem-core-wcm-components/blob/main/content/src/content/jcr_root/apps/core/wcm/components/separator/v1/separator/separator.html

import { ComponentWrapper } from "../shared";
import "./Separator.css";

export const Separator = ({
  className = "", // string
  color = "", // string - "yellow" | "gray-dark" | "gray-medium" | "gray-light" | "white"
}) => {
  const colors = ["yellow", "gray-dark", "gray-medium", "gray-light", "white"];
  const colorClass = `cru-separator-${
    colors.includes(color) ? color : colors[1]
  }`;

  return (
    <ComponentWrapper type="separator" className={`${colorClass} ${className}`}>
      <hr className="cmp-separator__horizontal-rule" />
    </ComponentWrapper>
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
