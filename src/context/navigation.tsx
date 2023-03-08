import { createContext, ReactNode, useState, useEffect } from 'react';

interface NavigationProviderType {
  children: ReactNode;
}

interface NavigationContextType {
  currentPath: string;
  navigate: Function;
}

const NavigationContext = createContext<NavigationContextType>({
  currentPath: '',
  navigate: () => {},
});

function NavigationProvider({ children }: NavigationProviderType) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handler);

    return () => {
      window.removeEventListener('popstate', handler);
    };
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
