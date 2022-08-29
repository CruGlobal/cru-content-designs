// Based on v1
// https://www.aemcomponents.dev/content/core-components-examples/library/core-content/tabs.html
// https://github.com/adobe/aem-core-wcm-components/blob/main/content/src/content/jcr_root/apps/core/wcm/components/tabs/v1/tabs/tabs.html

import { ComponentWrapper } from "../shared";
import "./Tabs.css";

export const Tabs = ({
  className = "", // string
  content = [], // array of objects with `tab` and `content` keys, each key containing a string
  dot = false, // bool
}) => {
  if (content.length === 0) return null;

  return (
    <ComponentWrapper
      type="tabs"
      className={`${dot ? "cru-tabs-dot " : ""}${className}`}
    >
      <ol className="cmp-tabs__tablist">
        {content.map((tab, index) => {
          return (
            <li
              className={`cmp-tabs__tab${
                index === 0 ? " cmp-tabs__tab--active" : ""
              }`}
              key={index}
            >
              {tab.label}
            </li>
          );
        })}
      </ol>
      {content.map((tabpanel, index) => {
        return (
          <div
            className={`cmp-tabs__tabpanel${
              index === 0 ? " cmp-tabs__tabpanel--active" : ""
            }`}
            key={index}
          >
            <p>{tabpanel.content}</p>
          </div>
        );
      })}
    </ComponentWrapper>
  );
};

export const TabsExamples = () => {
  const content = [
    {
      label: "Tab 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue quisque egestas. Varius morbi enim nunc faucibus a pellentesque. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.",
    },
    {
      label: "Tab 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue quisque egestas. Varius morbi enim nunc faucibus a pellentesque. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.",
    },
    {
      label: "Tab 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue quisque egestas. Varius morbi enim nunc faucibus a pellentesque. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.",
    },
  ];

  return (
    <>
      <Tabs content={content} />
      <Tabs content={content} dot />
    </>
  );
};
