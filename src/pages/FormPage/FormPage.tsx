import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CompanyList from 'components/CompanyList/CompanyList';
import Card from 'components/common/Card/Card';
import CardNumberInput from 'components/CardForm/CardNumberInput/CardNumberInput';
import CardExpirationDateInput from 'components/CardForm/CardExpirationDateInput/CardExpirationDateInput';
import CardOwnerNameInput from 'components/CardForm/CardOwnerNameInput/CardOwnerNameInput';
import CardPasswordInput from 'components/CardForm/CardPasswordInput/CardPasswordInput';
import CardSecurityInput from 'components/CardForm/CardSecurity/CardSecurity';
import IconButton from '../../components/common/IconButton/IconButton';
import Text from 'components/common/Text/Text';
import Button from 'components/common/Button/Button';
import useFormPage from 'hooks/useFormPage';
import useHandleFormInput from 'hooks/useHandleFormInput';
import useHandleFormState from 'hooks/useHandleFormState';
import { getCardCompnayColor } from 'utils/Card';
import { VirtualKeyBoard } from 'components/common/VirtualKeyBoard';

const FormPage = () => {
  const [activeUI, setActiveUI] = useState(false);

  const { formState, setFormState } = useHandleFormState();
  const formStateObject = {
    state: formState,
    setState: setFormState,
  };
  const { handleCompanyList, handleBackButton, handleSubmit } = useFormPage(formStateObject);
  const {
    cardFormInputs,
    handleCardNumberInput,
    handleExpireMonthInput,
    handleExpireYearInput,
    handleOwnerNameInput,
    handlePasswordInput,
    handleSecurityInput,
  } = useHandleFormInput(formStateObject);

  useEffect(() => {
    if (formState.company.isValid) {
      setActiveUI(false);
    }
  }, [formState.company]);

  const cardColor = getCardCompnayColor(formState.company.text);
  return (
    <Layout>
      <Header>
        <IconButton onClick={handleBackButton} name="arrowLeft" size="2xl" color="#575757" />
        <Text fontSize="lg" weight="bold" label="카드추가" />
      </Header>
      <div>
        <VirtualKeyBoard mode="password" />
        {activeUI && <CompanyList onSelect={handleCompanyList} onClose={setActiveUI} />}
        <Card
          type="primary"
          onClick={() => setActiveUI(true)}
          color={cardColor}
          company={formState.company.text}
          size="small"
          number={formState.cardNumbers.text}
          expireMonth={formState.expireDateMonth.text}
          expireYear={formState.expireDateYear.text}
          ownerName={formState.ownerName.text}
        />
        <CardNumberInput
          onChange={handleCardNumberInput}
          isValid={formState.cardNumbers.isValid}
          fontColor={cardColor}
          refs={cardFormInputs}
        />
        <CardExpirationDateInput
          onChangeMonth={handleExpireMonthInput}
          onChangeYear={handleExpireYearInput}
          fontColor={cardColor}
          refs={cardFormInputs}
          isValidMonth={formState.expireDateMonth.isValid}
          isValidYear={formState.expireDateYear.isValid}
        />
        <CardOwnerNameInput
          onChange={handleOwnerNameInput}
          fontColor={cardColor}
          refs={cardFormInputs}
          length={formState.ownerName.text.length}
        />
        <CardSecurityInput
          fontColor={cardColor}
          onChange={handleSecurityInput}
          isValid={formState.cvc.isValid}
          refs={cardFormInputs}
        />
        <CardPasswordInput
          fontColor={cardColor}
          onChange={handlePasswordInput}
          isValidStart={formState.password.start.isValid}
          isValidEnd={formState.password.end.isValid}
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
