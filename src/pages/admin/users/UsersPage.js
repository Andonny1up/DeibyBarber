import Container from '../../../components/Container'
import ContainerTop from '../../../components/ContainerTop';
import TitleIconPage from '../../../components/TitleIconPage';
import Card from '../../../components/Card';
import UserList from './UsersList'

const UsersPage = () => {
    return (
        <section>
            <ContainerTop>
                <TitleIconPage title="Usuarios" icon="person"/>        
            </ContainerTop>
            <Container>
                <Card>
                    <UserList></UserList>
                </Card>
            </Container>
        </section>
    );
}
export default UsersPage;