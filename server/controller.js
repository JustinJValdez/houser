module.exports = {
    
getHouses: (req,res,next)=>{
    const db =req.app.get('db');
    db.get_list().then(result => {
        res.send(result)
    })
},

postHouses:(req,res,next)=>{
    const dbinstance = req.app.get('db');
    const { houseName, address, city, state, zip}=req.body;
    dbinstance.create_house([houseName, address, city, state, zip])
    dbinstance.get_list().then(result => {
        res.send(result)
    });
},


}