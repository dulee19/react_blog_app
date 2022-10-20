import React from "react";

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="text-center">
      Copyright &copy; | Aleksić Dušan | {date}
    </footer>
  );
};

export default Footer;
