import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppCardProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState("open product bar");
  const [cart , setCard] = useState([
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
        isModalOpen,
        cart
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

const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppCardProvider, useGlobalContext };