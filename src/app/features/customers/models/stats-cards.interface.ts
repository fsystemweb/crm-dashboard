import { UserInfo } from '@crm-dashboard/shared';

export interface StatsCards {
  totalCustomer: number;
  customerPercentage: number;
  totalMembers: number;
  membersPercentage: number;
  totalUserActive: number;
  userActives: UserInfo[];
}
