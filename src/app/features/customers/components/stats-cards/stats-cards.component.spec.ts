import { TestBed } from '@angular/core/testing';

import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';

import { StatsCardsComponent } from './stats-cards.component';
import { PercentageIndicatorComponent } from '../percentage-indicator/percentage-indicator.component';
import { FormsModule } from '@angular/forms';
import { IconModule } from 'src/app/shared/components/icons/icon.module';
import { getStatsCards } from 'src/app/state/entities/stats-cards/stats-cards.selectors';
import { MathAbsPipe } from 'src/app/shared/pipes/math-abs.pipe';

const MOCK_DATA = {
  selector: getStatsCards,
  value: {
    loadedStatsCards: true,
    statsCards: {
      totalCustomer: 5423,
      customerPercentage: 16,
      totalMembers: 1893,
      membersPercentage: -1,
      totalUserActive: 123,
      userActives: [
        {
          fullname: 'Willie',
          role: 'Manager',
          picture: 'willie.jpeg',
        },
        {
          fullname: 'Brian',
          role: 'Volunteer',
          picture: 'brian.jpeg',
        },
        {
          fullname: 'Eric',
          role: 'Newborn baby',
          picture: 'eric.jpeg',
        },
        {
          fullname: 'Katherine',
          role: 'CTO',
          picture: 'katherine.jpeg',
        },
        {
          fullname: 'Lynn',
          role: 'CFO',
          picture: 'lynn.jpeg',
        },
      ],
    },
  },
};

describe('StatsCardsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, IconModule, MathAbsPipe],
      declarations: [StatsCardsComponent, PercentageIndicatorComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideMockStore({
          selectors: [
            {
              selector: getStatsCards,
              value: {
                loadedStatsCards: true,
                statsCards: MOCK_DATA,
              },
            },
          ],
        }),
      ],
    }).compileComponents();
  });

  it('should get data from store', () => {
    const fixture = TestBed.createComponent(StatsCardsComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.statsCards).toBe(MOCK_DATA);
  });
});
