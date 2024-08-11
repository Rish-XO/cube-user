import React from 'react';
import './CustomerList.css';

interface Customer {
  id: number;
  name: string;
  title: string;
}

interface CustomerListProps {
  customers: Customer[];
  selectedCustomerId: number | null;
  onSelectCustomer: (id: number) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, selectedCustomerId, onSelectCustomer }) => {
  return (
    <div className="customer-list">
      {customers.map(customer => (
        <div
          key={customer.id}
          className={`customer-card ${selectedCustomerId === customer.id ? 'selected' : ''}`}
          onClick={() => onSelectCustomer(customer.id)}
        >
          <h3>{customer.name}</h3>
          <p>{customer.title}</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
