'use strict'

const { test, trait } = use('Test/Suite')('Example')

//Teste do controle de usuários
const User = require('../../app/Entity/Usuario')

let usuario = new Object();
usuario.id = 1;
usuario.nome = 'Giovane';
usuario.email = 'aaaaaaa@aaaaaa.com';
usuario.senha = '000000';
usuario.tipo = 1;
usuario.cpf = '073.335.421-14';
usuario.profissional_id = null;
usuario.created_by = 'Giovane';
usuario.updated_by = 'Giovane';
usuario.deleted_by = 'Giovane';
usuario.permission = 0

test('Teste Unitário - Inserção de usuário', async ({ assert }) => {
  let user = new User();
  assert.equal(user.setNome(usuario.nome), true)
  assert.equal(user.setEmail(usuario.email), true)
  assert.equal(user.setSenha(usuario.senha), true)
  assert.equal(user.setTipo(usuario.tipo), true)
  assert.equal(user.setCpf(usuario.cpf), true)
  assert.equal(user.setProfissionalId(usuario.profissional_id), true)
  assert.equal(user.setCreatedBy(usuario.created_by), true)
})