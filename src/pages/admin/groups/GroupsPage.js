import Container from '../../../components/Container'
import ContainerTop from '../../../components/ContainerTop';
import TitleIconPage from '../../../components/TitleIconPage';
import Card from '../../../components/Card';
import ActionButton from '../../../components/ActionButton';
import GroupsList from './GroupsList';

const GroupsPage = () => {
    return (
        <section>
            <ContainerTop>
                <TitleIconPage title="Grupos" icon="group">
                    <ActionButton href={'groups/add'} type={'add'} size={'md'}/>
                </TitleIconPage>        
            </ContainerTop>
            <Container>
                <Card>
                    <GroupsList/>
                </Card>
            </Container>
        </section>
    );
}
export default GroupsPage;