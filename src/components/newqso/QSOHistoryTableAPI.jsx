import React, { useEffect, useState, useMemo } from "react";
import QSOHistoryTable from "./QSOHistoryTable";
import { Button, useDisclosure } from "@chakra-ui/react";
// import axiosInstance from "../authentication/authApi";

export default function QSOHistoryTableAPI() {
  const [cells, setCells] = useState([]);
  const { onOpen } = useDisclosure();

  const getData = async () => {
    const resp = await fetch("http://localhost:3000/qsoHistory");
    const data = await resp.json();
    setCells(data);
  };

  const columns = useMemo(
    () => [
      {
        Header: "No.",
        accessor: "qsoNumber",
        minWidth: 30,
        width: 75,
        maxWidth: 200,
      },
      {
        Header: "Date",
        accessor: "qsoDate",
        minWidth: 30,
        width: 130,
        maxWidth: 200,
      },
      {
        Header: "Time (UTC)",
        accessor: "qsoTime",
        minWidth: 30,
        width: 125,
        maxWidth: 200,
      },
      {
        Header: "Band",
        accessor: "band",
        minWidth: 30,
        width: 100,
        maxWidth: 200,
      },
      {
        Header: "Freq. (MHz)",
        accessor: "frequency",
        minWidth: 30,
        width: 130,
        maxWidth: 200,
      },
      {
        Header: "Mode",
        accessor: "mode",
        minWidth: 30,
        width: 100,
        maxWidth: 200,
      },

      {
        Header: "Notes",
        accessor: "notes",
        minWidth: 30,
        width: 150,
        maxWidth: 200,
        Cell: ({ cell }) => (
          <Button size="xs" borderRadius="6px" bg="#356288" color="white" onClick={onOpen}>
            Show Notes
          </Button>
        ),
      },
    ],
    [],
  );

  useEffect(() => {
    getData();
  }, []);

  const data = useMemo(() => cells, [cells]); // [] gives no cells on refresh
  return <>{cells && <QSOHistoryTable columns={columns} data={data} />}</>;
}
