import React from 'react';
import './App.css';
import data from './data/data.json';
import {UpBlockComponent} from './component/UpBlock/UpBlockComponent';
import {useSelector} from 'react-redux';
import {type RootState} from './redux/store/store';
import {BurgerMenuComponent} from './component/BurgerMenu/BurgerMenuComponent';
import {ImageSliderComponent} from './component/slider/ImageSliderComponent';
import {HitBlockComponent} from './component/hitBlockComponent/HitBlockComponent';

function App() {
	return (
		<div className='App'>
			<UpBlockComponent />
			<BurgerMenuComponent/>
			<ImageSliderComponent/>
			<HitBlockComponent/>
		</div>
	);
}

export default App;
