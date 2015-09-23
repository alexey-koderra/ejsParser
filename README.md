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
ejs:
<pre>
	<p><strong>ID:</strong><%= Object.id //%></p>
	<p><strong>От:</strong><%= Object.name %></p>
	<p><strong>Email:</strong><%= Object.email %></p>
	<p><strong>Phone:</strong><%= Object.phone %></p>
	<p><strong>Skype:</strong><%= Object.skype %></p>
	<p><strong>Описание:</strong><%= Object.description %></p>
</pre>
###Замечания:
В эдинственный метод модуля .produceHTML(Object, uri) нужно передать первым параметром объект значения которого будут заменены в ejs файле, вторым параметром должна быть строка равная uri ejs-файла в который необходимо распарсить.

