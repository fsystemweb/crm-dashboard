import { createReducer, on } from '@ngrx/store';

import { fetchStatsCards, failFetchStatsCards, failedFetchStatsCards, saveStatsCards, savedStatsCards } from './stats-cards.actions';
import { StatsCards } from 'src/app/features/customers/models/stats-cards.interface';

interface StatsCardsState {
  loadingStatsCards: boolean;
  loadedStatsCards: boolean;
  failStatsCards: boolean;
  failedStatsCards: boolean;
  statsCards: StatsCards | undefined;
}

const statsCardsInitialState: StatsCardsState = {
  loadingStatsCards: false,
  loadedStatsCards: false,
  failStatsCards: false,
  failedStatsCards: false,
  statsCards: undefined,
};

const statsCardsReducer = createReducer(
  statsCardsInitialState,

  on(fetchStatsCards, (state) => ({
    ...state,
    loadingStatsCards: true,
    loadedStatsCards: false,
  })),

  on(failFetchStatsCards, (state) => ({
    ...state,
    loadingStatsCards: false,
    loadedStatsCards: false,
    statsCards: { ...state.statsCards } as StatsCards,
    failStatsCards: true,
  })),

  on(failedFetchStatsCards, (state) => ({
    ...state,
    failStatsCards: false,
  })),

  on(saveStatsCards, (state, action) => ({
    ...state,
    loadingStatsCards: true,
    loadedStatsCards: true,
    statsCards: { ...action.statsCards } as StatsCards,
  })),

  on(savedStatsCards, (state) => ({
    ...state,
    loadingStatsCards: false,
    loadedStatsCards: false,
  }))
);

export { StatsCardsState, statsCardsInitialState, statsCardsReducer };
