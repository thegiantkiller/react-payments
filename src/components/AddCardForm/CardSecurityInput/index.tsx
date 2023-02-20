import Text from "components/Text";
import styled from "styled-components";
import InputContainer from "../../Input/Container";
import Input from "../../Input/Item";
import { useRef } from "react";
import { checkCardSecurityInput } from "utils";
import { ColorType } from "types";

type CardPasswordInputProps = {
  fontColor: ColorType;
  setSecurityCode: React.Dispatch<React.SetStateAction<string>>;
};

const CardSecurityInput = ({ fontColor, setSecurityCode }: CardPasswordInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = () => {
    const ref = inputRef.current;
    if (ref === null) return;
    const securityCode = ref.value;
    ref.value = checkCardSecurityInput(securityCode);
    setSecurityCode(securityCode);
  };

  return (
    <Layout>
      <Title fontSize="xs" weight="normal">
        보안코드 (CVC/CVV)
      </Title>
      <InputContainer width={25}>
        <Input theme="primary" type="text" ref={inputRef} onChange={handleInput} fontColor={fontColor} active={true} />
      </InputContainer>
    </Layout>
  );
};

export default CardSecurityInput;
const Layout = styled.div`
  margin: 16px 0;
`;
const Title = styled(Text)`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  color: #525252;
`;
