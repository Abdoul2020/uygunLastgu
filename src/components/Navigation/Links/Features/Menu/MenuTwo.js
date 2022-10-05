import React, { useEffect } from "react";
import { useState } from "react";

import SubMenu from "./SubMenu/SubMenu";
import RequestButton from "./RequestButton/RequestButton";
import { items } from "./state";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

// redux connection
import { useSelector, useDispatch } from 'react-redux';
import { getUserAsync} from "../../../../../services/redux/userSlice"




const MenuTwo = ({ isVisible }) => {
  const dispatch = useDispatch();
  // useSelector used here
 // const nameSurName = useSelector((state) => state.loginSlice.displayName);
 // console.log("var olan üye:", nameSurName)

  //const token = cookies.get('idToken');

  const userStatus = useSelector(state => state.userSlice.status);
  const userNameSurName = useSelector(state => state.userSlice.displayName);

  useEffect(() => {
   console.log("son durum:", userStatus)
   console.log("name and surname", userNameSurName)
}, [userStatus]);

useEffect(() => {
  console.log("name and surname", userNameSurName)
}, [userNameSurName]);


  useEffect(() => {
    dispatch(getUserAsync());
}, [dispatch]);



  return (
    <div
      className={`${isVisible ? "block" : "hidden"} absolute w-40    `}
      style={{right:"-50px"}}
    >

{
  userNameSurName != null ? (

    <div className="mt-4 rounded-tr-base rounded-tl-base bg-gray-50 px-4 py-4 w-full"
    style={{ borderRadius: "10px" }}>
 <Grid container>
          <Grid item  md={12} className="px-1  "  style={{ marginBottom:"10px"}}>
            {" "}
            <Typography variant="h6">
            {userNameSurName}
            </Typography>
          </Grid>{" "}

          <hr  className="" style={{ color:"2px solid red"}}/>

          <Grid item md={12} className="px-1  " style={{ marginBottom:"6px"}}>
            {" "}
            <Link to="">

            <Typography variant="body" className="hover:text-lime-500">
             Tekliflerim
            </Typography>
            </Link>
           
          </Grid>{" "}

          <Grid item  md={12}  className="px-1  " style={{ marginBottom:"6px"}}>
            {" "}
            <Link to="">
            <Typography variant="body"  className="hover:text-lime-500">
              Kullanıcı Bilgilerim
            </Typography>
            </Link>
          
          </Grid>{" "}

          <Grid item  md={12}  className="px-1  "  style={{ marginBottom:"6px"}}>
            {" "}
            <Link to="">
            <Typography variant="body"   className="hover:text-lime-500">
              Çıkış Yap
            </Typography>
            </Link>
           
          </Grid>{" "}
        </Grid>{" "}


    </div>

  ): (

<div
className="mt-4 rounded-tr-base rounded-tl-base bg-gray-50 px-4 py-4 w-full"
style={{ borderRadius: "10px" }}
>
{" "}
{/* <SubMenu items={items} /> */}{" "}
<Grid container>
  <Grid item className="" md={12} style={{
    textAlign: "center",
    background: "gray",
    borderRadius: "5px",
    
  }}>
    {" "}
    <Link to="login">
      <Button style={{
        color:"#FFFF",
      }}>Giriş Yap </Button>{" "}
    </Link>
  </Grid>{" "}
  <Grid item className="" md={12}
  style={{
    textAlign: "center",
    background: "rgb(28, 123, 23)",
    borderRadius: "5px",
    marginTop:"10px"
  }}>
    <Link to="/register">
      <Button style={{
        color:"#FFFF",
      }}>Üye Ol </Button>{" "}
    </Link>
  </Grid>{" "}
</Grid>{" "}
</div>

  )
}
      
    </div>
  );
};
export default MenuTwo;

{
  /* <div className="mt-4 rounded-tr-base rounded-tl-base bg-gray-50 px-4 py-4 w-full altmenuPart">
                            <SubMenu items={items} />
                        </div> */
}
