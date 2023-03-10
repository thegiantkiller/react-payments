import Text from 'components/common/Text/Text';
import styled from 'styled-components';
import Input from '../../common/Input/Input';

import { ColorType, CardFormInputsType } from 'types';

type CardOwnerNameInputProps = {
  fontColor: ColorType;
  onChange?: () => void;
  refs: CardFormInputsType;
  length: number;
};

const CardOwnerNameInput = ({ onChange, fontColor, refs, length }: CardOwnerNameInputProps) => {
  return (
    <Layout>
      <Container>
        <Title fontSize="xs" weight="bold" label="카드 소유자 이름(선택)" />
        <Text fontSize="s" weight="normal" label={`${length}/10`} />
      </Container>
      <Input
        type="text"
        theme="primary"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        ref={(el) => (refs.ownerName.ref = el)}
        onChange={onChange}
        fontColor={fontColor}
        active={true}
      />
    </Layout>
  );
};

const Layout = styled.div`
  margin-top: 20px;
`;
const Title = styled(Text)`
  margin-bottom: 4px;
  color: #525252;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default CardOwnerNameInput;
