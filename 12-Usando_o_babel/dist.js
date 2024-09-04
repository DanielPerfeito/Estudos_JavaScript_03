"use strict";

var mensagem = function mensagem(nome) {
  console.log("Ol\xE1, ".concat(nome, ", voc\xEA est\xE1 praticando o babel!"));
};
mensagem('Daniel');
