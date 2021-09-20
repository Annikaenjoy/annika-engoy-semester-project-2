import React from "react";
import { baseUrl } from "../settings/api";

const HeroBanner = ({ data }) => {
  console.log(data.url);
  return (
    <>
      <img className="herobanner"
        src={`${baseUrl}${data.hero_banner?.formats.large.url}`}
        alt="Nailedit Nail polish"
      />
    </>
  );
};

export default HeroBanner;
