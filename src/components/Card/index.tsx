import styled, { css } from "styled-components";
import Text from "components/Text";
import { ReactEventHandler } from "react";

type colorType = "red" | "blue" | "green" | "pink" | "purple" | "cyon" | "yellow" | "orange" | "";
type companyType =
  | "하나카드"
  | "국민카드"
  | "신한카드"
  | "클린카드"
  | "토스카드"
  | "네이버카드"
  | "카카오카드"
  | "오렌지카드"
  | "";

type sizeType = "small" | "big";
type exprationDateType = {
  month: string;
  year: string;
};

type CardProps = {
  size: sizeType;
  number?: string;
  expirationDate?: exprationDateType;
  ownerName?: string;
  onClick?: ReactEventHandler<HTMLDivElement>;
  color?: colorType;
  company?: companyType;
};

const Card = ({ color, company, size, number, expirationDate, ownerName, onClick }: CardProps) => {
  return (
    <Layout onClick={onClick}>
      <Container color={color} size={size}>
        <Top>
          <Text fontSize="s" weight="normal">
            {company}
          </Text>
        </Top>
        <Middle>
          <Chip />
        </Middle>
        <Bottom>
          <Text fontSize="m" weight="normal">
            {number}
          </Text>
          <InfoContainer>
            <Text fontSize="s" weight="bold">
              {ownerName}
            </Text>
            <Text fontSize="s" weight="bold">
              {expirationDate && `${expirationDate.month}/${expirationDate.year}`}
            </Text>
          </InfoContainer>
        </Bottom>
      </Container>
    </Layout>
  );
};

export default Card;

type ContainerProps = {
  color?: colorType;
  size: sizeType;
};
const Layout = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  box-shadow: 3px 3px 5px rgb(0 0 0 / 25%);
  border-radius: 5px;
  cursor: pointer;

  ${({ color }) =>
    color === "red"
      ? css`
          background: #e14141;
        `
      : color === "cyon"
      ? css`
          background: #92e3d5;
        `
      : color === "blue"
      ? css`
          background: #557ce5;
        `
      : color === "green"
      ? css`
          background: #73bc6d;
        `
      : color === "pink"
      ? css`
          background: #e76e9b;
        `
      : color === "yellow"
      ? css`
          background: #fbcc58;
        `
      : color === "orange"
      ? css`
          background: #f37e3b;
        `
      : color === "purple"
      ? css`
          background: #df59ba;
        `
      : css`
          background: #e5e5e5;
        `}
  ${({ size }) =>
    size === "small"
      ? css`
          width: 208px;
          height: 130px;
        `
      : css`
          width: 290px;
          height: 180px;
        `}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0px 10px;
`;
const Middle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-left: ${(props) => (props.theme !== "add" ? "30px" : "0px")};
  padding-bottom: 10px;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  justify-content: space-between;
`;

const Chip = styled.div`
  width: 40px;
  height: 26px;
  left: 95px;
  top: 122px;
  background-color: #cbba64;
  border-radius: 4px;
`;
