import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID" },
  {
    field: "clientName",
    headerName: "Client Name",
    editable: true,
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    editable: true,
    flex: 1,
  },
  {
    field: "number",
    headerName: "Phone",
    type: "number",
    editable: true,
    flex: 1,
  },
  {
    field: "industry",
    headerName: "Industry",
    editable: true,
    flex: 1,
  },
  {
    field: "pointOfContact",
    headerName: "Point of Contact",
    editable: true,
    flex: 1,
  },
  {
    field: "website",
    headerName: "Website",
    editable: true,
    flex: 1,
  },
];

const rows = [];

function TableData() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default TableData;
