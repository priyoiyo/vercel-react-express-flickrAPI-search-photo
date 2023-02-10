import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import Home from './pages/Home';
import { Box } from '@mui/system';
import CssBaseline from "@mui/material/CssBaseline";



export function remToPx(value) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value) {
  return `${value / 16}rem`;
}
const FONT_PRIMARY = 'Monospace';

export function responsiveFontSizes({ sm, md, lg }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

const themeDark = createTheme({
  palette: {
    background: {
      default: "#e6ee9c"
    },
    text: {
      primary: "#ffffff"
    }
  },
  typography: {
    fontFamily: FONT_PRIMARY,
    h1: {
      fontWeight: 800,
      lineHeight: 80 / 64,
      fontSize: pxToRem(40),
      ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
    },
    h2: {
      fontWeight: 800,
      lineHeight: 64 / 48,
      fontSize: pxToRem(32),
      ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(24),
      ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
    }

  }
});
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchAble, setIsSearchAble] = useState(false);

  return (
    <ThemeProvider  theme={themeDark}>

      <Navbar setSearchTerm={setSearchTerm} searchTerm={searchTerm} setIsSearchAble={setIsSearchAble}/>
      <Box sx={{marginLeft:"3%", marginRight:"3%"}}>
      <Home searchTerm={searchTerm} setSearchTerm={setSearchTerm} isSearchAble={isSearchAble} setIsSearchAble={setIsSearchAble}/>
      </Box>
      <CssBaseline />

      </ThemeProvider>
  );
}

export default App;
