import { Routes, Route } from 'react-router-dom';
import UsersPage from './UsersPage';

const UsersRoutes = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<UsersPage/>} />
                <Route path="add" element={<h2>Create User</h2>} />
                <Route path="edit:id" element={<h2>Edit User</h2>} />
                <Route path="details:id" element={<h2>Delete User</h2>} />
            </Routes>
        </main>
    );
}

export default UsersRoutes;