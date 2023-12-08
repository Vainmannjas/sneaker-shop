import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'


import './Navigation.scss'

const Navagation = () => {
	return (
		<div className='navigation'>
			<div className="container">

				<div className="navigation__row">
					<input 
						className='navigation__search' 
						type="text" 
						placeholder='Enter your search shoes'
					/>

					<div className="navigation__profile">
						<a href="#!" className="navigation__link-like"><FiHeart className='navigation__icons'/></a>
						<a href="#!" className="navigation__link-cart"><AiOutlineShoppingCart className='navigation__icons'/></a>
						<a href="#!"><AiOutlineUserAdd className='navigation__icons'/></a>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Navagation
