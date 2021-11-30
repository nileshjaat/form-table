import styled from 'styled-components';

export const MainContainer = styled.div`
  border: 1px solid #cccccc;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
  margin-bottom: 32px;
`;

export const TableContent = styled.div`
  height: 650px;
  overflow-y: overlay;
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  padding: 4px;
  margin-bottom: 24px;
`;

export const TableRow = styled.div`
  display: flex;
`;

export const TableColumnHeader = styled.div`
  cursor: pointer;
  background-color: #e1e1e1;
  border-right: 1px solid #cccccc;
  padding: 8px 16px;
  width: 50%;

  &:first-child {
    border-left: 1px solid #cccccc;
  }
`;

export const TableColumnData = styled.div`
  padding: 8px 16px;
  border-bottom: 1px solid #cccccc;
  border-right: 1px solid #cccccc;
  width: 50%;

  &:first-child {
    border-left: 1px solid #cccccc;
  }
`;

export const TableColumnTitle = styled.h1`
  color: #000000;
  font-family: 'Public Sans';
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 14px;
  text-transform: uppercase;
  margin-right: 8px;
`;

export const TableColumnValue = styled.h1`
  color: #000000;
  font-family: 'Public Sans';
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 16px;
  word-break: break-all;
`;
