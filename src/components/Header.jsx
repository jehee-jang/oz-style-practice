import styled from "styled-components";
import { flexMixin, fontMixin } from "../styled/styled";


const StyledHeader = styled.header`
  ${flexMixin(undefined, "space-between", "center", undefined, undefined)}
  padding: 20px 20px;
  background-color: black;
  ul {
    ${flexMixin(undefined, "center", "center", "20px", undefined)}
    li {
      ${fontMixin("16px", 400)}
      list-style: none;
    }
  }
`

export default function Header() {
  return (
    <StyledHeader>
      <h1>OZ코딩스쿨</h1>
      <ul>
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </StyledHeader>
  );
}
