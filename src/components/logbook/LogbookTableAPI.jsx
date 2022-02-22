import React, { useEffect, useState, useMemo } from "react";
import LogbookTable from "./LogbookTable";
import { Button, useDisclosure } from "@chakra-ui/react";
//import axiosInstance from "../authentication/authApi";

export default function LogbookTableAPI() {
  const [cells, setCells] = useState([]);
  const { onOpen } = useDisclosure();

  const getData = async () => {
    /*axiosInstance
      .get("http://127.0.0.1:8000/api/qso-logbook/")
      .then((response) => {
        console.log(response.data);
        setCells(response.data);
      })
      .catch((err) => {
        console.error(err);
      });*/
    const resp = await fetch("http://localhost:3000/qsoHistory/");
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
        Header: "Call Sign",
        accessor: "callSign",
        minWidth: 30,
        width: 125,
        maxWidth: 200,
      },
      {
        Header: "Operator Name",
        accessor: "operatorName",
        minWidth: 30,
        width: 125,
        maxWidth: 200,
      },
      {
        Header: "Country",
        accessor: "country",
        minWidth: 30,
        width: 125,
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
        Header: "Band",
        accessor: "band",
        minWidth: 30,
        width: 150,
        maxWidth: 200,
      },
      {
        Header: "Notes",
        accessor: "notes",
        minWidth: 30,
        width: 150,
        maxWidth: 200,
        Cell: ({ cell }) => (
          <Button size="xs" borderRadius="6px" bg="#FE875D" color="white" onClick={onOpen}>
            Show Notes
          </Button>
        ),
      },
    ],
    [onOpen],
  );

  useEffect(() => {
    getData();
  }, []);

  const data = useMemo(() => cells, [cells]); //[] gives no cells on refresh

  return <>{cells && <LogbookTable columns={columns} data={data} />}</>;
}

//export default LogbookTableAPI.jsx;

// code when all was hardcoded:

// return <>{cells && <LogbookTable columns={columns} data={data} />}</>;
