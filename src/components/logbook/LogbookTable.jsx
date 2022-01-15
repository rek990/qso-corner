import React from "react";
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

//import GlobalFilter from "./GlobalFilter";

const LogbookTable = ({ columns, data }) => {
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
      <Flex direction="column" width="75vw" justifyContent="center">
        <Flex justifyContent="center">
          {/*<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />*/}
        </Flex>
        <TableScrollbar>
          <Table className="table" variant="striped" {...getTableProps()}>
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
        <Spacer />
        <Flex>
          <HStack spacing={1}>
            <Button
              size="xs"
              bg="teal.500"
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
              bg="teal.500"
              color="white"
              borderRadius="6px"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <ChevronLeftIcon boxSize="2em" />
            </Button>
            <Button
              size="xs"
              bg="teal.500"
              color="white"
              borderRadius="6px"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              <ChevronRightIcon boxSize="2em" />
            </Button>
            <Button
              size="xs"
              bg="teal.500"
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
          <Text>
            Page <b>{pageIndex + 1}</b> of <b>{pageOptions.length}</b>
          </Text>
        </Flex>
        <Spacer />
        <VStack>
          <Flex direction={{ base: "column", md: "row" }}>
            <Input
              type="number"
              border="1px solid"
              borderColor="#E2E8F0"
              bg="white"
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
              border="1px solid"
              borderColor="#E2E8F0"
              bg="white"
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
          </Flex>

          <Flex width="100%" justifyContent="center">
            <Text>
              Showing the First {pageSize} Results of {rows.length} Results
            </Text>
          </Flex>
        </VStack>
      </Flex>
    </>
  );
};

export default LogbookTable;
