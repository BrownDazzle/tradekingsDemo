"use client";

import { Provider } from "react-redux"
import store from "./store";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }) => {
    return (
        <Provider store={store}>
            <Toaster position='top-center' reverseOrder={false} />
            {children}
        </Provider>
    )
}

export default Providers