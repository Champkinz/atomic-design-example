import React, { FC, useState } from "react";
import { Page } from "../atoms/styles";

const DemoNav: FC<DemoNavProps> = (props: DemoNavProps) => {
  const [togl, setTogle] = useState(false);

  return (
    <Page>
      <div className="bg-green-400 h-full">
        <div
          className={togl ? "expand" : "collapse"}
          onClick={() => setTogle(togl ? false : true)}
        >
          lol
        </div>
      </div>
    </Page>
  );
};

export interface DemoNavProps {}

export default DemoNav;
