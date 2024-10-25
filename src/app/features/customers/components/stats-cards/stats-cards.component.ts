import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StatsCards } from '../../models/stats-cards.interface';

@Component({
  selector: 'app-stats-cards',
  templateUrl: './stats-cards.component.html',
  styleUrls: ['./stats-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsCardsComponent {
  statsCards: StatsCards = {
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
  };
}
