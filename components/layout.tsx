import Navbar from "./global/Navbar";

export interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* <Navbar /> */}
      {children}
    </>
  );
}

export default Layout;
