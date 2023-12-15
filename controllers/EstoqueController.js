const { estoque } = require ('../models')

class EstoqueController{
    static async store(req, res){
        try{
            const estoque = await estoque.create({
                nome: req.body.nome,
                tipo: req.body.tipo,
                vendas: req.body.vendas,
                quantidade_estoque: req.body.quantidade_estoque
            })
            res.json(estoque)
        }catch(e){
            res.status(500).json({
                error:"Não foi possível realizar essa operação"
            })
        }
    }

    static async index(req, res){
        try{
            const estoque = findAll()
        }catch(e){
            res.status(500).json({
                error:"Não foi possível realizar essa operação"
            })
        }
    }

    static async show(req, res){
        try{
            const estoque = estoque.findOne({
                where:{
                    id: req.params.id
                }
            })
        }catch(e){
            res.status(500).json({
                error:"Não foi possível realizar essa operação"
            })
        }
    }

    static async update(req, res){
        try{
            const estoque = findOne({
                where:{
                   id: req.params.id
                }
            })

            estoque.update({
                nome: req.body.nome,
                tipo: req.body.tipo,
                vendas: req.body.vendas, 
                quantidade_estoque: req.body.quantidade_estoque
            })
            }catch(e){
                res.status(500).json({
                    error:"Não foi possível realizar essa operação"
                })
            }
        }
    static async destroy(req, res){
        try{
            const estoque = estoque.findOne({
                where:{
                    id: req.params.id
                }
            })

            estoque.destroy()

            res.json({
                success: true
            })
        }catch(e){
            res.status(500).json({
                error:"Não foi possível realizar essa operação"
            })
            }
    }
}


module.exports = EstoqueController