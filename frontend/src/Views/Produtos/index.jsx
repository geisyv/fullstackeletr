import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Categories from '../../Components/Categorias';
import CardsProducts from '../../Components/Products';

const Products = () => {
  return (
    <div className='container-fluid'>
      <Header />
      <h1>Produtos</h1>
      <hr />
      <div className='row'>
        <div className='col-3'>
          <Categories />
        </div>
        <div className='col-9'>
          <CardsProducts />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;