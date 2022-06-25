import "./App.css";
import React, { useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Popup from "./components/Popup/Popup";
import TableInfo from "./components/Table/Table";
import { data } from "./data";
import { TableContext } from "./contexts/context";
import useCrossTabState from "./hooks/useCrossTabState";
import { cloneDeep, set } from "lodash";

const App = () => {
  const [tableData, setTableData] = useCrossTabState("tableStore", data);

  const setTableDeepValue = useCallback(
    (id, value) => {
      const path = id.replaceAll("-", ".") + ".value";
      setTableData((prevState) => {
        const newTable = cloneDeep(prevState);
        set(newTable, path, value);
        console.log({ newTable });
        return newTable;
      });
    },
    [setTableData]
  );

  return (
    <TableContext.Provider value={[tableData, setTableDeepValue]}>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" element={<TableInfo />} />
            <Route path="/popup/:id" element={<Popup />} />
          </Routes>
        </div>
      </div>
    </TableContext.Provider>
  );
};

export default App;
