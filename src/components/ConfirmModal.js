import styled from 'styled-components';

const Title = styled.h2`
  font-family: 'Oswald', sans-serif;
`;
const SpanClose = styled.span`
  cursor: pointer;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: ${props => props.theme.background[10]};
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ModalBody = styled.div`
  margin-top: 20px;
`;
const ModalFooter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;
const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonCancel = styled.button`
  margin: 10px;
  background-color: ${props => props.theme.text[20]};
  color: ${props => props.theme.background[10]};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.text[10]};
  }
`;

const ButtonConfirm = styled.button`
  margin: 10px;
  background-color: ${props => props.theme.danger[60]};
  color: ${props => props.theme.text[10]};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.danger[50]};
  }
`;
const StyledSpan = styled.span`
  font-size: 2rem;
  margin-right: 0.5rem;
`;

const ConfirmModal = ({ isOpen, onClose, onConfirm, itemId }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <ContainerTitle >
            <StyledSpan className='material-icons-round'>
              delete
            </StyledSpan>
            <Title>  
              Eliminar Registro
            </Title>
          </ContainerTitle >
          <SpanClose onClick={onClose} className='material-icons-round'>
            close
          </SpanClose>
        </ModalHeader>
        
        <ModalBody>
          <p>¿Estás seguro de que quieres eliminar al usuario {itemId}?</p>
        </ModalBody>

        <ModalFooter>
          <ButtonCancel onClick={onClose}>
            Cancelar
          </ButtonCancel>
          <ButtonConfirm onClick={() => onConfirm(itemId)}>
            Eliminar
          </ButtonConfirm>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
}

export default ConfirmModal;