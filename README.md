# Mongo-DB

## Non-Relational DB

## Relation => Table

## Rows => Tuples

## Columns => Attributes

irctc_fln (1k train infos)
1 train heading towards to goa => 1k train all

irctc_db (1k train infos)
1 train heading toward to goa => 1 train only

Data => json (csv)format >> schemless

<!--  

router.get("/issued/by-user", (req, res) => {
  const usersWithIssuedBooks = users.filter((each) => {
    if (each.issuedBook) return each;
  });

  const issuedBooks = [];

  usersWithIssuedBooks.forEach((each) => {
    const book = books.find((book) => book.id === each.issuedBook);

    book.issuedBy = each.name;
    book.issuedDate = each.issuedDate;
    book.returnDate = each.returnDate;

    issuedBooks.push(book);
  });
  if (issuedBooks.length === 0) {
    return res
      .status(404)
      .json({ success: false, message: "No books issued yet." });
  }
  return res.status(200).json({ success: true, data: issuedBooks });
});
--!>
