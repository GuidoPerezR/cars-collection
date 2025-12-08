import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Home } from "@/pages/Home";
import { Page404 } from "@/pages/404";
import "@fontsource/russo-one";
import { Routes, Route } from "react-router";
import { CarPage } from "./pages/Car";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/:id" element={<CarPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
