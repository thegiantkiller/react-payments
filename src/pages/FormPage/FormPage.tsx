import { useEffect } from 'react';
import styled from 'styled-components';
import CompanyList from 'components/CompanyList/CompanyList';
import Card from 'components/common/Card/Card';
import CardNumberInput from 'components/CardFormInput/CardNumberInput/CardNumberInput';
import CardExpirationDateInput from 'components/CardFormInput/CardExpirationDateInput/CardExpirationDateInput';
import CardOwnerNameInput from 'components/CardFormInput/CardOwnerNameInput/CardOwnerNameInput';
import CardPasswordInput from 'components/CardFormInput/CardPasswordInput/CardPasswordInput';
import CardSecurityInput from 'components/CardFormInput/CardSecurityInput/CardSecurityInput';
import IconButton from '../../components/common/IconButton/IconButton';
import Text from 'components/common/Text/Text';
import Button from 'components/common/Button/Button';
import useFormPage from 'hooks/useFormPage';
import useHandleFormInput from 'hooks/useHandleFormInput';
import Modal from 'components/common/Modal/Modal';
import { useModal } from 'context/Modal';

const FormPage = () => {
  const { state, setState, handleCompanyList, handleBackButton, handleSubmit } = useFormPage();
  const { cardFormInputs } = useHandleFormInput();
  const modalCtx = useModal();

  useEffect(() => {
    if (state.company.isValid && state.color.isValid) {
      modalCtx.close();
    }
  }, [state.company, state.color]);

  return (
    <Layout>
      <Header>
        <IconButton onClick={handleBackButton} name="arrowLeft" size="2xl" color="#575757" />
        <Text fontSize="lg" weight="bold" label="카드추가" />
      </Header>
      <div>
        <Modal>
          <CompanyList onSelectedCompany={handleCompanyList} />
        </Modal>

        <Card
          type="primary"
          onClick={modalCtx.show}
          color={state.color.text}
          company={state.company.text}
          size="small"
          number={state.cardNumbers.text}
          expireMonth={state.expireDate.month.text}
          expireYear={state.expireDate.year.text}
          ownerName={state.ownerName.text}
        />
        <CardNumberInput
          setCardNumberText={setState}
          isValid={state.cardNumbers.isValid}
          fontColor={state.color.text}
          refs={cardFormInputs}
        />
        <CardExpirationDateInput
          setExprireDateText={setState}
          fontColor={state.color.text}
          refs={cardFormInputs}
          isValidMonth={state.expireDate.month.isValid}
          isValidYear={state.expireDate.year.isValid}
        />
        <CardOwnerNameInput setOwnerNameText={setState} fontColor={state.color.text} refs={cardFormInputs} />
        <CardSecurityInput
          fontColor={state.color.text}
          setSecurityCodeText={setState}
          isValid={state.cvc.isValid}
          refs={cardFormInputs}
        />
        <CardPasswordInput
          fontColor={state.color.text}
          setPasswordText={setState}
          isValidFirst={state.password.first.isValid}
          isValidEnd={state.password.end.isValid}
          refs={cardFormInputs}
        />
        <ButtonBox>
          <Button fontSize="m" onClick={handleSubmit} label="Next" />
        </ButtonBox>
      </div>
    </Layout>
  );
};

const Layout = styled.div`
  height: 100%;
  padding: 16px 24px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  color: #383838;
  margin-top: 10px;
  margin-bottom: 20px;
  gap: 20px;
`;
const ButtonBox = styled.div`
  width: 100%;
  text-align: right;
`;

export default FormPage;
