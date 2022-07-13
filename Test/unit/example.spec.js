'use strict'

const { test, trait } = use('Test/Suite')('Example')

//Teste do controle de usuários
  const User = require('../../app/Entity/Usuario')
  const ControleUsuarios = require('../../app/Service/ServiceUsuario')

  let usuario = new Object();
  usuario.id = 18;
  usuario.nome = 'Giovane';
  usuario.email = 'aaaaaaa@aaaaaa.com';
  usuario.senha = '000000';
  usuario.tipo = 1;
  usuario.cpf = '07333542114';
  usuario.profissional_id = null;
  usuario.created_by = 'Giovane';
  usuario.updated_by = 'Giovane';
  usuario.deleted_by = 'Giovane';
  usuario.permission = 0

  test('Teste Unitário - Intanciação de usuário', async ({assert})=>{
      let user = new User();
    assert.equal(user.setNome(usuario.nome), true)
    assert.equal(user.setEmail(usuario.email), true)
    assert.equal(user.setSenha(usuario.senha), true)
    assert.equal(user.setTipo(usuario.tipo), true)
    assert.equal(user.setCpf(usuario.cpf), true)
    assert.equal(user.setProfissionalId(usuario.profissional_id), true)
    assert.equal(user.setCreatedBy(usuario.created_by), true)
  })

  test('Teste Unitário - Atualização de usuário', async ({assert})=>{
      let user = new User();
      assert.equal(user.setId(usuario.id), true)
      assert.equal(user.setNome(usuario.nome), true)
      assert.equal(user.setEmail(usuario.email), true)
      assert.equal(user.setSenha(usuario.senha), true)
      assert.equal(user.setTipo(usuario.tipo), true)
      assert.equal(user.setCpf(usuario.cpf), true)
      assert.equal(user.setProfissionalId(usuario.profissional_id), true)
      assert.equal(user.setUpdatedBy(usuario.updated_by), true)
  })

  test('Teste Unitário - Remoção de usuário', async ({assert})=>{
      let user = new User();
      assert.equal(user.setId(usuario.id), true)
      assert.equal(user.setDeletedBy(usuario.deleted_by), true)
  })

  test('Teste Unitário - Login', async ({assert})=>{
      let user = new User();
      assert.equal(user.setEmail(usuario.email), true)
      assert.equal(user.setSenha(usuario.senha), true)
  })

  test('Teste de Integração - Criação do usuário', async ({assert})=>{
      let controle = new ControleUsuarios()
      assert.equal((await controle.insert(usuario)).success, true)
  })

  test('Teste de Integração - Atualização do usuário', async ({assert})=>{
      let controle = new ControleUsuarios()
      assert.equal((await controle.update(usuario)).success, true)
  })

  test('Teste de Integração - Remoção do usuário', async ({assert})=>{
      let controle = new ControleUsuarios()
      assert.equal((await controle.delete(usuario)).success, true)
  })

//Teste de controle de atividades

const Materiais = require('../../app/Entity/Materiais')
const Desafios = require('../../app/Entity/Desafios')
const ControleAtividades = require('../../app/Service/ControleAtividades')

  let conteudo = new Object();
  conteudo.id=1;
  conteudo.titulo='Teste';
  conteudo.descricao='teste';
  conteudo.anexo='c:/teste';
  conteudo.created_by = 'Giovane';
  conteudo.updated_by = 'Giovane';
  conteudo.deleted_by = 'Giovane';
  conteudo.permission = 1;
  conteudo.pessoa_id = 1;
  conteudo.desempenho = 10;
  conteudo.permissionAluno=2

test('Teste Unitario - Instanciação de Material', async ({assert})=>{
  let material = new Materiais();
  assert.equal(material.setTitulo(conteudo.titulo), true)
  assert.equal(material.setDescricao(conteudo.descricao), true)
  assert.equal(material.setAnexo(conteudo.anexo), true)
  assert.equal(material.setCreatedBy(conteudo.created_by), true)
})

test('Teste Unitario - Instanciação de Desafios', async ({assert})=>{
  let desafios = new Desafios();
  assert.equal(desafios.setTitulo(conteudo.titulo), true)
  assert.equal(desafios.setDescricao(conteudo.descricao), true)
  assert.equal(desafios.setAnexo(conteudo.anexo), true)
  assert.equal(desafios.setCreatedBy(conteudo.created_by), true)
})

test('Teste Unitario - Atualização de Material', async ({assert})=>{
  let material = new Materiais();
  assert.equal(material.setId(conteudo.id), true)
  assert.equal(material.setTitulo(conteudo.titulo), true)
  assert.equal(material.setDescricao(conteudo.descricao), true)
  assert.equal(material.setAnexo(conteudo.anexo), true)
  assert.equal(material.setUpdatedBy(conteudo.updated_by), true)
})

test('Teste Unitario - Atualização de Desafios', async ({assert})=>{
  let desafios = new Desafios();
  assert.equal(desafios.setId(conteudo.id), true)
  assert.equal(desafios.setTitulo(conteudo.titulo), true)
  assert.equal(desafios.setDescricao(conteudo.descricao), true)
  assert.equal(desafios.setAnexo(conteudo.anexo), true)
  assert.equal(desafios.setUpdatedBy(conteudo.updated_by), true)
})

test('Teste Unitario - Remoção de Material', async ({assert})=>{
  let material = new Materiais();
  assert.equal(material.setId(conteudo.id), true)
  assert.equal(material.setDeletedBy(conteudo.deleted_by), true)
})

test('Teste Unitario - Remoção de Desafios', async ({assert})=>{
  let desafios = new Desafios();
  assert.equal(desafios.setId(conteudo.id), true)
  assert.equal(desafios.setDeletedBy(conteudo.deleted_by), true)
})

test('Teste de Integração - Inserção do Material', async ({assert})=>{
  let controle = new ControleAtividades()
  assert.equal(controle.insertMaterial(conteudo), true)
})
test('Teste de Integração - Inserção do Desafio', async ({assert})=>{
  let controle = new ControleAtividades()
  assert.equal(controle.insertDesafio(conteudo), true)
})

test('Teste de Integração - Atualização do Material', async ({assert})=>{
  let controle = new ControleAtividades()
  assert.equal(controle.updateMaterial(conteudo), true)
})
test('Teste de Integração - Atualização do Desafio', async ({assert})=>{
  let controle = new ControleAtividades()
  assert.equal(controle.updateDesafio(conteudo), true)
})

test('Teste de Integração - Remoção do Material', async ({assert})=>{
  let controle = new ControleAtividades()
  assert.equal(controle.deleteMaterial(conteudo), true)
})
test('Teste de Integração - Remoção do Desafio', async ({assert})=>{
  let controle = new ControleAtividades()
  assert.equal(controle.deleteDesafio(conteudo), true)
})

test('Teste de Integração - Postagem do Material', async ({assert})=>{
  let controle = new ControleAtividades()
  assert.equal(controle.postMaterial(conteudo), true)
})
test('Teste de Integração - Postagem do Desafio', async ({assert})=>{
  let controle = new ControleAtividades()
  assert.equal(controle.postDesafio(conteudo), true)
})

test('Teste de Integração - Remover do Material', async ({assert})=>{
  let controle = new ControleAtividades()
  assert.equal(controle.removeMaterial(conteudo), true)
})
test('Teste de Integração - Remover do Desafio', async ({assert})=>{
  let controle = new ControleAtividades()
  assert.equal(controle.removeDesafio(conteudo), true)
})

test('Teste de Integração - Realização do Material', async ({assert})=>{
  let controle = new ControleAtividades()
  assert.equal(controle.checkMaterial(conteudo), true)
})

test('Teste de Integração - Realização do Desafio', async ({assert})=>{
  let controle = new ControleAtividades()
  assert.equal(controle.checkDesafio(conteudo), true)
})

test('Teste de Integração - Correção do Desafio', async ({assert})=>{
  let controle = new ControleAtividades()
  assert.equal(controle.validarDesafio(conteudo), true)
})
