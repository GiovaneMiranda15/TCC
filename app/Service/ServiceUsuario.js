const Usuario = require('../Entity/Usuario');
const Endereco = require('../Entity/Endereco');
const Contato = require('../Entity/Contato');

class ControleUsuarios {
    insert(newUsuario) {
        let u = new Usuario()
        if(!u.setCpf(newUsuario.cpf)) return false;

        if (!u.setNome(newUsuario.nome)) return false
        
        if (!u.setEmail(newUsuario.email)) return false
        
        if (!u.setSenha(newUsuario.senha)) return false;
        
        if (!u.setTipo(newUsuario.tipo)) return false;
        
        if (!u.setProfissionalId(newUsuario.profissional_id)) return false;
        
        if (!u.setCreatedBy(newUsuario.created_by)) return false;
        
        return true
    }

    update(newUsuario){
        let u = new Usuario()
        if(!u.setCpf(newUsuario.cpf)) return false;

        if(!u.setId(newUsuario.id)) return false;
        
        if (!u.setNome(newUsuario.nome)) return false
        
        if (!u.setEmail(newUsuario.email)) return false
        
        if (!u.setSenha(newUsuario.senha)) return false;
        
        if (!u.setTipo(newUsuario.tipo)) return false;
        
        if (!u.setProfissionalId(newUsuario.profissional_id)) return false;
        
        if (!u.setUpdatedBy(newUsuario.updated_by)) return false;
        
        return true;
    }

    delete(newUsuario){
        let u = new Usuario()
        
        if (!u.setTipo(newUsuario.tipo)) return false;

        if(!u.setId(newUsuario.id)) return false;

        if (!u.setDeletedBy(newUsuario.deleted_by)) return false;

        if(newUsuario.permission===2 || (u.getTipo()===0 && newUsuario.permission!=1)){
            return false
        }
        
        return true;
    }

    login(newUsuario){
        let u = new Usuario()

        if(!u.setEmail(newUsuario.email)) return false;

        if (!u.setSenha(newUsuario.senha)) return false;
        
        return true;
    }
}

module.exports = ControleUsuarios