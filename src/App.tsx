import { About } from "./Components/About/About";
import { Benefits } from "./Components/Benefits/Benefits";
import { Contacts } from "./Components/Contacts/Contacts";
import { Header } from "./Components/Header/Header";
import { Product } from "./Components/Product/Product";
import { Sponsors } from "./Components/Sponsors/Sponsors";
import { Technology } from "./Components/Technology/Technology";

export const App = () => {
  return (
    <div className="main-block">
      <Header />
      <Product />
      <About />
      <Benefits />
      <Technology />
      <Sponsors />
      <Contacts />
    </div>
  );
};
