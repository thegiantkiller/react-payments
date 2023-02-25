import styled from "styled-components";
import Card from "components/Card";
import Text from "components/Text";
import Input from "components/Input";
import Button from "components/Button/index";
import { useContext, useRef, useState } from "react";
import { CardContext } from "context/Card";
import { useNavigate } from "react-router-dom";

//미션2
const CompletedPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputLength, setInputLength] = useState(0);
  const cardCtx = useContext(CardContext);
  const temporaryCard = cardCtx.state.store;
  const navigate = useNavigate();

  const submit = () => {
    const currentInputRef = inputRef.current;
    if (currentInputRef === null) return;
    const refValue = currentInputRef.value;
    let alias = !refValue.length ? temporaryCard.company : refValue;
    const newCard = {
      ...cardCtx.state.store,
      alias,
    };
    cardCtx.addCard(newCard);
    navigate("/");
  };
  const handleInput = () => {
    const currentInputRef = inputRef.current;
    if (currentInputRef === null) return;
    const length = currentInputRef.value.length;
    setInputLength(length);
  };

  return (
    <Layout>
      <TextWrapper>
        <Text fontSize="lg" weight="bold" label="카드 등록이 완료되었습니다."></Text>
      </TextWrapper>
      <CardWrapper>
        <Card
          type="primary"
          size="big"
          color={temporaryCard.color}
          company={temporaryCard.company}
          number={temporaryCard.cardNumbers}
          expireMonth={temporaryCard.expireDate.month}
          expireYear={temporaryCard.expireDate.year}
          ownerName={temporaryCard.ownerName}
        />
      </CardWrapper>

      <Box>
        <Input
          type="text"
          placeholder="카드의 별칭 (선택) "
          theme="underline"
          active={true}
          ref={inputRef}
          onChange={handleInput}
        />

        <Text fontSize="s" weight="normal" label={`${inputLength}/10`} />
      </Box>

      <ButtonWrapper>
        <Button fontSize="lg" label="Next" onClick={submit} />
      </ButtonWrapper>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  margin-top: 100px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #383838;
  margin: 40px 0px;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 20px;
  margin-top: 30px;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  width: 90%;
  text-align: right;
  margin-top: 30px;
`;

export default CompletedPage;
