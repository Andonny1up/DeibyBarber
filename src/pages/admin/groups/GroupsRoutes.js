import { Routes, Route } from 'react-router-dom';
import GroupsPage from './GroupsPage';
import GroupsCreate from './GroupsCreate';

const GroupsRoutes = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<GroupsPage/>} />
                <Route path="add" element={<GroupsCreate/>} />
                <Route path="/edit/:id" element={<h1>hola</h1>} />
            </Routes>
        </main>
    );
}

export default GroupsRoutes;