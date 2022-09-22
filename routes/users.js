const express = require('express');

const router = express.Router();

router.get('/', (req,res)=>{
  const { limit, offset} = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset,
    })
  }else{
    res.send('se necesita un limite y un offset');
  }
});

module.exports = router;
