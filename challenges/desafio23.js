/* 23 - Retorne o vooId e litrosCombustivel do primeiro voo
em que o campo litrosCombustivel não seja maior do que
1000 e o campo litrosCombustivel exista. */
db.voos.findOne({ litrosCombustivel: { $exists: 1, $lte: 1000 } },
  { _id: 0, vooId: 1, litrosCombustivel: 1 });
