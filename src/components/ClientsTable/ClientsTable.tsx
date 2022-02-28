import React, { Fragment, useEffect, useState } from 'react';
import { StyledMainDiv, StyledTableDiv } from './StyledClientsTable';

import 'react-activity/dist/library.css';

import { GrUpdate } from 'react-icons/gr';
import { handleDeleteClient, handleGetClients } from '@Config/api/api';

import ReactDatatable from '@ashvin27/react-datatable';

import { Spinner } from 'react-activity';
import 'react-activity/dist/library.css';

function ClientsTable() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tableInfo, setTableInfo] = useState<any>();

  async function handleDelete(id: string) {
    setIsLoading(true);

    await handleDeleteClient(id);
    setIsLoading(false);
    const newClients = await handleGetClients();
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
    },
    {
      key: 'cpf',
      text: 'CPF',
      className: 'table',
    },
    {
      key: 'email',
      text: 'Email',
      className: 'table',
    },
    {
      key: 'cidade',
      text: 'Cidade',
      className: 'table',
      cell: (record: any, index: any) => {
        return (
          <Fragment>
            <p>{record.endereço.cidade} </p>
          </Fragment>
        );
      },
    },
    {
      key: 'action',
      cell: (record: any, index: any) => {
        return (
          <Fragment>
            {isLoading ? (
              <Spinner size={15} style={{ marginLeft: 100 }} />
            ) : (
              <>
                <GrUpdate size={25} id="btn" />
                <button
                  id="btn"
                  onClick={() => handleDelete(record.id)}
                  style={{
                    marginLeft: 200,
                    fontSize: 32,

                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    border: 'none',
                  }}
                >
                  X
                </button>
              </>
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
        <Spinner size={50} style={{ marginTop: 200 }} />
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
