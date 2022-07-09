import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { columnDefs } from "./columnDefs";
import { useGuitars } from "./queries";

const GuitarTable = () => {
  const { data } = useGuitars();

  return (
    <div>
      <h1>Mango's Guitars</h1>
      <div
        className="ag-theme-alpine"
        style={{
          height: "500px",
          width: "600px",
        }}
      >
        <AgGridReact columnDefs={columnDefs} rowData={data} />
      </div>
    </div>
  );
};

export default GuitarTable;
