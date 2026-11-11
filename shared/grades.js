// Graus do grupo admin.
// O grau 1 é o mais baixo. O grau 3 é o mais alto.
// Quem tem um grau maior também recebe o que os graus menores podem fazer.
// Para mudar o acesso, mova a linha de um bloco para outro e reinicie o servidor.
//
// admin.view         abrir o painel
// admin.kick         expulsar
// admin.teleport     teleporte e coordenadas
// admin.freeze       prender, soltar, vida e reanimar
// admin.warn         advertir
// admin.announce     anúncio grande e aviso menor
// admin.noclip       noclip
// admin.groups       grupos
// admin.jobs         trabalhos
// admin.inventory    itens e galeões da bolsa
// admin.appearance   aparência
// admin.spells       feitiços
// admin.banking      crédito e débito
// admin.treasury     tesouraria
// admin.audit        registro
// admin.environment  clima, horário e estação
// admin.ban          banir e revogar
// admin.reconcile    conciliar o banco

module.exports = {
  roleRules: [
    {
      group: "admin",
      minimumGrade: 1,
      capabilities: [
        "admin.view",
        "admin.kick",
        "admin.teleport",
        "admin.freeze",
        "admin.warn",
        "admin.announce",
        "admin.noclip"
      ]
    },
    {
      group: "admin",
      minimumGrade: 2,
      capabilities: [
        "admin.groups",
        "admin.jobs",
        "admin.inventory",
        "admin.appearance",
        "admin.spells",
        "admin.banking",
        "admin.treasury",
        "admin.audit",
        "admin.environment"
      ]
    },
    {
      group: "admin",
      minimumGrade: 3,
      capabilities: [
        "admin.ban",
        "admin.reconcile"
      ]
    }
  ]
};
