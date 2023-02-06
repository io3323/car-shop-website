import React, {useEffect} from 'react';
import './CardHitElement.css';
import data from '../../../../src/data/data.json';
import {useDispatch, useSelector} from 'react-redux';
import {type RootState} from '../../../redux/store/store';
import {addHitProduct} from '../../../redux/reduxSlice/hitProductSlice';
export const CardHitElement = () => {
	const hitProductState = useSelector((state: RootState) => state.hitProductState);
	const dispatch = useDispatch();
	useEffect(() => {
		data.mainMenu.forEach(data => {
			if (data.nameCategory === 'Инструменты') {
				data.categoryData.forEach(data => {
					if (data.name === 'Ключи') {
						data.data.forEach((data: {nameElement: string; url: string}) => {
							dispatch(addHitProduct({nameCategory: data.nameElement, url: data.url}));
						});
					}
				});
			}
		});
	}, []);
	console.log(hitProductState);
	return (
		<div className={'CardStyle'}>
			{hitProductState.map(element => (
				<>
					{element.nameCategory !== '' && <div key={`${element.nameCategory}`} className='TestHit'>
						<text className={'TextCardStyle'}>{element.nameCategory}</text>
						<div className={'ImageContainer'}>
							<img src={element.url} className={'ImageCardStyle'}/>
						</div>
					</div>}
				</>
			))}
		</div>
	);
};
