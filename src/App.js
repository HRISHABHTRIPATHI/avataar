
//component
import Header from './components/header/Header';
import Home from './components/home/Home';

import { Box } from '@mui/material';

function App() {
  return (
    <div>
      <Header />
      <Box style={{marginTop: 55}}>
        <Home/>
      </Box>
    </div>
  );
}

export default App;
