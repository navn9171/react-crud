import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const User = () => {

    const {id} = useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
      });

      useEffect(() => {
          loadUser();
      }, [])

      const loadUser = async()=>{
          const res = await axios.get(`http://localhost:5000/users/${id}`);
          setUser(res.data);
      }

    return (
        <div class="container">
            <h2 className="display-3">User ID : {id}</h2>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">Name : {user.name}</li>
                <li className="list-group-item">Username : {user.username}</li>
                <li className="list-group-item">Email : {user.email}</li>
                <li className="list-group-item">Phone : {user.phone}</li>
                <li className="list-group-item">Website : {user.website}</li>
            </ul>
            <hr /><hr />
            <Link to="/">
                <button className="btn btn-primary">Back to Home</button>
            </Link>
        </div>
    )
}

export default User
