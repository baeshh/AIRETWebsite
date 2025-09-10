interface Specification {
  [key: string]: string;
}

interface SpecTableProps {
  specifications: Specification[];
  headers: string[];
  theme?: "white" | "black";
}

export default function SpecTable({ specifications, headers, theme = "black" }: SpecTableProps) {
  return (
    <div style={{ overflowX: "auto" }} data-testid="spec-table-container">
      <table
        className="spec-table"
        style={{
          color: theme === "black" ? "var(--b-fg)" : "var(--w-fg)",
        }}
        data-testid="spec-table"
      >
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} data-testid={`spec-header-${index}`}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {specifications.map((spec, rowIndex) => (
            <tr key={rowIndex} data-testid={`spec-row-${rowIndex}`}>
              {headers.map((header, colIndex) => (
                <td key={colIndex} data-testid={`spec-cell-${rowIndex}-${colIndex}`}>
                  {spec[header] || "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
