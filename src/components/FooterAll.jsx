
//import { withStyles } from '@material-ui/core'
import React from 'react'
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Grid, IconButton } from "@mui/material";
import Logo from "../img/logo34.jpeg";
import FooterLinks from './FooterLinks';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function createData(name, link) {
  return { name, link };
}

const styles = {


}

const urunlerimiz = [
  createData("Araç Sigortası", "#"),
  createData("Trafik Sigortası", "#"),
  createData("Kasko", "kasko_sigorta"),
  createData("DASK", "#"),
  createData("Konut Sigortası", "#"),
  createData("Evim Güvende", "#"),
  createData("Tamamlayıcı Sağlık Sigortası", "#"),
  createData("Özel Sağlık Sigortası", "#"),
  createData("Cep Telefonu Sigortası", "#"),
];

const hakkimizda = [
  createData("Biz Kimiz?", "#"),
  createData("İletişim", "#"),
];

const bilgi = [
  createData("Kullanıcı Sözleşmesi", "#"),
  createData("Kişisel Verilerin Korunması", "#"),
  createData("Gizlilik ve Çerez Politikası", "#"),
];


const FooterAll = (props) => {
  
  return (
    <div style={{ width: "100%" }}>

      {/* desktop part */}
      <section style={{ background: "white" }} className=" hidden lg:flex">
        <Grid container style={{ width: '70%', margin: 'auto' }}>
          <Grid item xs={12} style={{ marginTop: 10, marginLeft: -5 }}>
            <img src={Logo} alt="" style={{ maxWidth: "100px", display: 'inline-block' }} />
            
            <p className="text-headingColor text-xl font-bold" style={{ display: 'inline-block' }}>&nbsp;&nbsp;UygunuSec</p>

          </Grid>
          <Grid container style={{ marginTop: 50, marginBottom: 50 }}>

            <FooterLinks title={"Ürünlerimiz"} data={urunlerimiz} />
            <FooterLinks title={"Bilgi Merkezi"} data={bilgi} />
            <FooterLinks title={"Hakkımızda"} data={hakkimizda} />

            <Grid xs={3}>
              <div style={{ marginBottom: 40 }}>
                <p style={{ marginBottom: 5 }}>Bizi Arayın</p>
                <PhoneIcon />
                <span> 555 555 55 55</span>
              </div>
              <div style={{ marginBottom: 20 }}>
                <p style={{ marginBottom: 3 }}>Bizi Takip Edin</p>
                <IconButton onClick={() => window.open('http://facebook.com', "_blank")} style={{ color: '#4267B2' }}>
                  <FacebookRoundedIcon />
                </IconButton>
                <IconButton onClick={() => window.open('http://twitter.com', "_blank")} style={{ color: '#1DA1F2' }}>
                  <TwitterIcon />
                </IconButton>
                <IconButton onClick={() => window.open('http://instagram.com', "_blank")} style={{ color: '#FD1D1D' }}>
                  <InstagramIcon />
                </IconButton>
              </div>
            </Grid>
          </Grid>
          <div style={{ textAlign: "center", width: '100%', color: '#717171' }}>
            <hr/>
            <span >&copy; 2022 uygunusec.com</span>
          </div>
        </Grid>
      </section>
      mobile
    </div>


  )
}

FooterAll.protoTypes = {

  classes: PropTypes.object.isRequired,

};


export default (withStyles(styles)(FooterAll))