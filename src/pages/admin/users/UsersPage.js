import Container from '../../../components/Container'
import ContainerTop from '../../../components/ContainerTop';
import TitleIconPage from '../../../components/TitleIconPage';
import Card from '../../../components/Card';
import UserList from './UsersList'
import ActionButton from '../../../components/ActionButton';

const UsersPage = () => {
    return (
        <section>
            <ContainerTop>
                <TitleIconPage title="Usuarios" icon="person">
                    <ActionButton href={'users/add'} type={'add'} size={'md'}/>
                </TitleIconPage>        
            </ContainerTop>
            <Container>
                <Card>
                    <UserList/>
                </Card>
            </Container>
        </section>
    );
}
export default UsersPage;