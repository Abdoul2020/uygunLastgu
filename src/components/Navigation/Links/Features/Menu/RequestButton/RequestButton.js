import React from "react";
import { Link } from "react-router-dom";
//import  BrandButtonDefault  from "../../../../../library/Button/Brand"

const RequestButton = () => {
  const login = (e) => e.preventDefault();

  return (
    <Link to="/features/request-feature">
      {" "}
      {/* <BrandButtonDefault
                        type="submit"
                        value="Teklif Al"
                        event={login}
                        classes="rounded-tr-none rounded-tl-none text-xs w-full" /> */}{" "}
      <p> rand here </p>{" "}
    </Link>
  );
};

export default RequestButton;
