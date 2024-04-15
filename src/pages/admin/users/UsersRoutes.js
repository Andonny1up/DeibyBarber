import { Routes, Route } from 'react-router-dom';
import UsersPage from './UsersPage';
import UsersDetails from './UsersDetails';
import UsersCreate from './UsersCreate';
import UsersEdit from './UsersEdit';

const UsersRoutes = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<UsersPage/>} />
                <Route path="add" element={<UsersCreate/>} />
                <Route path="/edit/:id" element={<UsersEdit/>} />
                <Route path="/details/:id" element={<UsersDetails/>} />
            </Routes>
        </main>
    );
}

export default UsersRoutes;