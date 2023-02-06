import React from 'react';
import './HitBlockComponent.css';
import {CardHitElement} from './cardElement/CardHitElement';
export const HitBlockComponent = () => (
	<div className='MainHitContainer'>
		<div className={'MainTextContainer'}><text className={'MainHitText'}>Хиты продаж</text></div>
		<div className={'CardHitContainer'}>
			<CardHitElement/>
		</div>
	</div>
);
