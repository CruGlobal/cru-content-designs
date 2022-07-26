// Based on v2
// https://www.aemcomponents.dev/content/core-components-examples/library/core-content/button.html
// https://github.com/adobe/aem-core-wcm-components/tree/main/content/src/content/jcr_root/apps/core/wcm/components/button/v2/button

import { ComponentWrapper } from "../shared";
import "./Button.css";

export const Button = ({
  className, // string
  id, // string
  href, // string - URL
  icon, // string
  children,
}) => {
  if (!children) return null;

  const DynamicButtonTag = href ? "a" : "button";

  return (
    <ComponentWrapper type="button" className={className} hideInner>
      <DynamicButtonTag
        className="cmp-button"
        href={href ? href : null}
        type={!href ? "button" : null}
        id={id}
      >
        {icon && (
          <span className={"cmp-button__icon cmp-button__icon--" + icon}></span>
        )}
        {children && <span className="cmp-button__text">{children}</span>}
      </DynamicButtonTag>
    </ComponentWrapper>
  );
};

export const ButtonExamples = () => {
  return (
    <>
      <p>
        Buttons were so customized that there isn't much styling left after
        taking out the additional classes.
      </p>
      <Button id="testButton" icon="arrow_forward">
        Test Button
      </Button>
      <Button href="https://google.com" id="testAnchor" icon="shopping_cart">
        Anchor Button
      </Button>
    </>
  );
};
