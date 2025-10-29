import Box from "@mui/material/Box";
import EmployeeItem from "./EmployeeItem";
import employees from "../../assets/employees.json";
import { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  InputLabel,
  TextField,
} from "@mui/material";

function EmployeesList() {
  const [listEmployees, setListEmployees] = useState(employees);
  const [salaireMin, setSalaireMin] = useState("");

  const colonnesName = Object.keys(employees[0]);
  useEffect(() => {
    if (salaireMin === "") {
      return;
    }
    console.log(salaireMin);
    const filteredEmployees = listEmployees.filter(
      (employee) => Number(employee["Annual Salary"]) >= Number(salaireMin)
    );
    setListEmployees(filteredEmployees);
  }, [salaireMin]);

  return (
    <>
      <Box>
        <TextField
          label="Salaire Min"
          value={salaireMin}
          type="number"
          onChange={(e) => setSalaireMin(e.target.value)}
        />
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            {colonnesName.map((name, index) => (
              <TableCell key={index}>{name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {listEmployees.map((employee, index) => (
            <EmployeeItem key={index} employee={employee} />
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default EmployeesList;
