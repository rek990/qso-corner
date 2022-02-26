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

  useEffect(() => {
    getData();
  }, []);

  const data = useMemo(() => cells, [cells]); // [] gives no cells on refresh
  return <>{cells && <QSOHistoryTable data={data} />}</>;
}
