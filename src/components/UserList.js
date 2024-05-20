import React from 'react'

function UserList(props) {
    const {UserLists}=props;
    const {name,age,address}=UserLists;
  return (
    <div>
        <h1>User List</h1>
        <h4>{name}</h4>
        <h4>{age}</h4>
        <h4>{address}</h4>
    </div>
  )
}

export default UserList