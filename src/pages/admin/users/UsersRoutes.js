import { Routes, Route } from 'react-router-dom';
import UsersPage from './UsersPage';
import UsersDetails from './UsersDetails';

const UsersRoutes = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<UsersPage/>} />
                <Route path="add" element={<h2>Create User</h2>} />
                <Route path="/edit/:id" element={<h2>Edit User</h2>} />
                <Route path="/details/:id" element={<UsersDetails/>} />
            </Routes>
        </main>
    );
}

export default UsersRoutes;