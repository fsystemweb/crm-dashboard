import { createAction, props } from '@ngrx/store';
import { StatsCards } from 'src/app/features/customers/models/stats-cards.interface';

const fetchStatsCards = createAction('[Stats Cards] Fetch');

const failFetchStatsCards = createAction('[Stats Cards] Fail');

const failedFetchStatsCards = createAction('[Stats Cards] Failed');

const saveStatsCards = createAction('[Stats Cards] Save', props<{ statsCards: StatsCards }>());

const savedStatsCards = createAction('[Stats Cards] Saved');

export { fetchStatsCards, failFetchStatsCards, failedFetchStatsCards, saveStatsCards, savedStatsCards };
