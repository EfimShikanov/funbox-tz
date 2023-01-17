import React from 'react';
import S from "./CardsContainer.module.css";
import Card from "../card/Card";
import {useSelector} from "react-redux";

const CardsContainer = () => {

	const cards = useSelector((state) => state.cards.cards);
	const renderCards = () => {
		return cards.map((card, index) => {
			return <Card
				key={index}
				index={index}
				isHovered={card.isHovered}
				isSelected={card.isSelected}
				isDisabled={card.isDisabled}
				cardDetails={card.cardDetails}
				color={card.color}
			/>
		})
	}

	return (
		<div className={S.cards}>
			<div className={S.containerHeader}>
				Ты сегодня покормил кота?
			</div>
			<div className={S.cardsContainer}>
				{renderCards()}
			</div>
		</div>
	);
};

export default CardsContainer;