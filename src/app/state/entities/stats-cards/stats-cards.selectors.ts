import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as StatsCardsReducer from './stats-cards.reducer';

const getStatsCardsState = createFeatureSelector<StatsCardsReducer.StatsCardsState>('statsCards');

const getStatsCards = createSelector(getStatsCardsState, (state: StatsCardsReducer.StatsCardsState) => ({
  loadingStatsCards: state?.loadingStatsCards,
  loadedStatsCards: state?.loadedStatsCards,
  statsCards: { ...state.statsCards },
  failStatsCards: state?.failStatsCards,
}));

export { getStatsCardsState, getStatsCards };
