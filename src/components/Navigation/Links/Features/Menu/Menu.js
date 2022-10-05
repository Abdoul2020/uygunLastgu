import React from "react";
import SubMenu from "./SubMenu/SubMenu";
import RequestButton from "./RequestButton/RequestButton";
import { items } from "./state";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";



const styles={
  menuKare:{
  justifyContent: "space-between",
  maxWidth: "400px",
  margin: "0 auto",
  background: "#f5f7f9",
  padding: "10px 10px 10px 10px"
      
  }
 
}

const Menu = (props) => {

  const { classes } = props;
  return (
    <div className={`${props.isVisible ? "block" : "hidden"} absolute w-508  `} style={
      {
        right:"28rem"
      }
    }>
      <div className="mt-4 rounded-tr-base rounded-tl-base bg-gray-50 px-4 py-4 w-full" style={{borderRadius:"10px"}}>

        {" "}
        
        {/* <SubMenu items={items} /> */}
        <Grid container >
          <Grid item  xs={12}>
<h5>UygunuSec Sigorta</h5>
          </Grid>
          <Grid item xs={12}>
            <Grid container >

            <Grid item  md={6} >
            <Grid container className={classes.menuKare}  >
              <Grid item  xs={12}  sm={12} md={12} lg={12}  >
              <Grid container style={{background:"#ffff", borderRadius:"10px", padding:" 20px"  }}>
                <Grid xs={12} >
                  <div style={{display:"flex"}}>
                    <div>
                    <h1>Araç sigortası</h1>
                    </div>
                    <div>
                      <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/mega-menu/car.svg" alt="" />

                    </div>
                  </div>
                <br />
                 <Link to="/kasko_sigorta">
                    Kasko
                 </Link>
                 <br />
                 <Link to="">
                 Traffic Sigortası
                 </Link><br />
                 <Link to="">
                 
                 </Link><br />
                </Grid>
              </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}  style={{marginTop:"20px"}} >
              <Grid container style={{background:"#ffff", borderRadius:"10px", padding:" 20px"  }}>
                <Grid xs={12} >
                  <div style={{display:"flex"}}>
                    <div>
                    <h1>Sağlığım</h1>
                    </div>
                    <div>
                      <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/mega-menu/car.svg" alt="" />

                    </div>
                  </div>
                <br />
                 <Link to="/kasko_sigorta">
                    Tamamlayıcı Sağlık sigortası
                 </Link>
                 <br />
                 <Link to="">
                 Özel sağlık Sigortası
                 </Link><br />
                 
                </Grid>
              </Grid>
              </Grid>
              

            </Grid>
          </Grid>

          <Grid item  md={6}  >
            <Grid container className={classes.menuKare}>
              
              <Grid xs={12} sm={12} md={12}>
              <Grid container style={{background:"#ffff", borderRadius:"10px", padding:" 20px"  }}>
                <Grid xs={12} >
                  <div style={{display:"flex"}}>
                    <div>
                    <h1>Evim</h1>
                    </div>
                    <div>
                      <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/mega-menu/car.svg" alt="" />

                    </div>
                  </div>
                <br />
                 <Link to="/dask_sigorta">
                    DASK
                 </Link>
                 <br />
                 <Link to="">
                 konut Sigortası
                 </Link> <br />
                 <Link to="">
                 Evim Güvende
                 </Link>
                </Grid>
              </Grid>
              </Grid>
              <Grid xs={12} sm={12} md={12} lg={12}  style={{marginTop:"20px"}}>
              <Grid container >
              <Grid container style={{background:"#ffff", borderRadius:"10px", padding:" 20px"  }}>
                
                <Grid xs={12} >
                  <div style={{display:"flex"}}>
                    <div>
                    <h1>Eşyalarım</h1>
                    </div>
                    <div>
                      <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/mega-menu/car.svg" alt="" />

                    </div>
                  </div>
                <br />
                 <Link to="/kasko_sigorta">
                   Cep Telefonu
                 </Link><br />
                 <Link to="">
                   
                 </Link><br />
                 <Link to="">
                   
                 </Link><br />
                </Grid>
              </Grid>

              </Grid>
              </Grid>
            </Grid>
          </Grid>

            </Grid>

          </Grid>
      
        
       


        </Grid>{" "}
      </div>{" "}
    </div>
  );
};


Menu.protoTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(Menu));

{
  /* <div className="mt-4 rounded-tr-base rounded-tl-base bg-gray-50 px-4 py-4 w-full altmenuPart">
                        <SubMenu items={items} />
                    </div> */
}
