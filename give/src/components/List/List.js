// Based on v3
// https://www.aemcomponents.dev/content/core-components-examples/library/core-content/list.html
// https://github.com/adobe/aem-core-wcm-components/tree/main/content/src/content/jcr_root/apps/core/wcm/components/list/v3/list

import { ComponentWrapper, LinkWrapper } from "../shared";
import { Teaser } from "../Teaser/Teaser";
import "./List.css";

const ListItems = ({ items, linked, teaser }) => {
  if (items.length === 0) return null;

  return items.map((item) => (
    <li className="cmp-list__item" key={item.title}>
      {!teaser && (
        <>
          <LinkWrapper
            href={linked && item.href}
            className="cmp-list__item-link"
          >
            <span className="cmp-list__item-title">{item.title}</span>
            <span className="cmp-list__item-date">{item.date}</span>
          </LinkWrapper>
          <span className="cmp-list__item-description">{item.desc}</span>
        </>
      )}
      {teaser && (
        <Teaser
          title={item.title}
          desc={item.desc}
          link={linked && item.href}
          hideWrapper
          fromList
        />
      )}
    </li>
  ));
};

export const List = ({
  className = "", // string
  items = [], // array of objects with `title`, `date`, `desc`, and `href` keys, each key containing a string
  spaced = false, // bool
  linked = false, // bool
  teaser = false, // bool
}) => {
  if (items.length === 0) return null;

  const spacedClass = spaced ? "cru-list-extra-spacing" : "";

  return (
    <ComponentWrapper type="list" className={`${spacedClass} ${className}`}>
      <ListItems items={items} linked={linked} teaser={teaser} />
    </ComponentWrapper>
  );
};

export const ListExamples = () => {
  const content = [
    {
      title: "Item 1",
      date: "Dec. 25th",
      desc: "Description 1",
      href: "https://google.com",
    },
    {
      title: "Item 2",
      date: "Dec. 30th",
      desc: "Description 2",
      href: "https://facebook.com",
    },
    {
      title: "Item 3",
      date: "Jan. 1st",
      desc: "Description 3",
      href: "https://twitter.com",
    },
  ];

  return (
    <>
      <List items={content}></List>
      <List items={content} linked></List>
      <List items={content} spaced></List>
      <List items={content} teaser></List>
      <List items={content} teaser linked></List>
    </>
  );
};
