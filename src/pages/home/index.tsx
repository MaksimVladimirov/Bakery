import { Footer } from 'src/widgets/footer';
import { Header } from 'src/widgets/header';
import { FoodSlider } from 'src/widgets/food-slider';
import { Products } from 'src/widgets/products';

const HomePage = () => (
  <>
    <Header />
    <Products/>
    <FoodSlider />
    <Footer />
  </>
);

export default HomePage;
