import { createAction, props } from '@ngrx/store';
import { CityCard } from './interfaces/city-info.interface';

export const setCity = createAction('Weather App Set Variable', props<{ value: CityCard }>());