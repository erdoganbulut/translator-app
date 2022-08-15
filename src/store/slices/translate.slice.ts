import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';
import request, { ERequestStatus } from '../../common/request';
import { addToHistory } from './history.slice';

export interface ILanguage {
  code: string;
  name: string;
}

export interface ITranslate {
  q: string; // Text(s) to translate
  source: string; // Source language code
  target: string; // Target language code
  translatedText: string;
  status: ERequestStatus;
  languages: ILanguage[];
  languagesStatus: ERequestStatus;
}

const initialState: ITranslate = {
  q: '',
  source: 'en',
  target: 'tr',
  translatedText: '',
  status: ERequestStatus.IDLE,
  languages: [],
  languagesStatus: ERequestStatus.IDLE,
};

export const postTranslate = createAsyncThunk(
  'translate/postTranslate',
  async (arg, { getState, dispatch }) => {
    const state = getState() as RootState;
    const response = await request.post<string, ITranslate>(
      `translate`,
      JSON.stringify({
        q: state.translate.q,
        source: state.translate.source,
        target: state.translate.target,
      }),
    );
    dispatch(
      addToHistory({
        q: state.translate.q,
        source: state.translate.source,
        sourceName:
          state.translate.languages.find((o) => o.code === state.translate.source)?.name || '',
        target: state.translate.target,
        targetName:
          state.translate.languages.find((o) => o.code === state.translate.target)?.name || '',
        translatedText: response.translatedText,
      }),
    );
    return response;
  },
);

export const getLanguages = createAsyncThunk('translate/getLanguages', async () => {
  const response = await request.get<ILanguage[]>(`languages`);
  return response;
});

export const translateSlice = createSlice({
  name: 'translate',
  initialState,
  reducers: {
    setQ: (_state, action: PayloadAction<string>) => {
      const state = _state;
      state.q = action.payload;
    },
    setSource: (_state, action: PayloadAction<string>) => {
      const state = _state;
      state.source = action.payload;
    },
    setTarget: (_state, action: PayloadAction<string>) => {
      const state = _state;
      state.target = action.payload;
    },
    setTranslatedText: (_state, action: PayloadAction<string>) => {
      const state = _state;
      state.translatedText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postTranslate.pending, (_state) => {
        const state = _state;
        state.status = ERequestStatus.LOADING;
      })
      .addCase(postTranslate.fulfilled, (_state, action) => {
        const state = _state;
        state.status = ERequestStatus.SUCCEEDED;
        state.translatedText = action.payload.translatedText;
      })
      .addCase(postTranslate.rejected, (_state) => {
        const state = _state;
        state.status = ERequestStatus.FAILED;
      })
      .addCase(getLanguages.pending, (_state) => {
        const state = _state;
        state.languagesStatus = ERequestStatus.LOADING;
      })
      .addCase(getLanguages.fulfilled, (_state, action) => {
        const state = _state;
        state.languagesStatus = ERequestStatus.SUCCEEDED;
        state.languages = action.payload;
      })
      .addCase(getLanguages.rejected, (_state) => {
        const state = _state;
        state.languagesStatus = ERequestStatus.FAILED;
      });
  },
});

export const { setQ, setSource, setTarget, setTranslatedText } = translateSlice.actions;

export const selectQ = (state: RootState) => state.translate.q;
export const selectSource = (state: RootState) => state.translate.source;
export const selectTarget = (state: RootState) => state.translate.target;
export const selectStatus = (state: RootState) => state.translate.status;
export const selectTranslatedText = (state: RootState) => state.translate.translatedText;
export const selectLanguages = (state: RootState) => state.translate.languages;
export const selectLanguagesStatus = (state: RootState) => state.translate.languagesStatus;

export default translateSlice.reducer;
