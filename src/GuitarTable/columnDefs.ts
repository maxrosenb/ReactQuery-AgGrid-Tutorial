export const columnDefs = [
  { headerName: "Brand", field: "brand" },
  { headerName: "Model", field: "model" },
  { headerName: "Price", field: "price" },
  { headerName: "Year", field: "year" },
  { headerName: "Color", field: "color" },
  { headerName: "Type", field: "type" },
  { headerName: "Country", field: "country" },
];

export const defaultColumnDef = {
  width: 150,
  flex: 1,
  sortable: true,
  filter: true,
  floatingFilter: true,
};
