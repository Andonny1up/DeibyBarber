import { Routes, Route } from 'react-router-dom';
import AdminHeader from './AdminHeader';

const AdminPage = () => {
    return (
        <div>
            <AdminHeader/>
            <Routes>
                <Route path="/" element={<h2>Dashboard</h2>} />
                <Route path="users" element={<h2>Users</h2>} />
                <Route path="products" element={<h2>Products</h2>} />
            </Routes>
        </div>
    );
};

export default AdminPage;