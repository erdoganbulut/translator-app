import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import translateReducer from './slices/translate.slice';
import historyReducer from './slices/history.slice';

export const store = configureStore({
  reducer: {
    translate: translateReducer,
    history: historyReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
