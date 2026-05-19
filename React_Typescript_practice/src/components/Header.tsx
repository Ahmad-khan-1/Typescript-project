import type { ReactNode } from "react";

type Proptype = {
  heading: string;
  count: number;
  func1: (a: string) => void;
  children: ReactNode;
};
const Header = ({ heading, count, func1, children }: Proptype) => {
  func1("add");
  return (
    <div>
      <h1>{heading}</h1>
      <p>{count}</p>
      {children}
    </div>
  );
};

export default Header;
