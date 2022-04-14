import React, { useState, useEffect } from "react";
import { Heading, Text, Flex, HStack, VStack, Box } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

const QRZAPIContainer = () => {
  /*fetch("https://logbook.qrz.com/api")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });*/
  const [jsonPlaceholderData, setJsonPlaceholderData] = useState({});
  const [dataName, setDataName] = useState({});
  const [dataSuite, setDataSuite] = useState({});
  const [dataStreet, setDataStreet] = useState({});
  const [dataCity, setDataCity] = useState({});
  const [dataZip, setDataZip] = useState({});
  const [dataGeo, setDataGeo] = useState({});

  const jsonPlaceholder = "https://jsonplaceholder.typicode.com/users";

  const getJSONPlaceholderData = () => {
    fetch(jsonPlaceholder)
      .then((response) => response.json())
      .then((data) => {
        setJsonPlaceholderData(data);
        setDataSuite(jsonPlaceholderData[0].address.suite);
        setDataStreet(jsonPlaceholderData[0].address.street);
        setDataCity(jsonPlaceholderData[0].address.city);
        setDataZip(jsonPlaceholderData[0].address.zipcode);
        setDataGeo(jsonPlaceholderData[0].address.geo);

        /*data.forEach(obj => {
        Object.entries(obj).forEach(([key, value]) => {
          console.log(`${key}: ${value}`);
        });
      });*/
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  };

  useEffect(() => {
    getJSONPlaceholderData();
  }, []);
  console.log(jsonPlaceholderData);
  //console.log(dataName);
  //console.log(dataSuite);
  //console.log(dataStreet);
  //console.log(dataCity);
  //console.log(dataZip);
  //console.log(dataGeo);

  /*const getData = () => {
    for (let i = 0; i < jsonPlaceholderData.length; i++) {
      console.log(jsonPlaceholderData[i].name);
      setJsonPlaceholderData(jsonPlaceholderData[i].name);
      return jsonPlaceholderData;
    }
  }*/

  return (
    <>
      <Box boxSizing="border-box" paddingTop="3%" paddingLeft="5%" float="left">
        {jsonPlaceholderData.map((data, key) => {
          return (
            <>
        <Heading size="lg" key={key}>{data.name}</Heading>
        <Text key={key}>{data.address.street}</Text>
        <Text key={key}>{data.address.street}</Text>
        <Text key={key}>{data.address.city} {data.address.zipcode}</Text>
        </>);})}
        {/*<Heading size="lg">John Doe</Heading>
        <Text>123 Main Street</Text>
        <Text>Anytown, GA 12345</Text>
        <Text>United States of America</Text>*/}
      </Box>
      <Box
        boxSizing="border-box"
        paddingTop="3%"
        paddingRight="5%"
        float="right"
      >
        <Heading size="sm">General Class</Heading>
      </Box>
    </>
  );
};

export default QRZAPIContainer;
