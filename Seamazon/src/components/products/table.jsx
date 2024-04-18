import { DataGrid } from "@mui/x-data-grid";
import { Rating } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import "./Products.css";

function handleRowClick(params) {
    console.log(params.row);
}

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "productName", headerName: "Product name", width: 200 },
  { field: "quantity", headerName: "Quantity", type: "number", width: 90 },
  { field: "price", headerName: "Price", type: "number", width: 90 },
  { field: "description", headerName: "Description", width: 300 },
  { field: "category", headerName: "Category", width: 130 },
  {
    field: "ratings",
    headerName: "Ratings",
    width: 130,
    renderCell: (params) => (
      <Rating
        name={`rating-${params.row.id}`}
        value={params.value}
        precision={0.1}
        readOnly
      />
    ),
  },
  {
    field: "bestSeller",
    headerName: "Best Seller",
    width: 50,
    renderCell: (params) =>
      params.value ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <CheckCircleOutline style={{ color: "green" }} />
        </div>
      ) : null,
  },
];

const rows = [
  {
    id: 1,
    productName: "Product 1",
    quantity: 10,
    price: 50,
    description: "Description of Product 1",
    category: "Category A",
    ratings: 4.5,
    bestSeller: true,
  },
  {
    id: 2,
    productName: "Product 2",
    quantity: 20,
    price: 30,
    description: "Description of Pro;lakjsf;alksjdf;aslkjfa;sldkfjduct 2",
    category: "Category B",
    ratings: 4.2,
    bestSeller: false,
  },
  {
    id: 3,
    productName: "Product 3",
    quantity: 15,
    price: 40,
    description: "Description of Product 3",
    category: "Category A",
    ratings: 4.8,
    bestSeller: true,
  },
  {
    id: 4,
    productName: "Product 4",
    quantity: 25,
    price: 35,
    description: "Description of Product 4",
    category: "Category C",
    ratings: 4.0,
    bestSeller: false,
  },
  {
    id: 5,
    productName: "Product 5",
    quantity: 12,
    price: 45,
    description: "Description of Product 5",
    category: "Category B",
    ratings: 4.7,
    bestSeller: true,
  },
  {
    id: 6,
    productName: "Product 6",
    quantity: 18,
    price: 55,
    description: "Description of Product 6",
    category: "Category A",
    ratings: 4.9,
    bestSeller: false,
  },
  {
    id: 7,
    productName: "Product 7",
    quantity: 30,
    price: 25,
    description: "Description of Product 7",
    category: "Category C",
    ratings: 4.3,
    bestSeller: true,
  },
  {
    id: 8,
    productName: "Product 8",
    quantity: 22,
    price: 60,
    description: "Description of Product 8",
    category: "Category B",
    ratings: 4.6,
    bestSeller: false,
  },
  {
    id: 9,
    productName: "Product 9",
    quantity: 17,
    price: 20,
    description: "Description of Product 9",
    category: "Category A",
    ratings: 4.1,
    bestSeller: true,
  },
  {
    id: 10,
    productName: "Product 10",
    quantity: 28,
    price: 50,
    description: "Description of Product 10",
    category: "Category C",
    ratings: 4.4,
    bestSeller: false,
  },
  {
    id: 11,
    productName: "Product 11",
    quantity: 14,
    price: 65,
    description: "Description of Product 11",
    category: "Category C",
    ratings: 4.6,
    bestSeller: false,
  },
  {
    id: 12,
    productName: "Product 12",
    quantity: 32,
    price: 40,
    description: "Description of Product 12",
    category: "Category B",
    ratings: 4.8,
    bestSeller: true,
  },
  {
    id: 13,
    productName: "Product 13",
    quantity: 19,
    price: 55,
    description: "Description of Product 13",
    category: "Category A",
    ratings: 4.2,
    bestSeller: false,
  },
  {
    id: 14,
    productName: "Product 14",
    quantity: 25,
    price: 30,
    description: "Description of Product 14",
    category: "Category C",
    ratings: 4.7,
    bestSeller: true,
  },
  {
    id: 15,
    productName: "Product 15",
    quantity: 16,
    price: 45,
    description: "Description of Product 15",
    category: "Category B",
    ratings: 4.5,
    bestSeller: false,
  },
  {
    id: 16,
    productName: "Product 16",
    quantity: 28,
    price: 50,
    description: "Description of Product 16",
    category: "Category A",
    ratings: 4.9,
    bestSeller: true,
  },
  {
    id: 17,
    productName: "Product 17",
    quantity: 22,
    price: 35,
    description: "Description of Product 17",
    category: "Category C",
    ratings: 4.4,
    bestSeller: false,
  },
  {
    id: 18,
    productName: "Product 18",
    quantity: 18,
    price: 60,
    description: "Description of Product 18",
    category: "Category B",
    ratings: 4.3,
    bestSeller: true,
  },
  {
    id: 19,
    productName: "Product 19",
    quantity: 20,
    price: 25,
    description: "Description of Product 19",
    category: "Category A",
    ratings: 4.1,
    bestSeller: false,
  },
  {
    id: 20,
    productName: "Product 20",
    quantity: 24,
    price: 70,
    description: "Description of Product 20",
    category: "Category C",
    ratings: 4.0,
    bestSeller: true,
  },
];

function Table() {
  return (
    <div className="product-table">
      <DataGrid
        rows={rows}
        columns={columns}
        onRowClick={handleRowClick}
        sx={{
          borderRadius: 4,
          border: 1,
          boxShadow: 30,
          scrollBehavior: "smooth",
          '&.MuiDataGrid-root': {
            overflow: 'scroll',
          },
        }}
        initialState={{
          pagination: {
            paginationModel: {pageSize: 10},
          },
        }}
        pageSizeOptions={[10, 15, 20]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}

export default Table;
