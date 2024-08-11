import React, { useEffect, useState } from 'react';
import './App.css';
import CustomerList from './components/CustomerList';


interface Customer {
  id: number;
  name: string;
  title: string;
}

const App: React.FC = () => {
  // Sample customer data
  const customers: Customer[] = [
    { id: 1, name: 'Customer 01', title: 'Title 01' },
    { id: 2, name: 'Customer 02', title: 'Title 02' },
    { id: 3, name: 'Customer 03', title: 'Title 03' },
    { id: 4, name: 'Customer 04', title: 'Title 04' },
    // Add more customers as needed...
  ];

  // State to keep track of the selected customer
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);
  const [images, setImages] = useState<string[]>([]);

  const handleSelectCustomer = (id: number) => {
    setSelectedCustomerId(id);
  };

  useEffect(() => {
    const fetchImages = async () => {
      const newImages = [];
      for (let i = 0; i < 9; i++) {
        newImages.push(`https://picsum.photos/150?random=${Math.floor(Math.random() * 1000)}`);
      }
      setImages(newImages);
    };
    fetchImages();

    // Set interval to update images every 10 seconds
    const intervalId = setInterval(fetchImages, 10000);

    // Clean up the interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="app-container">
      <CustomerList
        customers={customers}
        selectedCustomerId={selectedCustomerId}
        onSelectCustomer={handleSelectCustomer}
      />
      <div className="customer-details">
        {/* Customer details will be displayed here */}
        {selectedCustomerId !== null ? (
          <div>
            <h2>Customer {selectedCustomerId} details here</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            <div className="photo-grid">
              {images.map((image, index) => (
                <img key={index} src={image} alt={`Random ${index}`} />
              ))}
            </div>
          </div>
        ) : (
          <p>Select a customer to view details</p>
        )}
      </div>
    </div>
  );
};

export default App;
