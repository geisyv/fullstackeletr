import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main style={{ height: '70vh', margin: '20px' }}>
        <h2>Seja bem-vinde!</h2>
        <p>
          Aqui em nossa loja, <em>programadores tem desconto</em> nos produtos
          para a sua casa!
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
