import React from 'react'
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { withStyles } from '@material-ui/styles';
import PropTypes from "prop-types";
import { motion } from "framer-motion";//here is for the tailwind
import { red } from '@material-ui/core/colors';
import heroimg from "../img/herohere.webp"
import services1 from "../img/service_1.svg"
import logoref from "../img/esure.webp"
import logorefbir from "../img/love.webp"

import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';


// background:"#28b23f",

const styles={
  allcontainer:{
    background:"#28b23f",
    height:"auto"
  },
  logoImage:{
    
  },
  herodiv:{
margin:"0 auto",
textAlign:"center"
  },
  back_wrap:{
    position:"relative",
    textAlign:"center",
    padding:"40px 0",
    marginLeft:"auto",
    marginRight:"auto",
    maxWidth:"1024px"

  },
  buttonProps:{
    width:"100% !important",
    backgroundColor: "#e40ecd !important",
    minWidth: "286px",
    height: "48px",
    fontSize: "18px"
  },
  wrap_2:{

  },
  
  wrap_3:{
    width:"100% !important",
    marginTop:"50px"

  },
  wrap_3_text:{
    fontWeight:"700",
    fontFamily: "Heading Now,Helvetica Neue,Helvetica,Arial,sans-serif",
    fontSize: "32px",
    lineHeight: "40px",
    color: "#590f85",
    padding: "0"
  },
  wrap_3_text2:{
    fontFamily: "Helvetica Neue Helvetica,Arial,sans-serif",
    fontSize: "20px",
    lineHeight: "30PX",
    fontWeight: "400",
    marginTop: "20PX",
    color: "#554565"
  },
  buttonProps2:{
    position: "relative !important",
    display: "inline-flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    boxSizing: "border-box !important",
    whiteSpace: "nowrap !important",
    textDecoration: "none !important",
    background: "transparent !important",
    border: "none !important",
    borderRadius: "4PX !important",
    cursor: "pointer !important",
    height: "44px !important",
    padding: "12px 24px !important",
    fontWeight: "500 !important",
    fontFamily: "Helvetica Neue Helvetica,Arial,sans-serif",
    fontSize: "16px !important",
    lineHeight: "20PX !important",
    fontWeight: "700 !important",
    color: "#fff !important",
    background: "#590f85 !important"

  },
  insideWap:{
    maxWidth: "1280px",
    height: "auto",
    margin: "0 auto",
    padding: "10px",
    position: "relative",
  }

}


const kasko_sigorta = (props) => {


  const {classes}=props;
  

  return (
    <div>
<Grid container  >
  <Grid item xs={12} sm={12} md={12} lg={12} className={classes.allcontainer} >
    <section className={classes.back_wrap}>
    <Grid container  >
    <Grid item xs={5} >
        <div className={classes.herodiv}>

          <div>

          <Typography variant="body">
          Kasko Sigortası 
          </Typography>

          </div>

          <div>
          <Typography variant="h2">
          SÜPER TASARRUF
          </Typography>

          </div>

          <div>

          <Typography variant="h1">
          ₺319
           </Typography>

          </div>

          <div>

          <Typography variant="h2">
          ARACINIZIN SİGORTASINA
</Typography>

          </div>
           <div>
            <Link to="/kasko_sigortasi/form/temel_Bilgiler" target="_blank">
            <Button className={classes.buttonProps} >
              Teklif Alın
            </Button>

            </Link>
           
           </div>

           
           
        </div>
    </Grid>


    <Grid item xs={7}>
       
        {/* <form>
<h1>Bu bilgiler sana özel teklif hazırlayabilmemiz için gereklidir.</h1>

    <input type="text" name="ruhsat" placeholder='Ruhsat veya T.C'  className='' /><br />

  <input type="text"  name="cep_fon"  placeholder='Cep telefonu' className=''/><br />

  <Button>
    Kasko Sigorta Teklifi Al
  </Button>
</form>  */}

<img src={heroimg} alt="uygunusec_sigorta"  />
  </Grid>
    </Grid>
    </section>
  </Grid>
  {/* end heer */}
  <Grid item xs={12} sm={12} md={12} lg={12} style={{background:"#ffff"}}>
    <Grid container >
      <Grid item  xs={12} sm={12} md={12} lg={12} className=''>
          <Grid container className={classes.insideWap}>
<section className={classes.wrap_3} >
  <Grid container >
  <Grid item xs={12} sm={12} md={12} className=" mt-5">
              <div style={{width:"100%", textAlign:"center"}} className={classes.wrap_2}>
<Typography variant="h4" style={{ color:"#590f85"}} className={classes.wrap_3_text}>
110'dan fazla markadan ucuz araba sigortası tekliflerini karşılaştırın
</Typography>

              </div>
              <div style={{width:"100%", textAlign:"center", marginTop:"10px"}}>

                <Typography variant="body" className={classes.wrap_3_text2}>
                Doğru kapağı alabilmeniz için Türkiye'deki en büyük markaların fırsatlarını karşılaştırarak zor işi sizin için yapıyoruz.
                </Typography>
              </div>

            </Grid>

  </Grid>
</section>
           
                      {/* All the company we work with */}
            <Grid item  xs={12} sm={12} md={12} lg={12}>

              <section >

              <Grid container style={{marginTop:"20px"}}>
                <Grid xs={12} sm={12} md={2} lg={2} >
                  <div className={classes.logoImage} >
                    <img src={logoref} alt=""  style={{margin:"0 auto"}}/>
                  </div>
                </Grid>
                <Grid xs={12} sm={12} md={2} lg={2}>
                  <div className={classes.logoImage}>
                    <img src={logorefbir} alt="" style={{margin:"0 auto"}}/>
                  </div>
                </Grid>
                <Grid xs={12} sm={12} md={2} lg={2}>
                  <div className={classes.logoImage}>
                    <img src={logoref} alt=""  style={{margin:"0 auto"}}/>
                  </div>
                </Grid>
                <Grid xs={12} sm={12} md={2} lg={2}>
                  <div className={classes.logoImage}>
                    <img src={logoref} alt=""  style={{margin:"0 auto"}}/>
                  </div>
                </Grid>
                <Grid xs={12} sm={12} md={2} lg={2}>
                  <div className={classes.logoImage}>
                    <img src={logoref} alt="" style={{margin:"0 auto"}} />
                  </div>
                </Grid>
                <Grid xs={12} sm={12} md={2} lg={2}>
                  <div className={classes.logoImage}>
                    <img src={logoref} alt="" style={{margin:"0 auto"}}/>
                  </div>
                </Grid>


                {/* get bontton */}
                <Grid xs={12} sm={12} md={12} lg={12} style={{marginTop:"20px"}}>
                  <Grid container >
                    <Grid item xs={12} sm={12} md={12} lg={12} style={{textAlign:"center"}}>
                      <Button className={classes.buttonProps2}>
                        Yeni Teklif Alın
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid >

              </section>
             
            </Grid>

            {/* teh phrase here */}
            <Grid item xs={12} sm={12} md={12} style={{marginTop:"20px"}}>
              <section>
                <Grid container >
                  <Grid xs={12} sm={12} md={12} lg={12} style={{textAlign:"center"}}>
                  <Typography variant="subtitle2">
                  151% of consumers could save up to £319.82 on their annual car insurance premiums. Consumer Intelligence, May 2022. UK only.
</Typography>


                  </Grid>

                </Grid>
              </section>

            </Grid>



            
          </Grid>
        </Grid>
    </Grid>
  </Grid>



{/* start of new section */}
  <Grid  item xs={12} sm={12} md={12} lg={12} style={{marginTop:"10px"}}>
    <section>
    <Grid container className={classes.insideWap}>
      <Grid item xs={12} sm={12} md={12} lg={12}>

        <div className='text-center'>
          <Typography variant="h4">
          Why compare car insurance quotes with MoneySuperMarket?
          </Typography>
       
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div className='text-center mt-5'>
            <Typography>
            Our mission is to make finding cheap car insurance easier – and when you take out cover with MoneySuperMarket you can benefit from:
              </Typography>   
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} className="mt-6">
        <div className='text-center mt-5'>
           <Grid container className='text-center'>
            <Grid xs={12} sm={12} md={4} lg={4}>
              <div>
                <div >
                  <img src={services1} alt=""  style={{margin:"0 auto"}}/>
                </div>
                <div>
                  <Grid container>
                    <Grid xs={12} sm={12} md={12} lg={12}>
                       <Grid container>
                        <Grid xs={12} sm={12} md={12} lg={12}>

                        <div>
                          <Typography variant='h5'>
                          MoneySuperMarket discounts
                          </Typography>
                          </div>
                          <div>
                            <Typography> 
                            Everyone deserves to save money – in fact, almost a quarter of people comparing car insurance quotes with us received a MoneySuperMarket price cut in their results*
                              </Typography> 
                          </div>


                        </Grid>

                       </Grid>
                    </Grid>

                  </Grid>
                </div>

              </div>
            </Grid>

            <Grid xs={12} sm={12} md={4} lg={4}>
              <div>
                <div >
                  <img src={services1} alt=""  style={{margin:"0 auto"}} />

                </div>
                <div>
                  <Grid container>
                    <Grid xs={12} sm={12} md={12} lg={12}>
                       <Grid container>
                        <Grid xs={12} sm={12} md={12} lg={12}>
                          <div>
                          <Typography variant='h5'>
                          MoneySuperMarket discounts
                          </Typography>
                          </div>
                          <div>
                            <Typography> 
                            Everyone deserves to save money – in fact, almost a quarter of people comparing car insurance quotes with us received a MoneySuperMarket price cut in their results*
                              </Typography> 
                          </div>
                         
                        </Grid>

                       </Grid>
                    </Grid>

                  </Grid>
                </div>

              </div>
            </Grid>

            <Grid xs={12} sm={12} md={4} lg={4}>
              <div>
                <div >
                  <img src={services1} alt=""   style={{margin:"0 auto"}}/>

                </div>
                <div>
                  <Grid container>
                    <Grid xs={12} sm={12} md={12} lg={12}>
                       <Grid container>
                        <Grid xs={12} sm={12} md={12} lg={12}>
                        <div>
                          <Typography variant='h5'>
                          MoneySuperMarket discounts
                          </Typography>
                          </div>
                          <div>
                            <Typography> 
                            Everyone deserves to save money – in fact, almost a quarter of people comparing car insurance quotes with us received a MoneySuperMarket price cut in their results*
                              </Typography> 
                          </div>


                        </Grid>

                       </Grid>
                    </Grid>

                  </Grid>
                </div>

              </div>
            </Grid>
            </Grid> 
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} style={{marginTop:"30px"}}>
        <div className='text-center'>
          <Typography>
            <Button className={classes.buttonProps2}>
            Yeni teklif alın
            </Button>
          </Typography>
        </div>

      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} style={{marginTop:"30px"}}>
        <div className='text-center'>
          <Typography>
          *24.43% of customers completing a quote through MoneySuperMarket received a price cut quote in their top 10 results. Based on MoneySuperMarket quotes between May 2021 and May 2022
          </Typography>
        </div>

      </Grid>

    </Grid>

    </section>


  </Grid>

  {/* start of new section from here pf*/}
  <Grid item xs={12} sm={12} md={12} lg={12} style={{marginTop:"10px"}}>
    <section>
      <Grid container >
        <Grid xs={12} sm={12} md={12} lg={12} >

          <div>
            <Grid container >
              <Grid xs={12} sm={12} md={6} lg={6}>

                <div>

                  <Grid container>
                    <Grid xs={12} sm={12} md={12} lg={12} >
                      

                    </Grid>

                  </Grid>

                </div>


              </Grid>

              <Grid xs={12} sm={12} md={6} lg={6}>
<div>

</div>
              </Grid>

            </Grid>
          </div>

        </Grid>

      </Grid>
    </section>

  </Grid>

  
   

</Grid>

    </div>
  )
}

kasko_sigorta.protoTypes={
  classes: PropTypes.object.isRequired,


}


export default (withStyles(styles)(kasko_sigorta));