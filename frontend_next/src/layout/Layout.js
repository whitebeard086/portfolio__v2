import { useState } from "react";

import { Header, Sidebar } from "../containers";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
};
