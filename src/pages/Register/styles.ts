import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  max-width: 60%;
  margin-bottom: 20px;
  line-height: 44px;

  color: #ffffff;
`;

export const TitleRegister = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 8px;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const SubtitleRegister = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 35px;
`;

export const TermsText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 19px;
  margin-top: 35px;
`;

export const LoginText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-size: 12px;
`;

export const HrefLogin = styled.a`
  font-family: "Open Sans";
  font-style: normal;
  font-size: 12px;
  margin-left: 10px;
  color: #23dd7a;
`;
