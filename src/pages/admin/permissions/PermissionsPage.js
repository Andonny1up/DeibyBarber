import Container from '../../../components/Container'
import ContainerTop from '../../../components/ContainerTop';
import TitleIconPage from '../../../components/TitleIconPage';
import Card from '../../../components/Card';
import ActionButton from '../../../components/ActionButton';
import PermissionsList from './PermissionsList';

const PermissionsPage = () => {
    return (
        <section>
            <ContainerTop>
                <TitleIconPage title="Permisos" icon="vpn_key">
                    <ActionButton href={'permissions/add'} type={'add'} size={'md'}/>
                </TitleIconPage>        
            </ContainerTop>
            <Container>
                <Card>
                    <PermissionsList/>
                </Card>
            </Container>
        </section>
    );
}
export default PermissionsPage;