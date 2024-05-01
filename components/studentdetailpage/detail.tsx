import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface isDetail {
  name: string;
  advisor: any;
}

const StudentsDetail = ({ name, advisor }: isDetail) => {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <div className="flex flex-col md:flex-row gap-10 min-h-full">
        <div className="">
          {name && (
            <p className="font-light text-sm text-center dark:text-white text-blue-950">
              {name}
            </p>
          )}

          {advisor && (
            <div className="p-2 text-blue-950 dark:text-white font-semibold">
              {advisor}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentsDetail;
