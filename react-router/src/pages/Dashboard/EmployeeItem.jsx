import { TableRow, TableCell } from "@mui/material";
function EmployeeItem({ employee }) {
  return (
    <TableRow>
      {Object.keys(employee).map((key, index) => (
        <TableCell key={index}>{employee[key]}</TableCell>
      ))}
    </TableRow>
  );
}

export default EmployeeItem;
