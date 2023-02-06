import galaryImageFirst from '../../assets/images/sliderImages/galaryImageFirst.png';
import galaryImageSecond from '../../assets/images/sliderImages/galaryImageSecond.png';
import galaryImageThree from '../../assets/images/sliderImages/galaryImageThree.png';
import leftArrowIcon from '../../assets/images/sliderImages/left.png';
import rightArrowIcon from '../../assets/images/sliderImages/right.png';
import './ImageSliderComponent.css';
import {useEffect, useState} from 'react';
import React from 'react';
const masSliderImage = [galaryImageFirst, galaryImageSecond, galaryImageThree];
export const ImageSliderComponent = () => {
	const [currentState, setCurrentState] = useState(0);
	useEffect(() => {
		setTimeout(() => {
			if (currentState >= 2) {
				setCurrentState(0);
			} else {
				setCurrentState(currentState + 1);
			}
		}, 7000);
		console.log(currentState);
	});
	const leftArrowAction = () => {
		if (currentState <= 0) {
			setCurrentState(2);
		} else {
			setCurrentState(currentState - 1);
		}
	};

	const rightArrowAction = () => {
		if (currentState >= 2) {
			setCurrentState(0);
		} else {
			setCurrentState(currentState + 1);
		}
	};

	return (
		<div className='MainSliderContainer'>
			<img src={leftArrowIcon} className={'LeftIconStyle'} onClick={() => {
				leftArrowAction();
			}}/>
			<img className={'ImageSliderStyle'} src={masSliderImage[currentState]}/>
			<img src={rightArrowIcon} className={'RightIconStyle'} onClick={() => {
				rightArrowAction();
			}}/>
		</div>
	);
};
