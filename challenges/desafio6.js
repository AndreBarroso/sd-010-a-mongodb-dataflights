/* 6 - Retorne apenas os campos empresa.sigla,
empresa.nome e passageiros do voo com o campo vooId igual a 756807 */

db.voos.find({ vooId: 756807 }, {
   _id: 0, "empresa.sigla": true, "empresa.nome": true, passageiros: true });
