import React from "react";

export default function Artist({obj}) {
  return (
    <div className="text-center text-[17px] font-semibold">
      <img
        src={obj.image}
        alt=""
        className="rounded-full w-[190px] h-[190px]"
      />
      <h1 className="my-2">{obj.name}</h1>
    </div>
  );
}
