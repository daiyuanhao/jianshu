import styled from 'styled-components';

export const LoginWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #eee;
`

export const LoginBox = styled.div`
  width: 400px;
  margin: 60px auto;
  padding-top: 50px;
  padding-bottom: 30px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
`

export const Input = styled.input`
  display: block;
  width: 240px;
  height: 40px;
  line-height: 40px;
  padding: 4px 12px 4px 35px;
  margin: 0 auto 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  border: 1px solid #c8c8c8;
  border-radius: 4px;
  background-color: hsla(0,0%,71%,.1);
`

export const Button = styled.div`
  width: 240px;
  height: 40px;
  line-height: 40px;
  background: #3194d0;
  color: #fff;
  border-radius: 25px;
  margin: 10px auto;
  text-align: center;
  cursor: pointer;
`