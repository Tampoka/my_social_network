import React, {ProviderProps} from "react";
import store from "./redux/redux-store";

const StoreContext = React.createContext(store);

export const Provider = (props: ProviderProps<any>) => {
    return <StoreContext.Provider value={store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext