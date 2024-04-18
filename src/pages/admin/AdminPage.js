import { Routes, Route } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import UsersRoutes from './users/UsersRoutes';
import GroupsRoutes from './groups/GroupsRoutes';
import PermissionsRoutes from './permissions/PermissionsRoutes';

const AdminPage = () => {
    return (
        <div>
            <AdminHeader/>
            <Routes>
                <Route path="/" element={<h2>Dashboard</h2>} />
                <Route path="users/*" element={<UsersRoutes/>} />
                <Route path="groups/*" element={<GroupsRoutes/>} />
                <Route path="permissions/*" element={<PermissionsRoutes/>} />
                <Route path="settings" element={<h2>Products</h2>} />
            </Routes>
        </div>
    );
};

export default AdminPage;