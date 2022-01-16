import React, { useEffect, useState, useMemo } from "react";
import LogbookTable from "./LogbookTable";
import axiosInstance from "../authentication/authApi";

const LogbookTableAPI = () => {
  const [cells, setCells] = useState([]);

  const getData = async () => {
    axiosInstance
      .get("http://127.0.0.1:8000/api/qso-logbook/")
      .then((response) => {
        console.log(response.data);
        setCells(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
    // const resp = await fetch("http://127.0.0.1:8000/api/history/");
    // const data = await resp.json();
    // setCells(data);
  };

  const columns = useMemo(
    () => [
      {
        Header: "No.",
        accessor: "qsoNumber",
        minWidth: 30,
        width: 150,
        maxWidth: 200,
      },
      {
        Header: "Call Sign",
        accessor: "callSign",
        minWidth: 30,
        width: 150,
        maxWidth: 200,
      },
      {
        Header: "Operator Name",
        accessor: "operatorName",
        minWidth: 30,
        width: 150,
        maxWidth: 200,
      },
      {
        Header: "Country",
        accessor: "country",
        minWidth: 30,
        width: 150,
        maxWidth: 200,
      },
      {
        Header: "Date",
        accessor: "qsoDate",
        minWidth: 30,
        width: 150,
        maxWidth: 200,
      },
      {
        Header: "Time (UTC)",
        accessor: "qsoTime",
        minWidth: 30,
        width: 150,
        maxWidth: 200,
      },
      {
        Header: "Frequency",
        accessor: "frequency",
        minWidth: 30,
        width: 150,
        maxWidth: 200,
      },
      {
        Header: "Mode",
        accessor: "mode",
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
      },
    ],
    [],
  );

  useEffect(() => {
    getData();
  }, []);
  const data = useMemo(() => cells, [cells]); //[] gives no cells on refresh

  return <>{cells && <LogbookTable columns={columns} data={data} />}</>;
};

export default LogbookTableAPI.jsx;

// to be added in upon setup of backend:
//return <>{cells && <LogbookTable columns={columns} data={data} />}</>;
