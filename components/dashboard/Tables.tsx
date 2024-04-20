import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";


export default function DashboardTable({tableName, tableDescription, data, headers }: {tableName: string; tableDescription: string; data: any; headers: any }) {
  return (
    <Card className="transition duration-700 hover:bg-blue-100 hover:shadow-sm dark:hover:bg-gray-900">
      <CardHeader>
        <CardTitle>{tableName}</CardTitle>
        <CardDescription>{tableDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tables>
          <TableHeaders headers={headers} />
          <TableBodys>
            <DataRow data={data} headers={headers} />
          </TableBodys>
        </Tables>
      </CardContent>
    </Card>
  );
}


// export default function Component() {
//   return (
//     <Card>
//       <CardHeader className="px-7">
//         <CardTitle>Orders</CardTitle>
//         <CardDescription>Recent orders from your store.</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Customer</TableHead>
//               <TableHead className="hidden sm:table-cell">Type</TableHead>
//               <TableHead className="hidden sm:table-cell">Status</TableHead>
//               <TableHead className="hidden md:table-cell">Date</TableHead>
//               <TableHead className="text-right">Amount</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             <TableRow className="bg-accent">
//               <TableCell>
//                 <div className="font-medium">Liam Johnson</div>
//                 <div className="hidden text-sm text-muted-foreground md:inline">
//                   liam@example.com
//                 </div>
//               </TableCell>
//               <TableCell className="hidden sm:table-cell">Sale</TableCell>
//               <TableCell className="hidden sm:table-cell">
//                 <Badge className="text-xs" variant="secondary">
//                   Fulfilled
//                 </Badge>
//               </TableCell>
//               <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
//               <TableCell className="text-right">$250.00</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>
//                 <div className="font-medium">Olivia Smith</div>
//                 <div className="hidden text-sm text-muted-foreground md:inline">
//                   olivia@example.com
//                 </div>
//               </TableCell>
//               <TableCell className="hidden sm:table-cell">Refund</TableCell>
//               <TableCell className="hidden sm:table-cell">
//                 <Badge className="text-xs" variant="outline">
//                   Declined
//                 </Badge>
//               </TableCell>
//               <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
//               <TableCell className="text-right">$150.00</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>
//                 <div className="font-medium">Noah Williams</div>
//                 <div className="hidden text-sm text-muted-foreground md:inline">
//                   noah@example.com
//                 </div>
//               </TableCell>
//               <TableCell className="hidden sm:table-cell">
//                 Subscription
//               </TableCell>
//               <TableCell className="hidden sm:table-cell">
//                 <Badge className="text-xs" variant="secondary">
//                   Fulfilled
//                 </Badge>
//               </TableCell>
//               <TableCell className="hidden md:table-cell">2023-06-25</TableCell>
//               <TableCell className="text-right">$350.00</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>
//                 <div className="font-medium">Emma Brown</div>
//                 <div className="hidden text-sm text-muted-foreground md:inline">
//                   emma@example.com
//                 </div>
//               </TableCell>
//               <TableCell className="hidden sm:table-cell">Sale</TableCell>
//               <TableCell className="hidden sm:table-cell">
//                 <Badge className="text-xs" variant="secondary">
//                   Fulfilled
//                 </Badge>
//               </TableCell>
//               <TableCell className="hidden md:table-cell">2023-06-26</TableCell>
//               <TableCell className="text-right">$450.00</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>
//                 <div className="font-medium">Liam Johnson</div>
//                 <div className="hidden text-sm text-muted-foreground md:inline">
//                   liam@example.com
//                 </div>
//               </TableCell>
//               <TableCell className="hidden sm:table-cell">Sale</TableCell>
//               <TableCell className="hidden sm:table-cell">
//                 <Badge className="text-xs" variant="secondary">
//                   Fulfilled
//                 </Badge>
//               </TableCell>
//               <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
//               <TableCell className="text-right">$250.00</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>
//                 <div className="font-medium">Liam Johnson</div>
//                 <div className="hidden text-sm text-muted-foreground md:inline">
//                   liam@example.com
//                 </div>
//               </TableCell>
//               <TableCell className="hidden sm:table-cell">Sale</TableCell>
//               <TableCell className="hidden sm:table-cell">
//                 <Badge className="text-xs" variant="secondary">
//                   Fulfilled
//                 </Badge>
//               </TableCell>
//               <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
//               <TableCell className="text-right">$250.00</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>
//                 <div className="font-medium">Olivia Smith</div>
//                 <div className="hidden text-sm text-muted-foreground md:inline">
//                   olivia@example.com
//                 </div>
//               </TableCell>
//               <TableCell className="hidden sm:table-cell">Refund</TableCell>
//               <TableCell className="hidden sm:table-cell">
//                 <Badge className="text-xs" variant="outline">
//                   Declined
//                 </Badge>
//               </TableCell>
//               <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
//               <TableCell className="text-right">$150.00</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>
//                 <div className="font-medium">Emma Brown</div>
//                 <div className="hidden text-sm text-muted-foreground md:inline">
//                   emma@example.com
//                 </div>
//               </TableCell>
//               <TableCell className="hidden sm:table-cell">Sale</TableCell>
//               <TableCell className="hidden sm:table-cell">
//                 <Badge className="text-xs" variant="secondary">
//                   Fulfilled
//                 </Badge>
//               </TableCell>
//               <TableCell className="hidden md:table-cell">2023-06-26</TableCell>
//               <TableCell className="text-right">$450.00</TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </CardContent>
//     </Card>
//   );
// }

// Card.js
function Cards({ children }: { children: any }) {
  return <div className="card bg-white shadow-sm rounded">{children}</div>;
}

// CardHeader.js
function CardHeaders({ children }: { children: any }) {
  return <div className="card-header px-7">{children}</div>;
}

// CardContent.js
function CardContents({ children }: { children: any }) {
  return <div className="card-content">{children}</div>;
}
// Table.js
function Tables({ children }: { children: any }) {
  return <Table className="min-w-full">{children}</Table>;
}

// TableHeader.js
function TableHeaders({ headers }: { headers: any }) {
  return (
    <TableHeader>
      <TableRow>
        {headers.map((header: any) => (
          <TableHead key={header.key} className={header.className}>
            {header.label}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}

// TableBody.js
function TableBodys({ children }: { children: any }) {
  return <TableBody>{children}</TableBody>;
}

// TableRow.js
function TableRows({ children, className }: { children: any; className: any }) {
  return <TableRow className={className}>{children}</TableRow>;
}

// TableCell.js
function TableCells({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string; // Making it optional with a default value
}): JSX.Element {
  return <TableCell className={className}>{children}</TableCell>;
}

// Badge.js
function Badges({ children, variant }: { children: any; variant: any }) {
  return <Badge className={`badge text-xs ${variant}`}>{children}</Badge>;
}

// DataRow.js
export function DataRow({ data, headers }: { data: any[]; headers: any[] }) {
  return data.map((item, index) => (
    <TableRows key={index} className={item.className || ""}>
      {headers.map((header) => {
        // If the content needs special formatting like badges, you can conditionally check the header key
        const content =
          header.key === "status" ? (
            <Badges variant={item.badgeVariant || "default"}>
              {item[header.key]}
            </Badges>
          ) : (
            item[header.key]
          );

        return (
          <TableCells key={header.key} className={header.className || ""}>
            {content}
          </TableCells>
        );
      })}
    </TableRows>
  ));
}