import React, { useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { Field, Form, Formik } from "formik";
import Grid from "@mui/material/Grid";
import { TextField } from "../UI/TextField/TextField";
import { SelectField } from "../UI/SelectField/SelectField";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { TableContext } from "../../contexts/context";
import { useParams } from "react-router-dom";

const Popup = () => {
  const [value, setValue] = useState([]);
  const [tableValue, updateCellValue] = useContext(TableContext);
  console.log("popup--", { tableValue });
  const { id } = useParams();

  const current = new Date();
  const date = `${current.getDate()}.${
    current.getMonth() + 1
  }.${current.getFullYear()}`;

  const defaultValues = [
    { value: 4, date: "20.02.2022", user: "Petro", comment: "any" },
    { value: 5, date: "21.02.2022", user: "Roman", comment: "" },
    { value: 6, date: "22.02.2022", user: "Anna", comment: "" },
  ];

  const popupClose = () => {
    window.close();
  };

  const onSubmit = (values) => {
    try {
      const newValues = {
        value: values.value,
        date: values.date,
        user: values.user,
        comment: values.comment,
      };
      setValue((prevState) => [...prevState, newValues]);
      updateCellValue(id, values.value);
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <Formik
      initialValues={{
        value: "",
        date,
        user: "",
        comment: "",
      }}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Form>
          <Grid container columnSpacing={2} alignItems={"end"}>
            <Grid item columnSpacing={2} xs={10}>
              <Grid item marginY={2} xs={12}>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">value</TableCell>
                        <TableCell align="center">date</TableCell>
                        <TableCell align="center">user</TableCell>
                        <TableCell align="center">comment</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {defaultValues.map((cell, index) => {
                        return (
                          <TableRow key={index}>
                            <TableCell align="center">{cell.value}</TableCell>
                            <TableCell align="center">{cell.date}</TableCell>
                            <TableCell align="center">{cell.user}</TableCell>
                            <TableCell align="center">{cell.comment}</TableCell>
                          </TableRow>
                        );
                      })}
                      {value.map((cell, index) => {
                        return (
                          <TableRow key={index}>
                            <TableCell align="center">{cell.value}</TableCell>
                            <TableCell align="center">{cell.date}</TableCell>
                            <TableCell align="center">{cell.user}</TableCell>
                            <TableCell align="center">{cell.comment}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid container columnSpacing={2}>
                <Grid item xs={3}>
                  <Field
                    name="value"
                    type="number"
                    label="Value"
                    component={TextField}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
                    name="date"
                    type="text"
                    disabled
                    component={TextField}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
                    name="user"
                    as="select"
                    label="User"
                    component={SelectField}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
                    name="comment"
                    type="text"
                    label="Comment"
                    component={TextField}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Grid item marginTop={"auto"} xs={12}>
                <Button type="submit" variant="contained" fullWidth>
                  Add
                </Button>
                <Button
                  style={{ marginTop: 16 }}
                  onClick={popupClose}
                  color="error"
                  variant="contained"
                  fullWidth
                >
                  Close
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default Popup;
