import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Appbar from './Appbar';
import Navbar from './Navbar';
import Stats from './Stats';
import Authentication from './Authentication';
import NewNotes from './NewNotes';
import MyNotes from './MyNotes';
import Docs from './Docs';
import useApiKey from './useApiKey';
import Copyright from "./Copyright";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function App() {
  const { apiKey, setApiKey } = useApiKey();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // The user isn't logged in. Show the login page until we have an API key.
  if (apiKey === "") {
    return <Authentication setApiKey={setApiKey} />
  }

  let Content = NewNotes;
  switch (window.location.pathname) {
    case "/my-notes":
      Content = MyNotes;
      break;
    case "/stats":
      Content = Stats;
      break;
    case "/docs":
      Content = Docs;
      break;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Appbar toggleDrawer={toggleDrawer} open={open} />
        <Navbar toggleDrawer={toggleDrawer} open={open} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Content />
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}