import { DataGrid } from "@mui/x-data-grid";
import { allJobsApi } from "../../JSON/jobs";
import PageHeader from "../../library/pageheader";
import ActionMenu from "../../components/common/ActionMenu";
import { formatDate } from "../../library/resuableFunction";
import { useState } from "react";
import { Pagination } from "@mui/material";

const ViewAllJobs = () => {

  const [pageNumber, setPageNumber] = useState(1);

  const handlePageChange = (_event, page) => {
    setPageNumber(page);
  };

  const handleEdit = (row) => {
    console.log("Edit job:", row?.id);
  };

  const handleDelete = (row) => {
    // TODO: delete job
    console.log("Delete job:", row?.id);
  };

  const COLUMNS = [
    {
      field: "actions",
      headerName: "Actions",
      renderCell: (params) => (
        <ActionMenu
          row={params.row}
          items={[
            { label: "Edit", onClick: handleEdit },
            { label: "Delete", onClick: handleDelete },
          ]}
        />
      ),
      sortable: false,
      width: 80,
      resizable: false,
    },
    {
      field: "jobTitle",
      headerName: "Job Title",
      flex: 1,
      minWidth: 160,
    },
    {
      field: "jobLocation",
      headerName: "Location",
      flex: 1,
      minWidth: 120,
    },
    {
      field: "department",
      headerName: "Department",
      flex: 1,
      minWidth: 120,
    },
    {
      field: "typeOfJob",
      headerName: "Type",
      flex: 1,
      minWidth: 100,
      valueGetter: (value) => value ?? "—",
      renderCell: (params) => (
        <span className="text-capitalize">{params.value || "—"}</span>
      ),
    },
    {
      field: "createdAt",
      headerName: "Created",
      flex: 1,
      minWidth: 110,
      valueGetter: (value) => (value ? formatDate(value) : "—"),
    },
    {
      field: "updatedAt",
      headerName: "Updated",
      flex: 1,
      minWidth: 110,
      valueGetter: (value) => (value ? formatDate(value) : "—"),
    },
  ];

  const allData = allJobsApi?.data ?? [];

  return (
    <div className="bg-white p-5 rounded-2xl">
      <PageHeader
        titles="All Jobs"
        active="All Jobs"
        items={["Dashboard"]}
        links={["/dashboard"]}
      />
      <div className="mt-4" style={{ minHeight: 400 }}>
        <DataGrid
          rows={allData}
          columns={COLUMNS}
          getRowId={(row) => row.id}
          disableColumnMenu
          hideFooter
          autoHeight
          experimentalFeatures={{ columnResize: true }}
        />
      </div>

      <div className="w-full flex justify-end mt-4">
        <Pagination
          page={pageNumber}
          count={allJobsApi?.pagination?.totalPages ?? 1}
          onChange={handlePageChange}
          size="medium"
          color="standard"
          showFirstButton
          showLastButton
        />
      </div>
    </div>
  );
};

export default ViewAllJobs;
