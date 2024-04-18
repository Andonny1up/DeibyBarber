import { Routes, Route } from 'react-router-dom';
import GroupsPage from './GroupsPage';
import GroupsCreate from './GroupsCreate';
import GroupsEdit from './GroupsEdit';

const GroupsRoutes = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<GroupsPage/>} />
                <Route path="add" element={<GroupsCreate/>} />
                <Route path="/edit/:id" element={<GroupsEdit/>} />
            </Routes>
        </main>
    );
}

export default GroupsRoutes;