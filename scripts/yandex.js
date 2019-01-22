/*ajax*/
/*XMLHTTP*/

  function getXmlHttp() {
    var xmlhttp;
    try {
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
    }
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
      xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
  }
  function send() {
    var xmlhttp = getXmlHttp(); //XMLHTTP
    xmlhttp.open('POST', 'test.php', true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlhttp.send("site=" + encodeURIComponent("http://ya.ru/?a=5")); //POST-
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4) {
        if(xmlhttp.status == 200) { //200 (норм)
          document.getElementById("yandex").innerHTML = xmlhttp.responseText;
        }
      }
    };
  }