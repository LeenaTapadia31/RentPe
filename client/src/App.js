import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/default';
import { Box } from '@mui/material'
import About from './Components/About';
import Contact from './Components/Contact';
//components
import Header from './Components/Header/Header';
import DetailView from './Components/ItemDetails/DetailView';
import TemplateProvider from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{marginTop: 54}}>
            <Routes>
              <Route path= '/' element={<Home />} />
              <Route path= '/cart' element={<Cart />} />
              <Route path= '/product/:id' element={<DetailView />} />
              <Route path='/about' element={<About/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
            </Routes>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    
  );
}

export default App;