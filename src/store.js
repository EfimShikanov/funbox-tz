import {configureStore} from "@reduxjs/toolkit";
import cardReducer from './slices/cardsSlice';

export const store = configureStore({
	reducer: {
		cards: cardReducer
	}
})