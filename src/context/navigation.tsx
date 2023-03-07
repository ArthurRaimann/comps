import React, {createContext, ReactNode} from 'react'

interface NavigationProviderType{
    children: ReactNode
}

const NavigationContext = createContext({})

function NavigationProvider({children}: NavigationProviderType) {
    return <NavigationContext.Provider value={{}}>
        {children}
    </NavigationContext.Provider>
}

export {NavigationProvider}
export default NavigationContext