import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Pagination from '../../../components/Pagination';
import ActionButton from '../../../components/ActionButton';
import PageSizeSelector from '../../../components/PageSizeSelector';
import { checkAuth } from '../../../services/authService';
import { useNavigate } from 'react-router-dom';

const ContainerDiv = styled.div`
    overflow-x: auto;
`;

const Table = styled.table`
    width: 100%;
    border: 1px solid ${props => props.theme.text[30]};
`;
const Th = styled.th`
    border: 1px solid ${props => props.theme.text[30]};
    padding: 0.5rem;
`;
const Td = styled.td`
    border: 1px solid ${props => props.theme.text[30]};
    padding: 0.5rem;
`;
const TdActions = styled.td`
    border: 1px solid ${props => props.theme.text[30]};
    padding: 0.5rem;
    display: flex;
    justify-content: end;
    flex-wrap: wrap;
    gap: 0.5rem;
`;
const ContainerOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    let pageSize = 10;
    let pass = true

    const getUsers = async (url = 'http://localhost:8000/api/users/') => {
        try{
            pass = await checkAuth();
            console.log(pass);
            if (!pass) {
                navigate('/login');
                return;
            }
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            });
            let aux = new URL(url);
            let params = new URLSearchParams(aux.search);
            let currentPage = params.get('page');
            if (params.get('page_size')) {
                pageSize = params.get('page_size');
            }
            if (currentPage == null) {
                currentPage = 1;
            }
            setCurrentPage(currentPage);
            setUsers(response.data.results);
            setNextPage(response.data.next);
            setPreviousPage(response.data.previous);
            let totalPages = Math.ceil(response.data.count / pageSize);
            setTotalPages(totalPages);
            console.log(response.data);
        }catch(error){
            console.log(error);
        }
    };

    const handlePageChange = (newPage) =>{
        if (newPage === 'next' && nextPage) {
            getUsers(nextPage);
        }else if(newPage === 'previous' && previousPage){
            getUsers(previousPage);
        }
    }

    const handlePageSizeChange = (newPageSize) => {
        pageSize = newPageSize;
        getUsers(`http://localhost:8000/api/users/?page_size=${newPageSize}`);
    };

    useEffect(() => {
        getUsers();
    },[]);

    return (
        <ContainerDiv>
            <ContainerOptions>
            <Pagination onPageChange={handlePageChange} next={nextPage} previous={previousPage}
                total={totalPages} current={currentPage}
            />
            <PageSizeSelector onPageSizeChange={handlePageSizeChange} />
            </ContainerOptions>
            <Table>
                <thead>
                    <tr>
                        <Th>N°</Th>
                        <Th>Nombre De Usuario</Th>
                        <Th>Nombre</Th>
                        <Th>Correo</Th>
                        <Th>Activo</Th>
                        <Th>Acciones</Th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index) => (
                        <tr key={user.id}>
                            <Td >{index + 1}</Td >
                            <Td>{user.username}</Td>
                            <Td>{user.first_name} {user.last_name}</Td>
                            <Td>{user.email}</Td>
                            <Td>{user.is_active ? 'Si' : 'No'}</Td>
                            <TdActions>
                                <ActionButton/>
                                <ActionButton type={'view'} href={'admin/users/details'}/>
                                <ActionButton type={'edit'} />
                                <ActionButton type={'delete'}/>
                            </TdActions>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </ContainerDiv>
    );
}
export default UsersList;