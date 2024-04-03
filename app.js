const express = require('express');
var bodyParser = require('body-parser')
const app = express();
var jsonParser = bodyParser.json()
var PORT=process.env.PORT || 3001
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var chatObj={
 "value":0
}


app.get("/getchat",(req,rep)=>{
    
     
    rep.status(200).json({"message":chatObj})

})

app.post("/sendChat/:id",(req, res) => {
    var date = parseInt(req.params.id);
      chatObj.value=date
    
         
    
    res.json({
        "sucess":true,
        "message":chatObj
    });
});



app.use(bodyParser.json());

app.get("/homedata",(req,rep)=>{

    var data={
        "name":"fffff",
        "rollno":50,
        "data":[{
            "m1":10,
            "m2":20,
        },
        {
            "m1":10,
            "m2":20,
        },
        {
            "m1":10,
            "m2":20,
        }
    ]
    }
    rep.json(data)

})

app.get("/homedata/:id",(req, res) => {
    var date = parseInt(req.params.id);
    var data = [];
    
    for (var i = 1; i <= date; i++) {
        var obj = {};
        obj[i.toString()] = {
            "name": "fffff",
            "rollno": 50,
            "data": [{
                "m1": 10,
                "m2": 20,
            }, {
                "m1": 10,
                "m2": 20,
            }, {
                "m1": 10,
                "m2": 20,
            }]
        };
        data.push(obj);
    }
    
    res.json(data);
});

app.post('/discount', (req, res) => {
    
    console.log(req.body)
    console.log("CleanInt: ", cleanInt('xyz'), " ParseInt: ", parseInt('xyz'));
console.log("CleanInt: ", cleanInt('123abc'), " ParseInt: ", parseInt('123abc'));
console.log("CleanInt: ", cleanInt('234'), " ParseInt: ", parseInt('234'));
console.log("CleanInt: ", cleanInt('-679'), " ParseInt: ", parseInt('-679'));
console.log("CleanInt: ", cleanInt('897.0998'), " ParseInt: ", parseInt('897.0998'));
console.log("CleanInt: ", cleanInt('Infinity'), " ParseInt: ", parseInt('Infinity'));
    
    res.json(req.body)
   
  });



app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", 3001);
});


