import { UserInfo } from 'src/app/shared/models/user-info.interface';

export interface StatsCards {
  totalCustomer: number;
  customerPercentage: number;
  totalMembers: number;
  membersPercentage: number;
  totalUserActive: number;
  userActives: UserInfo[];
}
