import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
  
  export default function Trasaction() {
    return (
        <>
        <div className="flex justify-between px-8 my-4 text-l font-bold ">
            <div className=" border-x   px-2  flex gap-2">
            <button className="  text-slate-400 ">Transaction</button>
            <button className="">issued card</button>
            </div>
            <div className=" flex gap-2 ">
                <button className="border p-2">Dwonload</button>
                <button className="border p-2">filter</button>

            </div>

        </div>
         <Table className="w-full ">
         <TableHeader>
          <TableRow>
            <TableHead className=" ">Amount</TableHead>
            <TableHead colSpan=" ">Currency</TableHead>
            <TableHead>Cardholder</TableHead>
            <TableHead className=" ">status</TableHead>
            <TableHead className=" ">Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className=" ">
          {invoices.map((invoice) => (
            <TableRow className="  " key={invoice.invoice}>
              <TableCell className=" ">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="  "><div className="p-2"><span className=" border border-black  p-1 "> {invoice.totalAmount}</span></div></TableCell>
              <TableCell className=" ">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
         
      </Table>
      <div className="flex justify-between px-8 my-4 text-xl   ">
            <div className=" border-x   px-2  flex gap-2">
             viewing 1-7 of 100 Result
            </div>
            <div className=" flex gap-2 ">
                <button className="border p-2">Previous</button>
                <button className="border p-2">Next</button>

            </div>

        </div>
        </>
     

    )
  }
  