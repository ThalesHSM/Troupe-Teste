import styled from 'styled-components';

export const StyledMainDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const StyledTableDiv = styled.div`
  width: 78vw;
  height: 80vh;
  border-radius: 20px;
  padding: 20px;
  background-color: white;
  font-size: 20px;

  input {
    width: 200px;
    height: 30px;
    font-size: 15px;
    padding: 5px;
    border-radius: 5px;
    margin-top: 20px;
  }

  ul {
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: center;
  }
  a {
    color: black;
  }

  td {
    padding-top: 10px;
    padding-bottom: 20px;
    border-top: 1px solid black;
    :hover {
      transition: 0.2s;
      opacity: 0.2;
    }
    :last-child {
      :hover {
        opacity: 1;
      }
    }
  }

  #btn {
    :hover {
      transition: 0.2s;
      opacity: 0.2;
    }
  }

  tr {
    cursor: pointer;
  }

  th {
    color: #979096;
    padding-right: 13.2vw;
    padding-bottom: 10px;
    font-size: 20px;
    cursor: default;
  }
`;

export const StyledClientDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30vw;
  height: 18vh;
  border-radius: 20px;
  background-color: white;
  margin-top: 20px;
`;

export const StyledButtonsDiv = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  flex: 1;
`;
