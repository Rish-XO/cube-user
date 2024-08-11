import React, { useEffect, useState } from 'react';
import './App.css';
import CustomerList from './components/CustomerList';


interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
}

const App: React.FC = () => {
  // Sample customer data
  const customers: Customer[] = [
    { id: 1, name: 'Arjun Sharma', title: 'Chief Executive Officer - Leading the company towards growth and innovation', address: '123 MG Road, Bengaluru, Karnataka 560001' },
    { id: 2, name: 'Priya Verma', title: 'Chief Technology Officer - Overseeing the technological developments and strategies', address: '456 Connaught Place, New Delhi, Delhi 110001' },
    { id: 3, name: 'Rohan Mehta', title: 'Chief Financial Officer - Managing financial planning and risk management', address: '789 Marine Drive, Mumbai, Maharashtra 400020' },
    { id: 4, name: 'Sonal Patel', title: 'Chief Operating Officer - Ensuring efficient operations and business processes', address: '101 SG Highway, Ahmedabad, Gujarat 380015' },
    { id: 5, name: 'Vikram Singh', title: 'Chief Marketing Officer - Driving marketing strategies and brand management', address: '202 Banjara Hills, Hyderabad, Telangana 500034' },
    { id: 6, name: 'Neha Gupta', title: 'Vice President of Sales - Leading sales teams and strategies for revenue growth', address: '303 Park Street, Kolkata, West Bengal 700016' },
    { id: 7, name: 'Amit Desai', title: 'Vice President of Engineering - Guiding engineering teams to innovate and deliver', address: '404 OMR Road, Chennai, Tamil Nadu 600097' },
    { id: 8, name: 'Kavita Joshi', title: 'Vice President of Marketing - Crafting marketing campaigns to enhance brand presence', address: '505 Fatehabad Road, Agra, Uttar Pradesh 282001' },
    { id: 9, name: 'Rajesh Iyer', title: 'Vice President of Product - Steering product development and lifecycle management', address: '606 FC Road, Pune, Maharashtra 411004' },
    { id: 10, name: 'Meena Reddy', title: 'Vice President of Customer Success - Ensuring customer satisfaction and retention', address: '707 Jubilee Hills, Hyderabad, Telangana 500033' }
  ];

  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [images, setImages] = useState<string[]>([]);

  const handleSelectCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
    fetchImages();
};
  const fetchImages = async () => {
    const newImages = [];
    for (let i = 0; i < 9; i++) {
      newImages.push(`https://picsum.photos/100?random=${Math.floor(Math.random() * 1000)}`);
    }
    setImages(newImages);
  };

  useEffect(() => {
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
        selectedCustomer={selectedCustomer}
        onSelectCustomer={handleSelectCustomer}
    />
    <div className="customer-details">
        {selectedCustomer ? (
            <div>
                <h2>{selectedCustomer.name}</h2>
                <p><strong>Title:</strong> {selectedCustomer.title}</p>
                <p><strong>Address:</strong> {selectedCustomer.address}</p>
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
