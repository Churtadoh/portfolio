import React, {useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";
import Footer from "./Footer/Footer"

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(true);

   function handleClick() {
      setDarkMode(!darkMode);
   }

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleClick}/>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/portfolio/'} element={<Home/>}/>
                  <Route exact path={'/portfolio/about'} element={<About/>}/>
                  <Route exact path={'/portfolio/proyects'} element={<Portfolio/>}/>
               </Routes>
            </Grid>
            <Grid item>
               <Footer darkMode={darkMode} handleClick={handleClick}/>
            </Grid>
         </Grid>
      </Box>
   )
}

