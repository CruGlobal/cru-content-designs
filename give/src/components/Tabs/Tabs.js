import "./Tabs.css";

export const Tabs = ({
  className = "", // string
  content = [], // array of objects with `tab` and `content` keys, each key containing a string
  dot = false, // bool
}) => {
  if (content.length === 0) return null;

  const classes = className !== "" ? " " + className : className;
  const dotClass = dot ? " cru-tabs-dot" : "";

  return (
    <div className={"tabs cru-tabs" + dotClass + classes}>
      <div className="cmp-tabs">
        <ol className="cmp-tabs__tablist">
          {content.map((tab, index) => {
            let active = index === 0 ? " cmp-tabs__tab--active" : "";
            return (
              <li className={"cmp-tabs__tab" + active} key={tab.tab}>
                {tab.tab}
              </li>
            );
          })}
        </ol>
        {content.map((tabpanel, index) => {
          let active = index === 0 ? " cmp-tabs__tabpanel--active" : "";
          return (
            <div className={"cmp-tabs__tabpanel" + active} key={index}>
              <p>{tabpanel.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const TabsExamples = () => {
  const content = [
    {
      tab: "Tab 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue quisque egestas. Varius morbi enim nunc faucibus a pellentesque. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.",
    },
    {
      tab: "Tab 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue quisque egestas. Varius morbi enim nunc faucibus a pellentesque. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.",
    },
    {
      tab: "Tab 3",
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
