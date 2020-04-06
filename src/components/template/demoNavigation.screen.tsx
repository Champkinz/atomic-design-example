import React, { FC, useState } from "react";
import { Page } from "../atoms/styles";

const DemoNav: FC<DemoNavProps> = (props: DemoNavProps) => {
  const [togl, setTogle] = useState(false);
  const [togl2, setTogle2] = useState(false);

  return (
    <Page>
      <div className="flex flex-1 flex-row bg-green-400 h-full">
        <div
          className={togl ? "collapse" : "expand"}
          onClick={() => setTogle(togl ? false : true)}
        >
          <div className="flex flex-1 flex-col items-center">
            {!togl ? (
              <>
                <img
                  alt=""
                  src={require("../../images/appSpotrLogo2.png")}
                  width={40}
                  height={40}
                />
                <div className="hover:bg-green-400 hover:opacity-50 text-white w-full flex flex-1 flex-row justify-center py-4 mt-2 border-r-4 border-teal-500">
                  A
                </div>
                <div className="hover:bg-green-400 hover:opacity-50 text-white w-full flex flex-1 flex-row justify-center py-4 ">
                  B
                </div>
              </>
            ) : null}
            <div className="buttonToggle">
              {!togl ? <p>{`<`}</p> : <p>{`>`}</p>}
            </div>
          </div>
        </div>
        <div
          className={togl2 ? "expand2" : "collapse2"}
          onClick={() => setTogle2(togl2 ? false : true)}
        >
          <div className="flex flex-1 flex-col items-center">
            <div className="flex flex-1 flex-row justify-center w-full py-1 sec-nav-active">
              <div>A</div>
              {togl2 ? <div>-App Overview</div> : null}
            </div>
          </div>
          <div
            className="buttonToggle"
            style={{
              boxShadow: " 0px 0px 4px #434343",
              backgroundColor: "white",
              color: "black",
            }}
          >
            {togl2 ? <p>{`<`}</p> : <p>{`>`}</p>}
          </div>
        </div>
      </div>
    </Page>
  );
};

export interface DemoNavProps {}

export default DemoNav;
