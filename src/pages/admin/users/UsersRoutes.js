import { Routes, Route } from 'react-router-dom';

const UsersRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<h2>Users</h2>} />
            <Route path="add" element={<h2>Create User</h2>} />
            <Route path="edit:id" element={<h2>Edit User</h2>} />
            <Route path="detaild:id" element={<h2>Delete User</h2>} />
        </Routes>
    );
}

export default UsersRoutes;