var usermodel = require('../model/usermodel');

exports.insert = async (req,res) => {
    var data = await usermodel.create(req.body);

    res.status(200).json({
        status:"success",
        data
    })

}
exports.select_data = async (req,res) => {
    var data = await usermodel.find();

    res.status(200).json({
        status:"success",
        data
    })

}
exports.delete_data = async (req,res) => {

    var id = req.params.id;
    var data = await usermodel.findByIdAndDelete(id);

    res.status(200).json({
        status:"data Deleted",
        
    })

}
exports.update_data = async (req,res) => {

    var id = req.params.id;
    var data = await usermodel.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status:"data updated",
    });

}