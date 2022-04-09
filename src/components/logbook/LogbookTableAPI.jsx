import React, { useEffect, useState, useMemo } from "react";
import LogbookTable from "./LogbookTable";
import { Button, useDisclosure } from "@chakra-ui/react";
//import axiosInstance from "../authentication/authApi";

export default function LogbookTableAPI({notes, setNotes, renderedNotes, setRenderedNotes}) {
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

  useEffect(() => {
    getData();
  }, []);

  const data = useMemo(() => cells, [cells]); //[] gives no cells on refresh

  return <>{cells && <LogbookTable data={data} notes={notes} setNotes={setNotes} renderedNotes={renderedNotes} setRenderedNotes={setRenderedNotes}/>}</>;
}


