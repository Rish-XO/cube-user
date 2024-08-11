import React from 'react';
import './CustomerList.css';

interface Customer {
  id: number;
  name: string;
  title: string;
  address: string; 
}

interface CustomerListProps {
  customers: Customer[];
  selectedCustomer: Customer | null;
  onSelectCustomer: (customer: Customer) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, selectedCustomer, onSelectCustomer }) => {
  return (
    <div className="customer-list">
      {customers.map(customer => (
        <div
          key={customer.id}
          className={`customer-card ${selectedCustomer && selectedCustomer.id === customer.id ? 'selected' : ''}`}
          onClick={() => onSelectCustomer(customer)}
        >
          <h3>{customer.name}</h3>
          <p>{customer.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
