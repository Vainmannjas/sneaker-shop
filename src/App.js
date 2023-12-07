import Buttons from './components/buttons/Buttons'
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import Input from './components/input/Input';
import Navagation from './components/navigation/Navagation';
import Products from './components/products/Products';


import './styles/main.scss'

function App() {
	return (
		<>
			<Navagation/>
			<Products/>
			<Buttons/>
			<Card/>
			<Input/>
			<Footer/>
		</>
	);
}

export default App;
