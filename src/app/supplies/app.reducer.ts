import { createReducer, on } from '@ngrx/store';
import { setCity } from './app.actions';
import { AppState } from './app.state';

const initialState: AppState = {
  value: null,
};

export const appReducer = createReducer(
    initialState,
    on(setCity, (state, { value }) => ({
      ...state,
      value: value,
    }))
  );