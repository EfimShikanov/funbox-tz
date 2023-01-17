import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	cards: [
		{
			isHovered: false,
			isSelected:false,
			isDisabled:false,
			color: "#1698D9",
			cardDetails: {
				ingredient: "с фуа-гра",
				weight: "0,5",
				description: "Печень утки разварная с артишоками.",
				additional: [
					10,
					1
				]
			}
		},
		{
			isHovered: false,
			isSelected:false,
			isDisabled:false,
			color: "#1698D9",
			cardDetails: {
				ingredient: "с рыбой",
				weight: "2",
				description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
				additional: [
					40,
					2
				]
			}
		},
		{
			isHovered: false,
			isSelected:false,
			isDisabled:true,
			color: "#1698D9",
			cardDetails: {
				ingredient: "с курой",
				weight: "5",
				description: "Филе из цыплят с трюфелями в бульоне.",
				additional: [
					100,
					5,
					"заказчик доволен"
				]
			}
		},
	],
	colors: {
		default: "#1698D9",
		hovered: "#2EA8E6",
		selected: "#D91667",
		selectedHovered: "#E52E7A"
	}
}

export const cardsSlice = createSlice({
	name: 'cards',
	initialState,
	reducers: {
		switchIsHovered: (state, action) => {
			state.cards[action.payload].isHovered = !state.cards[action.payload].isHovered;
			cardsSlice.caseReducers.getColor(state, action)
		},
		switchIsSelected: (state, action) => {
			state.cards[action.payload].isSelected = !state.cards[action.payload].isSelected;
			if(state.cards[action.payload].isSelected) {
				state.cards[action.payload].isHovered = false;
			}
			cardsSlice.caseReducers.getColor(state, action)
		},
		switchIsDisabled: (state, action) => {
			state.cards[action.payload].isDisabled = !state.cards[action.payload].isDisabled;
			cardsSlice.caseReducers.getColor(state, action)
		},
		getColor: (state, action) => {
			if(state.cards[action.payload].isHovered || state.cards[action.payload].isSelected) {
				if(state.cards[action.payload].isHovered) {
					if(state.cards[action.payload].isSelected) {
						state.cards[action.payload].color = state.colors.selectedHovered
					} else {
						state.cards[action.payload].color = state.colors.hovered
					}
				} else {
					state.cards[action.payload].color = state.colors.selected
				}
			} else {
				state.cards[action.payload].color = state.colors.default
			}
		}
	}
});

export const {switchIsHovered, switchIsSelected, switchIsDisabled, getColor} = cardsSlice.actions;
export default cardsSlice.reducer;