import { BrowserRouter, Link, Outlet, Routes, Route } from "react-router-dom";
// import { ComponentExamples } from "./components/ComponentTemplate";
// import { AccordionExamples } from "./components/Accordion/Accordion";
import { BreadcrumbExamples } from "./components/Breadcrumb/Breadcrumb";
// import { ButtonExamples } from "./components/Button/Button";
// import { CarouselExamples } from "./components/Carousel/Carousel";
// import { FormExamples } from "./components/Form/Form";
import { ImageExamples } from "./components/Image/Image";
// import { ListExamples } from "./components/List/List";
// import { SearchExamples } from "./components/Search/Search";
// import { SeparatorExamples } from "./components/Separator/Separator";
// import { TabsExamples } from "./components/Tabs/Tabs";
import { TeaserExamples } from "./components/Teaser/Teaser";
import { TextExamples } from "./components/Text/Text";
import { TitleExamples } from "./components/Title/Title";

const Nav = () => {
  return (
    <>
      <nav style={{ marginBottom: 50 }}>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px 40px",
            listStyleType: "none",
            padding: 0,
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/breadcrumb">Breadcrumb</Link>
          </li>
          <li>
            <Link to="/image">Image</Link>
          </li>
          <li>
            <Link to="/teaser">Teaser</Link>
          </li>
          <li>
            <Link to="/text">Text</Link>
          </li>
          <li>
            <Link to="/title">Title</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

const Home = () => {
  return <p>Hello world!</p>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          {/* <ComponentExamples /> */}
          {/* <AccordionExamples /> */}
          <Route path="breadcrumb" element={<BreadcrumbExamples />} />
          {/* <ButtonExamples /> */}
          {/* <CarouselExamples /> */}
          {/* <FormExamples /> */}
          <Route path="image" element={<ImageExamples />} />
          {/* <ListExamples /> */}
          {/* <SearchExamples /> */}
          {/* <SeparatorExamples /> */}
          {/* <TabsExamples /> */}
          <Route path="teaser" element={<TeaserExamples />} />
          <Route path="text" element={<TextExamples />} />
          <Route path="title" element={<TitleExamples />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
