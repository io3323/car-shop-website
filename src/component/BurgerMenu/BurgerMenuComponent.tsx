import data from '../../data/data.json';
import React, {useEffect} from 'react';
import '../BurgerMenu/BurgerMenuComponent.css';
import {useDispatch, useSelector} from 'react-redux';
import {type RootState} from '../../redux/store/store';
import {addFirstMas, addNameElement} from '../../redux/reduxSlice/burgerMenuDataSlice';

export const BurgerMenuComponent = () => {
	const dispatch = useDispatch();
	const controllerState = useSelector((state: RootState) => state.controllerState);
	const burgerMenuDataState = useSelector((state: RootState) => state.burgerMenuDataState);
	const nameAddFunc = (name: string) => {
		dispatch(addNameElement(name));
	};

	useEffect(() => {
		data.mainMenu.forEach((data => {
			if (data.nameCategory === burgerMenuDataState.nameElement) {
				dispatch(addFirstMas({masElementFirst: data.categoryData}));
			}
		}));
	}, [burgerMenuDataState.nameElement]);
	return (
		<div>
			{controllerState.controllerStatus && <div className='BurgerListContainer'>
				<div className={'MainMenuList'}>
					{data.mainMenu.map(data => (
						<div className={'NestCF'} key={`key=${data.nameCategory}`}>
							<ul><text className={'DataCategory'} onMouseEnter={() => {
								nameAddFunc(data.nameCategory);
							}}>{data.nameCategory}</text></ul>
						</div>
					))}
				</div>
				{burgerMenuDataState.nameElement !== '' && <div className={'MassiveElement'}>
					{burgerMenuDataState.masElementFirst!.map(data => (
						<ul key={`key=${data.name}`}><text className={'TextMassiveElement'}>{data.name}</text></ul>
					),
					)}
				</div>}
			</div>}
		</div>
	);
};
