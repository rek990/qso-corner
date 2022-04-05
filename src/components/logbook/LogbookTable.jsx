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

import GlobalFilter from "./GlobalFilter";

const LogbookTable = ({ data, notes, setNotes }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        /*Cell: ({ cell }) => (
          <Button size="xs" borderRadius="6px" bg="#FE875D" color="white" onClick={onOpen}>
            Show Notes
          </Button>
        ),*/
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
      <Flex direction="column" width="75vw" paddingLeft="2em" paddingRight="2em">
        <Flex justifyContent="center">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </Flex>
        <br />
        <TableScrollbar>
          <Table className="table" bg="#AACFDD" variant="striped" {...getTableProps()}>
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
          <Text color="white">
            Page <b>{pageIndex + 1}</b> of <b>{pageOptions.length}</b>
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
                focusBorderColor="#356288"
                errorBorderColor="#FE1100"
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
                focusBorderColor="#356288"
                errorBorderColor="#FE1100"
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
            <Text color="white">
              Showing the First {pageSize} Results of {rows.length} Results
            </Text>
          </Flex>
        </VStack>
      </Flex>
    </>
  );
};

export default LogbookTable;
