import '~/assets/scss/Fonts.scss';
import '~/assets/scss/Defaults.scss';

import Header from '~/sections/0_Header/Header';
import Content_Header from '~/sections/1_Content_Header/Content_Header';
import Content_Slider from '~/sections/2_Content_Slider/Content_Slider';
import Content_Produtos from '~/sections/3_Content_Produtos/Content_Produtos';
import Content_SaibaMais from '~/sections/4_Content_SaibaMais/Content_SaibaMais';
import Content_Clientes from '~/sections/5_Content_Clientes/Content_Clientes';
import Footer from '~/sections/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Content_Header/>
      <Content_Slider/>
      <Content_Produtos/>
      <Content_SaibaMais/>
      <Content_Clientes/>
      <Footer/>
    </>
  );
}

export default App;
