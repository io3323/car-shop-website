import logo from '../../assets/images/logo.jpeg';
import menuIcon from '../../assets/images/menu.png';
import searchIcon from '../../assets/images/search-icon.png';
import React from 'react';
import '../UpBlock/UpBlockComponent.css';
import {useDispatch, useSelector} from 'react-redux';
import {changeState} from '../../redux/reduxSlice/controllerSlice';
import {addNameElement} from '../../redux/reduxSlice/burgerMenuDataSlice';

export const UpBlockComponent = () => {
	const dispatch = useDispatch();
	const buttonBurgerFunc = () => {
		dispatch(changeState());
		dispatch(addNameElement(''));
	};

	return (
		<div className='UpBlock'>
			<div className='LogoContainer'>
				<img src={logo} className={'LogoIcon'}/>
			</div>
			<div className='burgerContainer'>
				<button className='burgerButton' onClick={() => {
					buttonBurgerFunc();
				}}>
					<img src={menuIcon} className='burgerIcon'/>
				</button>
			</div>
			<div className='InputContainer'>
				<img src={searchIcon} className={'SearchIcon'}/>
				<input className='InputStyle' placeholder='Введите название детали' size={20}/>
			</div>
		</div>
	);
};
