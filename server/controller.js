module.export = {
    
getHouses: (req,res,next)=>{
    const db =req.app.get('db');
    db.get_inventory().then(result => {
        res.send(result)
    })
}

}