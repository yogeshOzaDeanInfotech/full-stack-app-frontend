import axios from "axios";
import { useEffect, useState } from "react";

function App() {
    const [usersData, setusersData] = useState([]);
    const getData = async () => {
        const data = await axios.get("http://localhost:5000/api/users");
        setusersData(data.data.users);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>List of users</h1>
            <div>
                {usersData.map((user) => (
                    <div>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
