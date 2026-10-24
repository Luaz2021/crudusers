import { useEffect, useState } from "react";
import "./App.css";
import { UsersForm } from "./components/UsersForm";
import { UsersList } from "./components/UsersList";
import { getStoredUsers, saveStoredUsers } from "./services/userService";

export default function App() {
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    const localData = getStoredUsers();
    setUsers(localData);
  }, []);

  const createUser = (newUser) => {
    const userWithId = {
      ...newUser,
      id: Date.now()
    };
    const updatedList = [userWithId, ...users];
    setUsers(updatedList);
    saveStoredUsers(updatedList);
  };

  const selectUser = (selectedUser) => setEdit(selectedUser);

  const updateUser = (updatedUser) => {
    const updatedList = users.map(u => (u.id === updatedUser.id ? updatedUser : u));
    setUsers(updatedList);
    saveStoredUsers(updatedList);
    setEdit(null);
  };

  const deleteUser = (id) => {
    const updatedList = users.filter(u => u.id !== id);
    setUsers(updatedList);
    saveStoredUsers(updatedList);
    if (edit && edit.id === id) {
      setEdit(null);
    }
  };

  return (
    <div className="App">
      <section className="contain">
        <UsersList 
          users={users} 
          deleteUser={deleteUser}
          selectUser={selectUser}
        />
        <UsersForm 
          createUser={createUser}
          edit={edit}
          selectUser={selectUser}
          updateUser={updateUser}
        />
      </section>
    </div>
  );
}
