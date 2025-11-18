import { useCallback, useState } from "react";
import { About } from "./Components/About/About";
import { Benefits } from "./Components/Benefits/Benefits";
import { Contacts } from "./Components/Contacts/Contacts";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Product } from "./Components/Product/Product";
import { Sponsors } from "./Components/Sponsors/Sponsors";
import { Technology } from "./Components/Technology/Technology";
import { Diplom } from "./Components/Diplom/Diplom";

export const App = () => {
  const [headerColor, setHeaderColor] = useState("white");

  const setNewColor = useCallback((color: string) => {
    setHeaderColor(color);
  }, []);

  return (
    <div className="main-block">
      <Header headerColor={headerColor} />
      <Product changeHeaderColor={setNewColor} />
      <About changeHeaderColor={setNewColor} />
      <Benefits changeHeaderColor={setNewColor} />
      <Technology changeHeaderColor={setNewColor} />
      <Diplom changeHeaderColor={setNewColor} />
      <Sponsors />
      <Contacts />
      <Footer />
    </div>
  );
};
