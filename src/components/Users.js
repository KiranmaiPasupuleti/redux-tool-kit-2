import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addUser,deleteUser,getUser,updateUser } from '../redux/userSlice'

function Users() {
    const [name,setName] = useState("")
    const [userId,setUserId] = useState("")

    //const  count = useSelector((store) => store.counter)
    const {data} = useSelector((store) => store.users)

    const dispatch = useDispatch()

  return (
    <div>
        <h1>Users data : </h1>
        {data.length >0 && data.map((user,index) =>(
            <p key={index}>{user.name}
            <button onClick={() => {
                setUserId(user.id)
                setName(user.name)
            }}>Edit</button>
            <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
            </p>
        ))} 

        <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
        <br/>
        <button onClick={() => 
        {
            if (userId) {
                dispatch(updateUser({id:userId,name}));
            setName("")
            }
            else{
            dispatch(addUser({name}));
            setName("")
            }
        }
        }>
            {userId? "Update" : "save"}
        </button>
        <button onClick={() => dispatch(getUser())}>Get Users</button>
    </div>
  )
}

export default Users