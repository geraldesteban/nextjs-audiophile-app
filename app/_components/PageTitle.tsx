import { ReactNode } from "react";

function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-white text-[40px] font-bold text-center max-sm:text-[28px]">
      {children}
    </h2>
  );
}

export default Title;
