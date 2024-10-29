interface Customer {
  customerName: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  status: CustomerStatus;
}

type CustomerStatus = 'Active' | 'Inactive';

export { Customer, CustomerStatus };
