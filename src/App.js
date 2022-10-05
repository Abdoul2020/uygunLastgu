import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from "framer-motion";
import {
  CreateContainer,
  Header,
  KasoTeklif,
  MainContainer,
  UnderHeader,
  TemelInfo,
  FooterAll,
  DaskSigorta,
} from "./components";


import Login4 from "./components/pages/Login4";
import RegisterPage from "./components/pages/RegisterPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import themeFile from "./utils/theme";
import ServiceProvider from "./components/pages/ServiceProvider";
import Cookies from 'universal-cookie'; //cookies
import jwtDecode from "jwt-decode";
import Admin from "./components/pages/Admin";
import AdminUser from "./components/pages/AdminUser";
import HeaderAdmin from "./components/HeaderAdmin";

//import Hakkimizda from "./components/pages/Hakkimizda";
//import Hakkimizda from "./components/pages/Hakkimizda";
import PageNotFound from "./components/pages/PageNotFound";
import HeaderServicep from "./components/HeaderServicep";
import HeaderTop from "./components/HeaderTop";




//jwt time

const cookies = new Cookies();
const token = cookies.get('idToken');

console.log("cookiesteki token:", token)


if (token) {
  const decodedToken = jwtDecode(token);
  console.log("zaman var:", decodedToken)
  if (decodedToken.exp * 1000 < Date.now()) {
    // store.dispatch(logoutUser());
    // window.location.href = '/';
    console.log("zaman Bitti")

  } else {
    // store.dispatch({ type: SET_AUTHENTICATED });
    // axios.defaults.headers.common['Authorization'] = token;
    // store.dispatch(getUserData());

    console.log("daha zaman var")


  }
}




const theme = createTheme(themeFile);

const App = (props) => {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
        <div className="w-screen h-auto flex flex-col bg-primary">

          {location.pathname == "/admin" || location.pathname == "/admin/user" ? <HeaderAdmin /> : location.pathname=='/login' ? null : location.pathname=='/register' ? null : location.pathname=='/kasko_sigortasi/form/temel_Bilgiler' ? null : location.pathname == "/404" ? null: location.pathname == "/servicep" ? <HeaderServicep /> : < Header />}
          
          <main className={ location.pathname=='/login' ? "mt-0 md:mt-0 pt-0 w-full" : location.pathname=='/register' ? "mt-0 md:mt-0 pt-0 w-full" : location.pathname=='/kasko_sigortasi/form/temel_Bilgiler' ? "mt-0 md:mt-0 pt-0 w-full" : "mt-0 md:mt-0 pt-0 w-full"}>

            {location.pathname=='/login' ? null : location.pathname=='/register' ? null : location.pathname=='/kasko_sigortasi/form/temel_Bilgiler' ? null :location.pathname == "/admin/user" ? null: location.pathname == "/admin"? null :location.pathname == "/servicep" ? null : location.pathname == "/404" ? null : < UnderHeader />}
            

            <Routes>
              <Route path="/*" element={<MainContainer />} />{" "}
              <Route path="/404" element={<PageNotFound />} />{" "}
              {/* <Route path="/createItem" element={<CreateContainer />} />{" "} */}{" "}
              <Route path="/login" element={<Login4 />} />{" "}
              <Route path="/Register" element={<RegisterPage />} />{" "}
              {/* <Route path="/about_us" element={<Hakkimizda />} />{" "} */}
              <Route path="/kasko_sigorta" element={<KasoTeklif />} />{" "}
              <Route path="/dask_sigorta" element={<DaskSigorta />} />{" "}
              <Route path="/servicep" element={<ServiceProvider />} />{" "}
              <Route path="/admin" element={<Admin />} />{" "}
              <Route path="/admin/user" element={<AdminUser />} />{" "}
              <Route
                path="/kasko_sigortasi/form/temel_Bilgiler"
                element={<TemelInfo />}
              />{" "}
            </Routes>{" "}
            <ToastContainer />
          </main>{" "}


{
  location.pathname == "/admin" || location.pathname == "/admin/user" ? null : location.pathname=='/login' ? null : location.pathname=='/register' ? null : location.pathname=='/kasko_sigortasi/form/temel_Bilgiler' ? null : location.pathname == "/404" ? null: location.pathname == "/servicep" ? null : <FooterAll/>
}

    
        </div>{" "}
      </AnimatePresence>{" "}
    </ThemeProvider>
  );
};

export default App;
