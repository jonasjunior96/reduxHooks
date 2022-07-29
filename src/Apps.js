import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import ItemsList from "./components/CourseList";

function App() {
    return(
        <Provider store={store}>
            <ItemsList />
        </Provider>
    );
}


export default App;