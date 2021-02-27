import React from "react";
import { useRouters } from "hookrouter";
import "./style.css";
import Routers from "./router";

const Header = props => {
  return (
    <header id={props.id}>
      {props.name} - {props.title}
    </header>
  );
};

const Nav = () => {
  return <nav>Nawigacja</nav>;
};

const Main = props => {
  return (
    <main>
      <section>Section {props.section_1} </section>
      <section />
      <section>Section {props.section_2} </section>
      <section />
    </main>
  );
};

const Aside = () => {
  return <aside>aside</aside>;
};

const Footer = props => {
  return (
    <footer>
      (c) {props.dzien}-{props.miesiac}-{props.data} - autor: {props.autor}<br/>
      (c) {props.wyswietlRok ? props.rok : "brak roku"} - autor: {props.autor}
    </footer>
  );
};

export default () => {

  const routerResult = useRouters(Routers);

  return (
    <>
      <Header 
      id="header-1" 
      name="Tytuł nagłówka" 
      title="Tytuł" />
      <Nav />
      {routResult}
      <Main 
      section_1="1" 
      section_2="2" />
      <Aside />
      <Footer 
      wyswietlRok={true} 
      rok="2021"
      autor="LK" 
      data="2021"
      miesiac={3}
      dzien={12}
       />
    </>
  );
};
