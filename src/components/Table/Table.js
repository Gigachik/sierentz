import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useContext } from "react";
import { data } from "../../data";
import { TableContext } from "../../contexts/context";

const TableInfo = () => {
  const popupOpen = (id) => {
    const left = (window.innerWidth - 700) / 2;
    const top = (window.innerHeight - 700) / 2;
    window.open(
      `/popup/${id}`,
      "_blank",
      "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no,top=${top},left=${left},width=700,height=700"
    );
  };
  const [tableValue] = useContext(TableContext);
  const tableData = Object.entries(tableValue);
  const yearsArrays = tableData
    .map(([regionName, { G: regionData }]) => Object.keys(regionData))
    .reduce((initial, current) => initial.concat(current), []);

  const years = [...new Set(yearsArrays)];

  const sectorsArrays = tableData
    .map(([regionName, { G: regionData }]) => {
      const allSectors = [];
      Object.values(regionData).forEach((sectors) =>
        Object.keys(sectors).forEach((sector) => allSectors.push(sector))
      );
      return allSectors;
    })
    .reduce((initial, current) => initial.concat(current), []);

  const sectors = [...new Set(sectorsArrays)];

  return (
    <TableContainer component={Paper}>
      <Table
        aria-label="simple table"
        sx={{
          minWidth: 650,
          th: {
            borderRight: "1px solid rgba(224, 224, 224, 1)",
          },
          "th:last-child": { borderRight: 0 },
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell colSpan={1} align="center"></TableCell>
            {years.map((year) => (
              <TableCell colSpan={3} align="center" key={year}>
                {year}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell colSpan={1} align="center">
              regions
            </TableCell>
            {years.map((year) =>
              sectors.map((sector, index) => (
                <TableCell align="center" key={index}>
                  {sector}
                </TableCell>
              ))
            )}
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            "td:not(:last-child)": {
              borderRight: "1px solid rgba(224, 224, 224, 1)",
            },
          }}
        >
          {tableData.map(([regionName, { G: regionData }]) => (
            <TableRow key={regionName}>
              <TableCell
                align="center"
                sx={{
                  borderRight: "1px solid rgba(224, 224, 224, 1)",
                }}
              >
                {regionName}
              </TableCell>
              {years.map((year, yearsIndex) =>
                sectors.map((sector, index) => (
                  <TableCell
                    key={index}
                    onClick={() => {
                      popupOpen(`${regionName}-G-${year}-${sector}`);
                    }}
                    style={{ cursor: "pointer" }}
                    align="center"
                  >
                    {regionData[year]?.[sector].value ?? "-"}
                  </TableCell>
                ))
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableInfo;
