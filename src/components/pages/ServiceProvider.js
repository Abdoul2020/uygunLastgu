import React, { useState } from 'react'
import {
    Box, FormControl, InputLabel, Select, MenuItem, Grid, Button, CircularProgress, InputAdornment,
    OutlinedInput, List, Stepper, Step, StepLabel, Typography, StepContent, Paper, TextField
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import CurrencyLiraIcon from '@mui/icons-material/CurrencyLira';
import DescriptionIcon from '@mui/icons-material/Description';
import SyncIcon from '@mui/icons-material/Sync';
import ServiceProviderListItem from '../ServiceProviderListItem';
import { postServiceProviderAsync, putServiceProviderAsync } from '../../services/redux/servicepSlice';
import { useDispatch, useSelector } from 'react-redux';
import { resetOffer } from '../../services/redux/servicepSlice'


const ServiceProvider = () => {
    const [type, setType] = React.useState('');
    const [offerCost, setOfferCost] = useState("");
    const [activeStep, setActiveStep] = React.useState(0);

    const dispatch = useDispatch();
    const { status, statusErr, errors, statusCode, id, service_name, additional_info, form_url, invoice_url, cost, is_completed } = useSelector(state => state.servicepSlice);

    const handleChange = (event) => {
        setType(event.target.value);
    };

    const handleOfferClick = async () => {
        await dispatch(postServiceProviderAsync({ service_codename: type })).then(() => {
        });
        console.log(errors);
    }

    const handleOfferSend = async () => {
        let oCost = (cost !== "" ? cost : offerCost);
        await dispatch(putServiceProviderAsync({ id: id, cost: oCost })).then(() => {
        });
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        dispatch(resetOffer());
        setOfferCost(0);
    };
    const steps = [
        {
            label: 'Fiyat Teklifi Gir',
            description:
                <List style={{ marginTop: 10, marginBottom: 10 }}>
                    <ServiceProviderListItem icon={<DescriptionIcon />} title="Sigorta Türü" text={service_name} />
                    <ServiceProviderListItem icon={<SyncIcon />} title="Durum" text={status} />
                    <ServiceProviderListItem icon={<AddIcon />} title="Ek Bilgi" text={additional_info} />
                    <TextField id="outlined-basic" size="small" style={{ margin: "auto", marginTop: 15 }} label="Fiyat" color="success"
                        value={offerCost}
                        onChange={(e) => setOfferCost(e.target.value)}
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end" >₺</InputAdornment>

                        }} variant="outlined" />
                </List >,
        },
        {
            label: 'Formu Yükle',
            description:
                <List style={{ marginTop: 10, marginBottom: 10 }}>
                    <ServiceProviderListItem icon={<DescriptionIcon />} title="Sigorta Türü" text={service_name} />
                    <ServiceProviderListItem icon={<SyncIcon />} title="Durum" text={status} />
                    <ServiceProviderListItem icon={<AddIcon />} title="Ek Bilgi" text={additional_info} />
                    <ServiceProviderListItem icon={<CurrencyLiraIcon />} title="Teklif" text={cost != "" ? cost + "₺" : offerCost + "₺"} />
                    <Button variant="outlined" color="success" style={{ marginTop: 10 }}>Formu Yükle</Button>
                </List>,
        }
    ];
    return (
        <Grid container direction="column" sx={{ minHeight: '100vh' }}>
            <Box sx={{ flexGrow: 1 }}>
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <FormControl style={{ width: 260, marginTop: 20, marginBottom: 10, textAlign: 'left' }}>
                        <InputLabel color="success" id="demo-simple-select-label">Sigorta Türü</InputLabel>
                        <Select color="success"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="Sigorta Türü"
                            onChange={handleChange}>
                            <MenuItem value="car">Araç Sigortası</MenuItem>
                            <MenuItem value="kasko">Kasko</MenuItem>
                            <MenuItem value="car_traffic">Trafik Sigortası</MenuItem>
                            <MenuItem value="private_health">Özel Sağlık Sigortası</MenuItem>
                            <MenuItem value="completed_health">Tamamlayıcı Sağlık Sigortası</MenuItem>
                            <MenuItem value="dask">DASK</MenuItem>
                            <MenuItem value="home">Konut Sigortası</MenuItem>
                            <MenuItem value="home_security">Evim Güvende Sigortası</MenuItem>
                            <MenuItem value="phone">Cep Telefonu Sigortası</MenuItem>
                        </Select>
                    </FormControl><br />
                    <Button variant="outlined" loading={true} disabled={statusErr === "loading"} onClick={handleOfferClick} loadingPosition="end" color="success" size="large" style={{ width: 260 }} endIcon={statusErr !== "loading" ? <SendIcon /> : <CircularProgress style={{ width: 20, height: 20 }} color="inherit" />}>
                        Sigorta Talebi Getir
                    </Button>
                </div>
                {statusCode == 200 &&
                    <Box sx={{ maxWidth: 640, margin: 'auto', marginTop: 10, borderRadius: 3, padding: 5, boxShadow: 3, background: "rgb(240 238 238)" }}>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((step, index) => (
                                <Step key={step.label} sx={{
                                    '& .MuiStepLabel-root .Mui-completed': {
                                        color: 'green',
                                    },
                                    '& .MuiStepLabel-root .Mui-active': {
                                        color: '#F29339',
                                    },
                                }}>
                                    <StepLabel
                                        optional={
                                            index === 2 ? (
                                                <Typography variant="caption">Last step</Typography>
                                            ) : null
                                        }
                                    >
                                        {step.label}
                                    </StepLabel>
                                    <StepContent>
                                        <Typography>{step.description}</Typography>
                                        <Box sx={{ mb: 2 }}>
                                            <div>
                                                <Button
                                                    variant="contained"
                                                    color="success"
                                                    disabled={index === 0 && offerCost === ""}
                                                    onClick={index === steps.length - 1 ? handleOfferSend : handleNext}
                                                    sx={{ mt: 1, mr: 1 }}
                                                >
                                                    {index === steps.length - 1 ? 'Bitir' : 'İleri'}
                                                </Button>
                                                <Button
                                                    disabled={index === 0}
                                                    color="error"
                                                    onClick={handleBack}
                                                    sx={{ mt: 1, mr: 1 }}>
                                                    Geri
                                                </Button>
                                            </div>
                                        </Box>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length && (
                            <Paper square elevation={0} sx={{ p: 3 }} style={{ background: 'transparent' }}>
                                <Typography >Teklif Gönderildi!</Typography>
                                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }} color="success">
                                    Tamam
                                </Button>
                            </Paper>
                        )}
                    </Box>
                }
            </Box>
        </Grid >
    )
}
export default ServiceProvider