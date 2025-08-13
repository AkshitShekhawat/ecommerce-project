import { FaEdit } from "react-icons/fa";

export const adminOrderTableColumn = [
  {
    sortable: false,
    disableColumnMenu: true,
    field: "id",
    headerName: "orderId",
    minWidth: 180,
    headerAlign: "center",
    editable: false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderheader: (params) => <span className='text-center'>Order ID</span>
  },
  {
    //Column for customer email.
    sortable: false,
    disableColumnMenu: true,
    field: "email",
    headerName: "Email",
    align: "center",
    minWidth: 250,
    headerAlign: "center",
    editable: false,
    headerClassName: "text-black font-semibold text-center border",
    cellClassName: "text-slate-700 font-normal border text-center",
    renderheader: (params) => <span className='text-center'>Email</span>
  },
  {
    //Cloumn for showing total amount of the order.
    disableColumnMenu: true,
    field: "totalAmount",
    headerName: "Total Amount",
    headerAlign: "center",
    align: "center",
    width: 200,
    editable: false,
    sortable: true,
    headerClassName: "text-black font-semibold text-center border",
    cellClassName: "text-slate-700 font-normal border text-center",
    renderheader: (params) => <span className='text-center'>Total Amount</span>
  },
  {
    //Cloumn for showing total amount of the order.
    disableColumnMenu: true,
    field: "status",
    headerName: "Status",
    headerAlign: "center",
    align: "center",
    width: 200,
    editable: false,
    sortable: false,
    headerClassName: "text-black font-semibold text-center border",
    cellClassName: "text-slate-700 font-normal border text-center",
    renderheader: (params) => <span className='text-center'>Status</span>
  },
  {
    //Cloumn to display order status  (e.g, Pending, Shipped).
    disableColumnMenu: true,
    field: "date",
    headerName: "Order Date",
    headerAlign: "center",
    align: "center",
    width: 200,
    editable: false,
    sortable: false,
    headerClassName: "text-black font-semibold text-center border",
    cellClassName: "text-slate-700 font-normal border text-center",
    renderheader: (params) => <span className='text-center'>Order Date</span>
  },
  {
    field: "action",
    headerName: "Action",
    headerAlign: "center",  
    editable: false,
    headerClassName: "text-black font-semibold text-center",
    cellClassName: "text-slate-700 font-normal",
    sortable: false,
    width: 250,
    renderheader: (params) => <span>Action</span>,
    renderCell:(params) => {
      return (
        <div className='flex justify-center items-center space-x-2 h-full pt-2'>
          <button className='flex items-center bg-blue-500 text-white px-4 h-9 rounded-md mb-2'>
            <FaEdit className='mr-2'/>
            Edit
          </button>
        </div>
      );
    }
  },
];