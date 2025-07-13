export const bootstrap = (): void => {
  type Person = {
    name: string;
    age: number;
  };

  type Employee = {
    departament: string;
  };

  type Customer = {
    wishlist: string[];
  };

  type EmployeeDetails = Person & Employee;

  const eployee: EmployeeDetails = {
    name: 'Lucas',
    age: 45,
    departament: 'TI',
  };

  type CustomerDetails = Person & Customer;

  const customer: CustomerDetails = {
    name: ' Josefa',
    age: 28,
    wishlist: ['SmartPhones', 'Laptop', 'Headphones'],
  };
};
