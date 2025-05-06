const blogModel = require('../model/blog')


module.exports = {


    create_blog: async (req, res) => {
        try {
            let body = req.body
            console.log(body, "incoming body")
            const blog = await blogModel(body).save()
            res.status(200).send({ status: true, code: 200, message: "New Blog Created Successfully", result: blog })
        } catch (error) {
            console.log(error)
            res.status(500).send({ status: false, code: 500, message: "INTERNAL ERROR" })
        }
    },
    update_blog:async(req,res)=>{
        try {
           let body = req.body
           console.log(body , "incmming body") 
           body.timeStamp = Date.now()
           const blog = await blogModel.findOneAndUpdate({_id :body._id} , {$set:body},{new:true})
           if(!blog) return res.status(201).send({status:false , code: 201 ,message:"ERROR WHILE UPDATING THE BLOG"})
            res.status(200).send({status:true , code: 200 , message:"Update Successfully" , result:blog})
        } catch (error) {
            console.log(error)
            res.status(500).send({ status: false, code: 500, message: "INTERNAL ERROR" })
        }
    },

    delete_blog: async (req, res) => {
        try {
            let body = req.body
            console.log(body, "incoming body")
            let blog = await blogModel.findOneAndDelete({ _id: body.blogId })
            if (!blog) return res.status(201).send({ status: false, code: 201, message: "Error While Deleting the Blog" })
            res.status(200).send({ status: true, code: 200, message: "Blog delete successfuly" })
        } catch (error) {
            console.log(error)
            res.status(500).send({ status: false, code: 500, message: "INTERNAL ERROR" })
        }
    } ,
    get_blog:async(req,res)=>{
        try {
            let blog = await blogModel.find({})
            if(blog.length < 0) return res.status(201).send({status:false , code: 201 , message:"No List Found"})
                res.status(200).send({status:true , code: 200 , message:"List Fetch Successfuly" , result:blog})
        } catch (error) {
            console.log(error)
            res.status(500).send({status:false , code: 500 , message:"INERNAL ERROR"})
        }
    }





}