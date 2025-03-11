import { PropsWithChildren } from "react";

const SectionTitle = ({ children }: PropsWithChildren) => {
  return <h2 className="text-2xl md:text-4xl font-bold">{children}</h2>;
};

export default SectionTitle;
