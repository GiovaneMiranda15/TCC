const Desafios = require("../Entity/Desafios");
const Materias = require("../Entity/Materiais");
const Estudo = require('../Entity/Estudo')
const Resultados = require('../Entity/Resultados')

class ControleAtividades{
    insertDesafio(newDesafio){
        let d = new Desafios()
        if(!d.setTitulo(newDesafio.titulo)) return false;

        if (!d.setDescricao(newDesafio.descricao)) return false
        
        if (!d.setAnexo(newDesafio.anexo)) return false
        
        if (!d.setCreatedBy(newDesafio.created_by)) return false;

        if(newDesafio.permission!==1){
            return false
        }

        return true
    }

    insertMaterial(newMaterial){
        let m = new Materias()
        if(!m.setTitulo(newMaterial.titulo)) return false;

        if (!m.setDescricao(newMaterial.descricao)) return false
        
        if (!m.setAnexo(newMaterial.anexo)) return false
        
        if (!m.setCreatedBy(newMaterial.created_by)) return false;

        if(newMaterial.permission!==1){
            return false
        }

        return true
    }

    updateDesafio(newDesafio){
        let d = new Desafios()
        if(!d.setId(newDesafio.id)) return false;
        
        if(!d.setTitulo(newDesafio.titulo)) return false;

        if (!d.setDescricao(newDesafio.descricao)) return false
        
        if (!d.setAnexo(newDesafio.anexo)) return false
        
        if (!d.setUpdatedBy(newDesafio.updated_by)) return false;

        if(newDesafio.permission!==1){
            return false
        }

        return true
    }

    updateMaterial(newMaterial){
         let m = new Materias()
        if(!m.setId(newMaterial.id)) return false;

        if(!m.setTitulo(newMaterial.titulo)) return false;

        if (!m.setDescricao(newMaterial.descricao)) return false
        
        if (!m.setAnexo(newMaterial.anexo)) return false
        
        if (!m.setUpdatedBy(newMaterial.updated_by)) return false;

        if(newMaterial.permission!==1){
            return false
        }

        return true
    }

    deleteDesafio(newDesafio){
        let d = new Desafios()
        if(!d.setId(newDesafio.id)) return false;
        
        if (!d.setDeletedBy(newDesafio.deleted_by)) return false;

        if(newDesafio.permission!==1){
            return false
        }

        return true
    }

    deleteMaterial(newMaterial){
        let m = new Materias()
        if(!m.setId(newMaterial.id)) return false;
        
        if (!m.setDeletedBy(newMaterial.deleted_by)) return false;

        if(newMaterial.permission!==1){
            return false
        }

        return true
    }

    postDesafio(newDesafio){
        let r = new Resultados()
        if(!r.setPessoaId(newDesafio.pessoa_id)) return false;

        if(!r.setDescricao(newDesafio.descricao)) return false;

        if(!r.setDesafioId(newDesafio.id)) return false;

        if(!r.setCreatedBy(newDesafio.created_by)) return false;

        if(newDesafio.permission!==1){
            return false
        }

        return true

    }

    postMaterial(newMaterial){
        let e = new Estudo()
        if(!e.setPessoaId(newMaterial.pessoa_id)) return false;

        if(!e.setDescricao(newMaterial.descricao)) return false;

        if(!e.setMaterialId(newMaterial.id)) return false;

        if(!e.setCreatedBy(newMaterial.created_by)) return false;

        if(newMaterial.permission!==1){
            return false
        }

        return true
    }

    removeDesafio(newDesafio){
        let r = new Resultados()
        if(!r.setPessoaId(newDesafio.pessoa_id)) return false;

        if(!r.setDesafioId(newDesafio.id)) return false;

        if(!r.setDeletedBy(newDesafio.deleted_by)) return false;

        if(newDesafio.permission!==1){
            return false
        }

        return true
    }

    removeMaterial(newMaterial) {
        let e = new Estudo()
        if(!e.setPessoaId(newMaterial.pessoa_id)) return false;

        if(!e.setMaterialId(newMaterial.id)) return false;

        if(!e.setDeletedBy(newMaterial.deleted_by)) return false;

        if(newMaterial.permission!==1){
            return false
        }

        return true
    }
 
    checkDesafio(newDesafio){
        let r = new Resultados()
        if(!r.setPessoaId(newDesafio.pessoa_id)) return false;

        if(!r.setDesafioId(newDesafio.id)) return false;

        if(!r.setUpdatedBy(newDesafio.updated_by)) return false;

        if(newDesafio.permissionAluno!==2){
            return false
        }

        return true

    }

    validarDesafio(newDesafio){
        let r = new Resultados()
        if(!r.setPessoaId(newDesafio.pessoa_id)) return false;

        if(!r.setDesafioId(newDesafio.id)) return false;

        if(!r.setDesempenho(newDesafio.desempenho)) return false;

        if(!r.setUpdatedBy(newDesafio.updated_by)) return false;

        if(newDesafio.permission!==1){
            return false
        }

        return true

    }

    checkMaterial(newMaterial){
        let e = new Estudo()
        if(!e.setPessoaId(newMaterial.pessoa_id)) return false;

        if(!e.setMaterialId(newMaterial.id)) return false;

        if(!e.setUpdatedBy(newMaterial.updated_by)) return false;

        if(newMaterial.permissionAluno!==2){
            return false
        }

        return true
    }

}

module.exports=ControleAtividades