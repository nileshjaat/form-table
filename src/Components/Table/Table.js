import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import {
  MainContainer,
  TableWrapper,
  TableRow,
  TableColumnHeader,
  TableColumnTitle,
  TableColumnData,
  TableColumnValue,
  TableContent,
} from './styledComponents';

function Table({ tableData, saveDataInfo }) {
  const [state, setState] = useState({
    firstName: true,
    lastName: true,
    email: true,
    requiredData: tableData,
  });

  useEffect(() => {
    setState({
      ...state,
      requiredData: tableData,
    });
  }, [tableData]);

  const getTableContent = () => {
    return (
      <>
        {state.requiredData.length > 0 ? (
          <>
            {state.requiredData.map((item, key) => (
              <TableRow key={key}>
                <TableColumnData>
                  <TableColumnValue>{item.firstName}</TableColumnValue>
                </TableColumnData>

                <TableColumnData>
                  <TableColumnValue>{item.lastName}</TableColumnValue>
                </TableColumnData>

                <TableColumnData>
                  <TableColumnValue>{item.email}</TableColumnValue>
                </TableColumnData>
              </TableRow>
            ))}
          </>
        ) : (
          <h1>No matching data found</h1>
        )}
      </>
    );
  };

  const sortTable = (key) => {
    setState({
      ...state,
      [key]: !state[key],
    });
    let newItems = [...tableData];
    if (state[key]) {
      newItems.sort((a, b) =>
        a[key] !== b[key] ? (a[key] < b[key] ? -1 : 1) : 0
      );
    } else {
      newItems.sort((a, b) =>
        a[key] !== b[key] ? (a[key] > b[key] ? -1 : 1) : 0
      );
    }

    saveDataInfo(newItems);
  };

  const handleInputChange = (e) => {
    let newData = [...tableData];

    newData = newData.filter((option) =>
      option.firstName.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setState({
      ...state,
      requiredData: newData,
    });
  };

  return (
    <MainContainer>
      <TextField
        label="Search by first-name"
        type="text"
        onChange={handleInputChange}
      />

      <TableWrapper>
        <TableRow>
          <TableColumnHeader onClick={() => sortTable('firstName')}>
            <TableColumnTitle>Firstname</TableColumnTitle>
          </TableColumnHeader>

          <TableColumnHeader onClick={() => sortTable('lastName')}>
            <TableColumnTitle>Lastname</TableColumnTitle>
          </TableColumnHeader>

          <TableColumnHeader onClick={() => sortTable('email')}>
            <TableColumnTitle>Email</TableColumnTitle>
          </TableColumnHeader>
        </TableRow>

        <TableContent>{getTableContent()}</TableContent>
      </TableWrapper>
    </MainContainer>
  );
}

export default Table;
