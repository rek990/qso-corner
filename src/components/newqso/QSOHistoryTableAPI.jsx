import React, { useEffect, useState, useMemo } from "react";
import QSOHistoryTable from "./QSOHistoryTable";
import { Button, useDisclosure } from "@chakra-ui/react";
// import axiosInstance from "../authentication/authApi";

export default function QSOHistoryTableAPI({ notes, setNotes }) {
  const [cells, setCells] = useState([]);
  const { onOpen } = useDisclosure();

  let [qsoNumber, setQsoNumber] = useState(6);
  const [callSign, setCallSign] = useState("");
  const [qsoDate, setQsoDate] = useState("");
  const [qsoTime, setQsoTime] = useState("");
  const [meterBand, setMeterBand] = useState(null);
  const [modeNames, setModeNames] = useState(null);
  const [frequencyValues, setFrequencyValues] = useState(null);
  const [power, setPower] = useState("");
  const [signalSent, setSignalSent] = useState("");
  const [signalReceived, setSignalReceived] = useState("");
  const [operatorName, setOperatorName] = useState("");
  const [country, setCountry] = useState("");
  const [id, setId] = useState(0);
  //const [notes, setNotes] = useState("");
  console.log(notes);

  /*const getData = async () => {
    const resp = await fetch("http://localhost:3000/qsoHistory");
    const data = await resp.json();
    const loadedQSOs = [];
    for (const key in data) {
      loadedQSOs.push({
        id: key,
        qsoNumber: data[key].qsoNumber,
        qsoDate: data[key].qsoDate,
        qsoTime: data[key].qsoTime,
        band: data[key].band,
        frequency: data[key].frequency,
        mode: data[key].mode,
        notes: data[key].notes,
      });
      console.log(data[key].notes);
      
    }
    console.log(data);
    //setCells(data);
    console.log(loadedQSOs);
    // console.log(loadedQSOs.notes);
    setCells(loadedQSOs);
    
    
    const addARow = () => {
      setId(5);
      setQsoNumber(6);
      setQsoDate("2022-03-10");
      setMeterBand("40m");
      setFrequencyValues("7 MHz");
      setModeNames("SSB");
    };
  };*/
  

// the long way of doing the GET request and without async/await:

  /*const getData = () => {
    fetch("http://localhost:3000/qsoHistory")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCells(data);
        console.log(data);
      });
      
  };*/

  const getData = async () => {
    const resp = await fetch("http://localhost:3000/qsoHistory");
    const data = await resp.json();
    /*const loadedQSOs = [];
    for (const key in data) {
      loadedQSOs.push({
        id: key,
        qsoNumber: data[key].qsoNumber,
        qsoDate: data[key].qsoDate,
        qsoTime: data[key].qsoTime,
        band: data[key].band,
        frequency: data[key].frequency,
        mode: data[key].mode,
        notes: data[key].notes,
      });
      console.log(data[key].notes);
      
    }*/
    setCells(data);
    console.log(data);
    console.log(cells);
    // console.log(loadedQSOs);
    // console.log(loadedQSOs.notes);
    // setCells(loadedQSOs);
  };


  useEffect(() => {
    getData();
  }, []);
  console.log(cells);
  const data = useMemo(() => cells, [cells]); // [] gives no cells on refresh
  console.log(data);
  return <>{cells && <QSOHistoryTable data={data} notes={notes} setNotes={setNotes} />}</>;
}
