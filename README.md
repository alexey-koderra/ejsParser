# ejsParser v0.1.0
легковесный модуль не содержащий зависимости для преобразования ejs файла в html путем замены javascript-вставок на их реальные значения.

---------------------------------------
## Как начать использовать
**Пример**
<pre>
    var toHTMLengine = require("ejsParser");
    var Object = [];
    Object.id = req.body.ID;
    Object.name = req.body.name;
    Object.email = req.body.email;
    Object.phone = req.body.phone;
    Object.skype = req.body.skype;
    Object.description = req.body.messageBody;
    var path = require('path');
    var os = require('os');
    var uri = (os.platform() == "win32") ? path.resolve("./path/to/mytemplate/_MailTemplate.ejs") :
    path.resolve("../path/to/mytemplate/_MailTemplate.ejs");
    ....
    var template = toHTMLengine.produceHTML(Object, uri);// now template is a html in which js snippets replaced with real data
    </pre>
