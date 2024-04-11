import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import NavItemIcon from './NavItemIcon';
import NavDropdown from './NavDropdown';
import DropdownItem from './DropdownItem';
import DeibyLogo from './DeibyLogo';
import BurgerButton from './BurgerButton';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const StyledAside = styled.aside`
    background-color: ${props => props.theme.background[20]};
    min-width: 320px;
    max-width: 400px;
    height: 100vh;
    box-shadow: 0 0 1rem rgba(255, 255, 255, 0.1);
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &.active{
        transform: translateX(0);
    }
`;
const StyledTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`;


const NavAdmin = ({isActive, onClickClose}) => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  const [permissions, setPermissions] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/login');
  }

  useEffect(() => {
    const fetchProfile = async () => {
        try{
            const response = await axios.get('http://localhost:8000/api/profile/',{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            });
            console.log(response.data);
            setPermissions(response.data.permissions);
        }catch(error){
            console.error(error);
        }
    }
    fetchProfile();
    },[]);

    // Para mostrar el dropdown de autentificación
    const hasPermissionAutentification = permissions.some(permission =>
        ['users.view_customuser', 'auth.view_group', 'auth.view_permission'].includes(permission)
    );

  return (
    <StyledAside className={`${isActive ? 'active' : ''}`}>
        <StyledTop>
            <DeibyLogo />
            <BurgerButton isActive={true} onClick={onClickClose}/>
        </StyledTop>
        <div>
            <ul>
                <NavItemIcon icon={'dashboard'} isActive={pathname === '/admin'} href={'/admin'}>
                    Dashboard
                </NavItemIcon>
                {hasPermissionAutentification && (
                <NavDropdown icon={'lock'} text={'Autentificación'}>
                    {permissions.includes('users.view_customuser') && (
                    <DropdownItem icon={'person'} isActive={pathname.startsWith('/admin/users')} href={'/admin/users'}>
                        Usuarios
                    </DropdownItem>
                    )}
                    {permissions.includes('auth.view_group') && (
                        <DropdownItem icon={'group'} isActive={pathname === '/admin/groups'} href={'/admin/groups'}>
                            Grupos
                        </DropdownItem>
                    )}
                    {permissions.includes('auth.view_permission') && (
                        <DropdownItem icon={'vpn_key'} isActive={pathname === '/admin/permissions'} href={'/admin/permissions'}>
                            Permisos
                        </DropdownItem>
                    )}
                </NavDropdown>
                )}
                <NavItemIcon icon={'settings'} isActive={pathname === '/admin/settings'} href={'/admin/settings'}>
                    Settings
                </NavItemIcon>
                <NavItemIcon icon={'logout'} onClick={handleLogout}>
                    Logout
                </NavItemIcon>
            </ul>
        </div>

    </StyledAside>
  )
};

export default NavAdmin;