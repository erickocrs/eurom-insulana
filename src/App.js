import React from 'react'
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./store"

import '~/assets/scss/Fonts.scss';
import '~/assets/scss/Defaults.scss';

import Header from '~/sections/0_Header/Header';
import Content_Header from '~/sections/1_Content_Header/Content_Header';
import Content_Slider from '~/sections/2_Content_Slider/Content_Slider';
import Content_Produtos from '~/sections/3_Content_Produtos/Content_Produtos';
import Content_SaibaMais from '~/sections/4_Content_SaibaMais/Content_SaibaMais';
import Content_Clientes from '~/sections/5_Content_Clientes/Content_Clientes';
import Footer from '~/sections/Footer/Footer';
import Menu from '~/sections/Menu/Menu';
import Scroll from '~/components/Scroll/Scroll'

const App = () => {
  
  return (
    <Provider store={store}>
      {/*<PersistGate loading={null} persistor={persistor}>*/}
        <Header/>
        <Scroll>
          <Content_Header/>
          <Content_Slider/>
          <Content_Produtos/>
          <Content_SaibaMais/>
          <Content_Clientes/>
          <Footer/>
        </Scroll>
        <Menu/>
      {/*</PersistGate>*/}
    </Provider>
  );
}

export default App;