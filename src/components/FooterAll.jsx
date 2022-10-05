
//import { withStyles } from '@material-ui/core'
import React from 'react'
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { styled } from '@mui/material/styles';
import { Grid, IconButton, Typography, Paper, Stack } from "@mui/material";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Logo from "../img/logo34.jpeg";
import FooterLinks from './FooterLinks';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import phoneResim from "../img/phone_1.png"

const styles = {}

function createData(name, link) {
  return { name, link };
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

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'left',
  paddingTop: 15,
  color: theme.palette.text.secondary,
}));

const FooterAll = (props) => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{ width: "100%" }}>

      {/* desktop part */}

      <section style={{ background: "white" }} >

      <section style={{ background: "white" }} className="hidden lg:flex w-full h-full items-center justify-between">

        <Grid container style={{ width: '70%', margin: 'auto' }}>
          <Grid item xs={12} style={{ marginTop: "50px", marginLeft: -5 }}>
            <img src={Logo} alt="" style={{ maxWidth: "100px", display: 'inline-block' }} />
            
            <p className="text-headingColor text-xl font-bold" style={{ display: 'inline-block' }}>&nbsp;&nbsp;UygunuSec</p>

          </Grid>
          <Grid container style={{ marginTop: 50, marginBottom: 50 }}>

            <FooterLinks title={"Ürünlerimiz"} data={urunlerimiz} />
            <FooterLinks title={"Bilgi Merkezi"} data={bilgi} />
            <FooterLinks title={"Hakkımızda"} data={hakkimizda} />

            <Grid xs={3}>
              <div style={{ marginBottom: 40 }}>
                <p style={{ marginBottom: 5 }}>Yardımcı olmaya hazırız</p>
                {/* <PhoneIcon /> */}
                <div style={{display:"flex"}}>
                <img src={phoneResim} alt="" style={{width:"22px"}}/>&nbsp;&nbsp;
                <span> 555 555 55 55</span>
                </div>
                
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
            <hr />
            <span >&copy; 2022 uygunusec.com</span>
          </div>
        </Grid>
      </section>


      {/* mobile */}
      <section style={{ background: "white", width: "100%" }} className="flex items-center justify-between lg:hidden w-full h-full ">
        <Stack spacing={0} style={{ width: "100%" }}>
          <Item>
            <img src={Logo} alt="" style={{ maxWidth: "100px", display: 'inline-block' }} />
            <p className="text-headingColor text-xl font-bold" style={{ display: 'inline-block' }}>&nbsp;&nbsp;UygunuSec</p>
          </Item>
          <Item>
            <div style={{ marginBottom: 20, marginTop: 10, color: "black", marginLeft: 10 }}>
              <p style={{ marginBottom: 5 }}>Bizi Arayın</p>
              <PhoneIcon />
              <span> 555 555 55 55</span>
            </div>
            <div>
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
          </Item>
          <Item>
            <div style={{ width: "100%" }}>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Ürünlerimiz</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FooterLinks title={""} data={urunlerimiz} />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                  <Typography>Bilgi Merkezi</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FooterLinks title={""} data={bilgi} />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                  <Typography>Hakkımızda</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FooterLinks title={""} data={hakkimizda} />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Item>
            <div style={{ textAlign: "center", width: '100%', color: '#717171', fontSize: 13 }}>
              <hr />
              <span >&copy; 2022 uygunusec.com</span>
            </div>
        </Stack>
      </section>

      </section>
    </div>


  )
}

FooterAll.protoTypes = {

  classes: PropTypes.object.isRequired,

};


export default (withStyles(styles)(FooterAll))