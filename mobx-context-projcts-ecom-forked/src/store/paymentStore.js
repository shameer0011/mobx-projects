import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppPaymentProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpenOfPayment, setIsModalOpen] = useState("open payment section bar");
  const [payment , setPayment] = useState([
    {
        id: 1,
        name: "Product 1",
        price: "100",
    },
    {
        id: 2,
        name: "Product 2",
        price: "200",
    },
  ]);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpenOfPayment,
        payment
      }}
    >
      {children} 
      {/* only using tags whic is implemented in main routes like
       <AppProvider>
      <Switch>
       <route exact path="/" component={Home}/> />
      </Switch>
      </AppProvider> */}
    </AppContext.Provider>
  );
};

//using custome hook instead of AppProvider

const useGlobalContextOfPayment = () => useContext(AppContext);

export { AppContext, AppPaymentProvider, useGlobalContextOfPayment };