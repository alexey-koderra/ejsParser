/**
 * Created by alexey on 19.09.15.
 */
var templator = require("../produceHTML");
var User=[];
    User.name="Alexey";
    User.email="mmmsa@meta.ua";
    User.birthdate="1990/12/30";
    User.lname="Vladimirovich";
var str = templator.produceHTML(User,__dirname+"/test_page.ejs");
console.log(str);