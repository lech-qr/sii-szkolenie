import React from "react";
import Pages from "./pages";

const { StronaGlowna, Aktualnosci, Kontakt } = Pages;

const Routers = {
  "/" : () => <Pages.StronaGlowna />,
  "/aktualnosci" : () => <Pages.Aktualnosci />,
  "/kontakt" : () => <Pages.Kontakt />
};

export default Routers;