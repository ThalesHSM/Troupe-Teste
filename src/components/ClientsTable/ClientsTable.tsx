import React, { Fragment, useEffect, useState } from 'react';
import {
  StyledButtonsDiv,
  StyledIconDiv,
  StyledMainDiv,
  StyledTableDiv,
} from './StyledClientsTable';

import 'react-activity/dist/library.css';

import { useNavigate } from 'react-router-dom';

import { handleDeleteClient, handleGetClients } from '@Config/api/api';

import ReactDatatable from '@ashvin27/react-datatable';

import { Levels, Spinner } from 'react-activity';
import 'react-activity/dist/library.css';

import { AiFillEdit, AiOutlineClose } from 'react-icons/ai';

function ClientsTable() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [tableInfo, setTableInfo] = useState<any>();

  async function handleDelete(id: string) {
    setButtonLoading(true);

    await handleDeleteClient(id);
    const newClients = await handleGetClients();
    setButtonLoading(false);
    setTableInfo(newClients);
  }

  useEffect(() => {
    async function handleClients() {
      setIsLoading(true);
      const newClients = await handleGetClients();
      setIsLoading(false);
      setTableInfo(newClients);
    }
    handleClients();
  }, []);

  const columns = [
    {
      key: 'nome',
      text: 'Nome',
      className: 'table',
      sortable: true,
    },
    {
      key: 'cpf',
      text: 'CPF',
      className: 'table',
      sortable: true,
    },
    {
      key: 'email',
      text: 'Email',
      className: 'table',
      sortable: true,
    },
    {
      key: 'cidade',
      text: 'Cidade',
      className: 'table',
      cell: (record: any) => {
        return (
          <Fragment>
            <p>{record.endereço.cidade} </p>
          </Fragment>
        );
      },
    },
    {
      key: 'action',
      cell: (record: any) => {
        return (
          <Fragment>
            {buttonLoading ? (
              <Spinner size={15} style={{ marginLeft: 100 }} />
            ) : (
              <StyledButtonsDiv>
                <StyledIconDiv>
                  <AiFillEdit
                    id="edit_btn"
                    size={30}
                    onClick={() =>
                      navigate(`/Clients/${record.id}`, { state: record })
                    }
                    style={{
                      cursor: 'pointer',
                    }}
                  />
                </StyledIconDiv>

                <StyledIconDiv>
                  <AiOutlineClose
                    id="delete_btn"
                    size={30}
                    onClick={() => handleDelete(record.id)}
                    style={{
                      cursor: 'pointer',
                    }}
                  />
                </StyledIconDiv>
              </StyledButtonsDiv>
            )}
          </Fragment>
        );
      },
    },
  ];

  const config = {
    show_length_menu: false,
    page_size: 8,
    show_pagination: true,
    pagination: 'basic',
    button: {
      excel: false,
      print: false,
    },
  };

  return (
    <StyledMainDiv>
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Levels size={50} />
        </div>
      ) : (
        <StyledTableDiv>
          {tableInfo ? (
            <ReactDatatable
              records={tableInfo}
              columns={columns}
              config={config}
              className="mainTable"
              tHeadClassName="customHeader"
              width={1000}
            />
          ) : null}
        </StyledTableDiv>
      )}
    </StyledMainDiv>
  );
}

export default ClientsTable;
