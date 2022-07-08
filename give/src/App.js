import { BrowserRouter, Link, Outlet, Routes, Route } from "react-router-dom";
import { ComponentExamples } from "./components/ComponentTemplate";
import { AccordionExamples } from "./components/Accordion/Accordion";
import { BreadcrumbExamples } from "./components/Breadcrumb/Breadcrumb";
import { ButtonExamples } from "./components/Button/Button";
import { CarouselExamples } from "./components/Carousel/Carousel";
import { FormExamples } from "./components/Form/Form";
import { ImageExamples } from "./components/Image/Image";
import { ListExamples } from "./components/List/List";
import { SearchExamples } from "./components/Search/Search";
import { SeparatorExamples } from "./components/Separator/Separator";
import { TabsExamples } from "./components/Tabs/Tabs";
import { TeaserExamples } from "./components/Teaser/Teaser";
import { TextExamples } from "./components/Text/Text";
import { TitleExamples } from "./components/Title/Title";

const pages = [
  {
    name: "Home",
    path: "",
    comp: <ComponentExamples />,
  },
  {
    name: "Accordion",
    comp: <AccordionExamples />,
  },
  {
    name: "Breadcrumb",
    comp: <BreadcrumbExamples />,
  },
  {
    name: "Button",
    comp: <ButtonExamples />,
  },
  {
    name: "Carousel",
    comp: <CarouselExamples />,
  },
  {
    name: "Form",
    comp: <FormExamples />,
  },
  {
    name: "Image",
    comp: <ImageExamples />,
  },
  {
    name: "List",
    comp: <ListExamples />,
  },
  {
    name: "Search",
    comp: <SearchExamples />,
  },
  {
    name: "Separator",
    comp: <SeparatorExamples />,
  },
  {
    name: "Tabs",
    comp: <TabsExamples />,
  },
  {
    name: "Teaser",
    comp: <TeaserExamples />,
  },
  {
    name: "Text",
    comp: <TextExamples />,
  },
  {
    name: "Title",
    comp: <TitleExamples />,
  },
];

const getPagePath = (page) => {
  return page.path || page.path === "" ? page.path : page.name.toLowerCase();
};

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          {pages.map((page) => {
            const path = getPagePath(page);
            return (
              <li>
                <Link to={`/${path}`} key={page.name}>
                  {page.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          {pages.map((page, index) => {
            const path = getPagePath(page);
            return (
              <Route
                index={index === 0}
                path={path}
                element={page.comp}
                key={page.name}
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
