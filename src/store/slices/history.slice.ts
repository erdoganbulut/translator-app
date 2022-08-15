import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';

interface IHistoryItem {
  q: string; // Text(s) to translate
  source: string; // Source language code
  target: string; // Target language code
  translatedText: string;
}

export interface IHistory {
  history: IHistoryItem[];
}

const initialState: IHistory = {
  history: JSON.parse(localStorage.getItem('translateHistory') || '[]'),
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addToHistory: (_state, action: PayloadAction<IHistoryItem>) => {
      const state = _state;
      state.history = [...state.history, action.payload];
      localStorage.setItem('translateHistory', JSON.stringify(state.history));
    },
    clearHistory: (_state) => {
      const state = _state;
      state.history = [];
      localStorage.removeItem('translateHistory');
    },
  },
  extraReducers: () => {},
});

export const { addToHistory, clearHistory } = historySlice.actions;

export const selectHistory = (state: RootState) => state.history.history;
export const selectHistoryItem = (state: RootState, index: number) => state.history.history[index];

export default historySlice.reducer;
