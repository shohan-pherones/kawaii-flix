import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return (
    <section className="container mx-auto p-10 flex flex-col gap-y-5">
      {children}
    </section>
  );
};

export default Container;
