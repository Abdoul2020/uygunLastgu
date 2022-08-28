import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  CreateContainer,
  Header,
  KasoTeklif,
  MainContainer,
  UnderHeader,
  TemelInfo,
} from "./components";




import Login4 from "./components/pages/Login4";
import RegisterPage from "./components/pages/RegisterPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import themeFile from "./utils/theme";
import { Grid } from "@mui/material";

const theme = createTheme(themeFile);

const App = (props) => {
  

  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
        <div className="w-screen h-auto flex flex-col bg-primary">
          <Header />
          <main className="mt-14 md:mt-20 pt-4 w-full">
            <UnderHeader />
            <Routes>
              <Route path="/*" element={<MainContainer />} />{" "}
              {/* <Route path="/createItem" element={<CreateContainer />} />{" "} */}{" "}
              <Route path="/login" element={<Login4 />} />{" "}
              <Route path="/Register" element={<RegisterPage />} />{" "}
              <Route path="/kasko_sigorta" element={<KasoTeklif />} />{" "}
              <Route
                path="/kasko_sigortasi/form/temel_Bilgiler"
                element={<TemelInfo />}
              />{" "}
            </Routes>{" "}
          </main>{" "}
        </div>{" "}
      </AnimatePresence>{" "}
    </ThemeProvider>
  );
};

export default App;
