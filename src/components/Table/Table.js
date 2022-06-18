import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React from "react";
import { data } from "../../data";

const TableInfo = () => {
  const popupOpen = () => {
    const left = (window.innerWidth - 700) / 2;
    const top = (window.innerHeight - 700) / 2;
    window.open(
      "/popup",
      "_blank",
      `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no,top=${top},left=${left},width=700,height=700`
    );
  };
  const years = [2017, 2018, 2019];
  const yearsSectors = ["XX", "YY", "ZZ"];
  const tableData = Object.entries(data);

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        sx={{
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
              yearsSectors.map((sector, index) => (
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
              {years.map((year) =>
                yearsSectors.map((sector, index) => (
                  <TableCell
                    key={index}
                    onClick={popupOpen}
                    style={{ cursor: "pointer" }}
                    align="center"
                  >
                    {regionData[year]?.[sector].value || "-"}
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
