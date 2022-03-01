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
    width: 300px;
    height: 40px;
    font-size: 20px;
    padding: 5px;
    border-radius: 5px;
    border: none;
    margin-top: 20px;
    background-color: #f7f7f7;
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
    color: #3d3d3d;
    padding-right: 13.2vw;
    padding-bottom: 10px;
    font-size: 20px;
    cursor: default;

    @media (max-width: 1600px) {
      padding-right: 12vw;
    }
    @media (max-width: 1100px) {
      padding-right: 10vw;
    }
  }
`;

export const StyledIconDiv = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  :hover {
    transition: 0.2s;
    opacity: 0.3;
  }
`;

export const StyledButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;
