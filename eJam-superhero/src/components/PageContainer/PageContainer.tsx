import React from "react";
import "./PageContainer.css";

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default PageContainer;
