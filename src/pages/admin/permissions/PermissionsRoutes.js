import { Routes, Route } from 'react-router-dom';
import PermissionsPage from './PermissionsPage';
import PermissionsCreate from './PermissionsCreate';
import PermissionsEdit from './PermissionsEdit';

const PermissionsRoutes = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<PermissionsPage/>} />
                <Route path="add" element={<PermissionsCreate/>} />
                <Route path="/edit/:id" element={<PermissionsEdit/>} />
            </Routes>
        </main>
    );
}

export default PermissionsRoutes;