import React, {useCallback, useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Pagination from '../../../components/Pagination';
import ActionButton from '../../../components/ActionButton';
import PageSizeSelector from '../../../components/PageSizeSelector';
import SearchInput from '../../../components/SearchInput';
import { checkAuth } from '../../../services/authService';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../../../components/ConfirmModal';

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

const GroupsList = () => {
    const [data, setData] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [PageSize, setPageSize] = useState(10);
    const [Search, setSearch] = useState('');
    const navigate = useNavigate();
    const pageSizeRef = useRef(10);

    // para eliminar un usuario
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const handleOpenModal = (id) => {
        setIsModalOpen(true);
        setDeleteId(id);
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setDeleteId(null);
    }
    const handleConfirmDelete = async (GroupId) => {
        try{
            const pass = await checkAuth();
            console.log(pass);
            if (!pass) {
                navigate('/login');
                return;
            }
            const response = await axios.delete(`http://localhost:8000/api/groups/${GroupId}/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            });
            console.log(response.data);
            handleCloseModal();
            window.location.reload();
        }catch(error){
            console.log(error);
        }
    };

    const getData = useCallback(
        async (url = 'http://localhost:8000/api/groups/') => {
        try{
            const pass = await checkAuth();
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
                pageSizeRef.current = params.get('page_size');
            }
            if (currentPage == null) {
                currentPage = 1;
            }
            setCurrentPage(currentPage);
            setData(response.data.results);
            setNextPage(response.data.next);
            setPreviousPage(response.data.previous);
            let totalPages = Math.ceil(response.data.count / pageSizeRef.current);
            setTotalPages(totalPages);
            console.log(response.data);
        }catch(error){
            console.log(error);
        }
    },[navigate]);

    const handlePageChange = (newPage) =>{
        if (newPage === 'next' && nextPage) {
            getData(nextPage);
        }else if(newPage === 'previous' && previousPage){
            getData(previousPage);
        }
    }

    const handlePageSizeChange = (newPageSize) => {
        setPageSize(newPageSize);
        if (Search.length >= 3) {
            console.log(Search);
            getData(`http://localhost:8000/api/groups/?page_size=${newPageSize}&search=${Search}`);
        }else{
            getData(`http://localhost:8000/api/groups/?page_size=${newPageSize}`);
        }
    };

    const handleSearchChange = (search) => {
        if(search.length >= 3){
            setSearch(search);
            if (PageSize !== 10) {
                getData(`http://localhost:8000/api/groups/?page_size=${PageSize}&search=${search}`);
            }else{
                getData(`http://localhost:8000/api/groups?search=${search}`);
            }
        }else if(search.length === 0){
            setSearch(search);
            if (PageSize !== 10) {
                getData(`http://localhost:8000/api/groups/?page_size=${PageSize}`);
            }else{
                getData(`http://localhost:8000/api/groups/`);
            }
        }
    }

    useEffect(() => {
        getData();
    },[getData]);

    return (
        <ContainerDiv>
            <SearchInput onChange={handleSearchChange}/>
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
                        <Th>Nombre</Th>
                        <Th>Acciones</Th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((group,index) => (
                        <tr key={group.id}>
                            <Td>{index + 1}</Td >
                            <Td>
                                {group.name}
                            </Td>
                            <TdActions>
                                <ActionButton type={'edit'} href={`groups/edit/${group.id}`}/>
                                <ActionButton type={'delete'} onClick={() => handleOpenModal(group.id)}/>
                            </TdActions>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <ConfirmModal isOpen={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmDelete} itemId={deleteId}/>
        </ContainerDiv>
    );
}
export default GroupsList;