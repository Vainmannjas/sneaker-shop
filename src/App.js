import Buttons from './components/buttons/Buttons'
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import Input from './components/input/Input';
import Navagation from './components/navigation/Navagation';
import Products from './components/products/Products';
import Recommended from './components/recommended/Recommended';
import Category from './components/sidebar/category/Category';
import Colors from './components/sidebar/colors/Colors';
import Price from './components/sidebar/price/Price';


import './styles/main.scss'

function App() {
	return (
		<>
			<Navagation/>
			<Products/>
			<Recommended/>
			<Category/>
			<Colors/>
			<Price/>
			<Buttons/>
			<Card/>
			<Input/>
			<Footer/>
		</>
	);
}

export default App;
