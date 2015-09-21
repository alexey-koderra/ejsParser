// run program
var fs= require('fs');
function produceHTML(object,file){

    if(fs.existsSync(file)) {
        var str=fs.readFileSync(file, 'utf8');
        var myRe = /<%=(\s)*(\w)+.(\w)+(\s)*%>/g;
        var myArray=[];
        var ejsCodeArray=[];
        var elem;
        var html="";
        while ((elem = myRe.exec(str)) != null)
        {
            if(elem[0].indexOf("+")==-1)
            myArray.push(replacer(elem[0]));
            ejsCodeArray.push(elem[0]);
        }
        for(var a =0;a<myArray.length;a++)
        {
            if(html=="") {
                html = htmlProducer(myArray[a], object, ejsCodeArray[a], str);
            }
            else{
                html = htmlProducer(myArray[a], object, ejsCodeArray[a], html);
            }
        }

    return html;
    }
    else{
        console.error("[produceHTML]: specified file not exists or argument set wrong");
        return null;
    }
}
function replacer(eobject){
    var property=eobject.slice(eobject.indexOf(".")+1,eobject.indexOf("%>"));
    return property;
}
function htmlProducer(element,arr2,ejscode,ejs_content){
    for(iter in arr2){
        var key1 = iter.trim();
        var key2 = element.trim();
        if(key1==key2){
           return ejs_content.replace(ejscode,arr2[iter]);
        }
    }
}
exports.produceHTML=produceHTML;