import React from 'react';
import {useDispatch} from "react-redux";
import {switchIsHovered, switchIsSelected} from "./../../slices/cardsSlice";
import S from "./Card.module.css";

const Card = (props) => {

	const dispatch = useDispatch();

	const renderTopText = () => {
		if(props.isSelected && props.isHovered) {
			return (
				<div style={{color: props.color}}>Котэ не одобряет?</div>
			)
		} else {
			return (
				<div>Сказочное заморское яство</div>
			)
		}
	}

	const renderDetails = () => {
		return props.cardDetails.additional.map((item, index) => {
			switch (index) {
				case 0: {
					return <div><b>{item}</b> порций</div>
				}
				case 1: {
					if(item === 1) {
						return <div>мышь в подарок</div>
					} else if(item === 2) {
						return <div><b>{item}</b> мыши в подарок</div>
					} else if(item === 5) {
						return <div><b>{item}</b> мышей в подарок</div>
					} else return null
				}
				default: {
					return <div>заказчик доволен</div>
				}
			}
		})
	}

	const renderBottomText = () => {
		if(props.isSelected) {
			return (
				<>
					<div className={S.bottomText}>
						{props.cardDetails.description}
					</div>
				</>
			)
		} else if(props.isDisabled) {
			return (
				<>
					<div className={S.bottomTextDisabled}>
						Печалька, {props.cardDetails.ingredient} закончился
					</div>
				</>
			)
		} else {
			return (
				<>
					<div className={S.bottomText}>
						Чего сидишь? Порадуй котэ,
					</div>
					<div
						className={S.bottomTextButton}
						onClick={() => dispatch(switchIsSelected(props.index))}
					>
						купи.
					</div>
				</>
			)
		}
	}

	const mouseEnterHandler = () => {
		if(!props.isDisabled) {
			if(!props.isHovered) {
				dispatch(switchIsHovered(props.index))
			}
		}
	}

	const mouseLeaveHandler = () => {
		if(!props.isDisabled) {
			if(props.isHovered) {
				dispatch(switchIsHovered(props.index))
			}
		}

	}

	const clickHandler = () => {
		if(!props.isDisabled) {
			dispatch(switchIsSelected(props.index))
		}
	}

	return (
		<div
			className={S.cardContainer}
		>
			<div
				className={props.isDisabled ? S.cardBackgroundDisabled : S.cardBackground}
				style={{background: props.color}}
				onMouseEnter={mouseEnterHandler}
				onMouseLeave={mouseLeaveHandler}
				onClick={clickHandler}
			>
				<div className={S.card}>
					<div className={S.cardHeaderSmall}>{renderTopText()}</div>
					<div className={S.cardHeader}>Нямушка</div>
					<div className={S.cardHeaderIngredient}>{props.cardDetails.ingredient}</div>
					<div className={S.cardDetails}>
						{renderDetails()}
					</div>
					<div className={S.image}>
					</div>
					<div
						className={S.weight}
						style={{background: props.color}}
					>
						<div>
							{props.cardDetails.weight}
						</div>
						<div className={S.measureItem}>
							кг
						</div>
					</div>
				</div>
			</div>
			<div className={S.bottomTextContainer}>
				{renderBottomText()}
			</div>
		</div>
	);
};

export default Card;