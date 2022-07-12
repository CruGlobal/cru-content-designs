// Based on v2
// https://www.aemcomponents.dev/content/core-components-examples/library/core-form/form-button.html
// https://github.com/adobe/aem-core-wcm-components/blob/main/content/src/content/jcr_root/apps/core/wcm/components/form/button/v2/button/button.html

import { ComponentWrapper } from "../../shared";

export const Button = ({
  className = "", // string
  type = "button", // string - "button" | "submit"
  title = "", // string
  name = "", // string
  value = "", // string
  id = "", // string
}) => {
  const types = ["button", "submit"];

  if (!types.includes(type)) return null;

  return (
    <ComponentWrapper type="button" className={className} hideInner>
      <button
        type={type}
        id={id ? id : null}
        className="cmp-form-button"
        name={name ? name : null}
        value={value ? value : null}
      >
        {title ? title : type === "button" ? "Button" : "Submit"}
      </button>
    </ComponentWrapper>
  );
};

export const ButtonExamples = () => {
  return (
    <>
      <Button />
      <Button type="submit" />
    </>
  );
};
