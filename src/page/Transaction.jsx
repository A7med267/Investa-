{invoices.map((invoice, index) => (
  <TableRow key={`${invoice.date}-${index}`}>
    <TableCell>{invoice.date}</TableCell>
    <TableCell>{invoice.name}</TableCell>
    <TableCell>{invoice.company}</TableCell>
    <TableCell>{invoice.email}</TableCell>
    <TableCell>{invoice.vat}</TableCell>
    <TableCell>
      <MDButton
        component={Link}
        to={invoice.link}
        variant="text"
        color="info"
        fontWeight="medium"
      >
        {invoice.link}
      </MDButton>
    </TableCell>
  </TableRow>
))} 