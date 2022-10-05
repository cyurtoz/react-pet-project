import AddUser from "./components/Users/AddUser";
import ListUsers from "./components/Users/ListUsers";
import React, {useState} from 'react'


function App() {

    const [items, setItems] = useState([])

    const addItem = (item) => {
        setItems(prevState => [...prevState, item])
    }

    const deletee = (index) => {
        setItems(items.filter((item, i) => i !== index)
        )
    }

    return (
        <div>
            <AddUser addItem={addItem}></AddUser>
            <ListUsers items={items} onDeleteItem={deletee}></ListUsers>
        </div>
    );
}

export default App;
