import React, { useMemo } from "react";
import TableScrollbar from "react-table-scrollbar";
import {
  Button,
  Flex,
  Spacer,
  Text,
  Input,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  HStack,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Textarea,
} from "@chakra-ui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useResizeColumns,
  useFlexLayout,
  useRowSelect,
} from "react-table";

import GlobalFilter from "../logbook/GlobalFilter";
// when backend is set up, pass { columns, data } as props

const QSOHistoryTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const data = useMemo(
    () => [
      {
        qsoNumber: 1,
        qsoDate: "2021-12-31",
        qsoTime: "18:20",
        band: "40m",
        frequency: "7.194",
        mode: "SSB",
        notes: "",
      },
      {
        qsoNumber: 2,
        qsoDate: "2021-12-31",
        qsoTime: "18:20",
        band: "40m",
        frequency: "7.194",
        mode: "SSB",
        notes: "",
      },
      {
        qsoNumber: 3,
        qsoDate: "2021-12-31",
        qsoTime: "17:52",
        band: "40m",
        frequency: "7.294",
        mode: "SSB",
        notes: "",
      },
      {
        qsoNumber: 4,
        qsoDate: "2021-02-20",
        qsoTime: "23:48",
        band: "2m",
        frequency: "146.52",
        mode: "FM",
        notes: "",
      },
      {
        qsoNumber: 5,
        qsoDate: "2021-02-20",
        qsoTime: "23:45",
        band: "2m",
        frequency: "146.52",
        mode: "FM",
        notes: "",
      },
    ],
    [],
  );

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
      },
    ],
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    pageCount,
    gotoPage,
    setPageSize,
    rows,
    prepareRow,
    state: { globalFilter, pageIndex, pageSize },
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 4 },
    },
    useResizeColumns,
    useFlexLayout,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
  );

  return (
    <>
      <Flex className="main-qso-history-table-container" direction="column" width="75vw">
        <Flex justifyContent="center">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </Flex>
        <br />
        <TableScrollbar>
          <Table className="table" bg="#FE875D" variant="striped" {...getTableProps()}>
            <Thead>
              {headerGroups.map((headerGroup) => (
                <Tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    // Add the sorting props to control sorting
                    <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render("Header")}
                      {/* Add a sort direction indicator */}
                      <chakra.span pl="1">
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <TriangleDownIcon aria-label="sorted descending" />
                          ) : (
                            <TriangleUpIcon aria-label="sorted ascending" />
                          )
                        ) : null}
                      </chakra.span>
                    </Th>
                  ))}
                </Tr>
              ))}
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg="#356288">
                  <ModalHeader color="#AACFDD">QSO Notes</ModalHeader>
                  <ModalBody>
                    <Textarea
                      bg="#C8E0E9"
                      border="2px solid"
                      focusBorderColor="#FE875D"
                      borderColor="#356288"
                      placeholder="Add notes about QSO Contact here"
                    />
                  </ModalBody>
                  <ModalFooter>
                    {/*<Button borderRadius="6px" bg="#FE875D" color="white" mr={3}>
                      Save Note
                      </Button>*/}
                    <Button borderRadius="6px" bg="#FE875D" color="white" onClick={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Thead>
            <Tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <Tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>;
                    })}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableScrollbar>
        <Flex>
          <HStack spacing={1}>
            <Button
              size="xs"
              bg="#FE875D"
              color="white"
              borderRadius="6px"
              className="page-item"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              <ArrowLeftIcon />
            </Button>
            <Button
              size="xs"
              bg="#FE875D"
              color="white"
              borderRadius="6px"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <ChevronLeftIcon boxSize="2em" />
            </Button>
            <Button
              size="xs"
              bg="#FE875D"
              color="white"
              borderRadius="6px"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              <ChevronRightIcon boxSize="2em" />
            </Button>
            <Button
              size="xs"
              bg="#FE875D"
              color="white"
              borderRadius="6px"
              className="page-item"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              <ArrowRightIcon />
            </Button>
          </HStack>
          <Spacer />
          <Text color="#356288">
            <strong>
              Page {pageIndex + 1} of {pageOptions.length}
            </strong>
          </Text>
        </Flex>
        <Spacer />
        <VStack>
          <Flex direction={{ base: "column", md: "row" }}>
            <HStack spacing={3}>
              <Input
                type="number"
                border="2px solid"
                borderColor="#FE875D"
                bg="#C8E0E9"
                borderRadius="6px"
                width={{ base: "75vw", sm: "50vw", md: "30vw", lg: "20vw" }}
                focusBorderColor="teal.500"
                errorBorderColor="red.400"
                placeholder="Go to Page"
                size="sm"
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                }}
              />
              <Spacer />
              <Select
                className="form-control"
                size="sm"
                value={pageSize}
                border="2px solid"
                borderColor="#FE875D"
                bg="#C8E0E9"
                width={{ base: "75vw", sm: "50vw", md: "30vw", lg: "20vw" }}
                focusBorderColor="teal.500"
                errorBorderColor="red.400"
                borderRadius="6px"
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize} Results Per Page
                  </option>
                ))}
              </Select>
            </HStack>
          </Flex>
          <Flex width="100%" justifyContent="center">
            <Text color="#356288">
              <strong>
                Showing the First {pageSize} Results of {rows.length} Results
              </strong>
            </Text>
          </Flex>
        </VStack>
      </Flex>
    </>
  );
};

export default QSOHistoryTable;
