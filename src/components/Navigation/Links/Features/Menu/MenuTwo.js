import React from "react";
import SubMenu from "./SubMenu/SubMenu";
import RequestButton from "./RequestButton/RequestButton";
import { items } from "./state";
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

const MenuTwo = ({ isVisible }) => {
  return (
    <div className={`${isVisible ? "block" : "hidden"} absolute w-40 bg-gray-50 shadow-xl rounded-lg  right-0`}>
      <div className="mt-4 rounded-tr-base rounded-tl-base bg-gray-50 px-4 py-4 w-full">
        {" "}
        {/* <SubMenu items={items} /> */}{" "}
        <Grid container>
          <Grid item className="" md={12}>
            {" "}
            <Link to="login">
            <Button>
            Giriş Yap
            </Button>
            </Link>
           
          </Grid>{" "}
          <Grid item className="" md={12}>
            <Link to="/register">
            <Button>
              Üye Ol
              </Button>
            </Link>
             
          </Grid>
        </Grid>{" "}
      </div>{" "}
    </div>
  );
};
export default MenuTwo;

{
  /* <div className="mt-4 rounded-tr-base rounded-tl-base bg-gray-50 px-4 py-4 w-full altmenuPart">
                          <SubMenu items={items} />
                      </div> */
}
