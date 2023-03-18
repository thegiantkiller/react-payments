import styled from 'styled-components';
import { Input } from 'components/common/Input';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 15px 15px;
  display: flex;
  background: #fff;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  flex-wrap: wrap;
  z-index: 9999;
`;
export const KeyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 125px);
  grid-template-rows: repeat(3, 125px);
`;
export const Key = styled.button`
  background-color: green;
  color: white;
  border: none;
  text-align: center;
  font-size: 24px;
  padding: 25px 0px;
  cursor: pointer;
  :hover {
    border: 1px solid #eeeeee;
  }
`;

export const PasswordInput = styled(Input)`
  font-size: 40px;
  border-bottom: 1px solid green;
  margin: 30px 10px;
`;
export const Title = styled.h1`
  padding: 10px;
`;
