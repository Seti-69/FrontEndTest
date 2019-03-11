class GetData{

    
    contructor(){
        
        
    }

  getjson01(url){
      
      $.getJSON(url, function (data) {
        var items = [];
        document.getElementById("json01").innerHTML += "Number of users: " + data.length + "</br>";
        $.each(data , function (id) {
       
            items.push(data[id].id,data[id].userId,data[id].title,data[id].body);

     
        });
        
        var count = 0;
        for (count; count < items.length;count++){
            document.getElementById("json01").innerHTML += "<tr><td width='15%'>ID:</td><td width='75%'>" + items[count] + "</tr>";
            count++
            document.getElementById("json01").innerHTML += "<tr><td width='15%'>User ID:</td><td width='75%'>" + items[count] + "</tr>";
            count++
            document.getElementById("json01").innerHTML += "<tr><td width='15%'>Title:</td><td width='75%'>" + items[count] + "</tr>";
            count++
            document.getElementById("json01").innerHTML += "<tr><td width='15%'>Information</td><td width='75%'>" + items[count] + "</tr></br>";
        }
      });
  }
  search(url2) {
      
      
      $.getJSON(url2, function (data) {

          
          var items = [];
          
          

              items.push(data.id, data.userId, data.title, data.body);

           
          
          var count = 0;
          
              document.getElementById("json02").innerHTML += "<tr><td width='15%'>ID:</td><td width='75%'>" + items[count] + "</tr>";
              count++
              document.getElementById("json02").innerHTML += "<tr><td width='15%'>User ID:</td><td width='75%'>" + items[count] + "</tr>";
              count++
              document.getElementById("json02").innerHTML += "<tr><td width='15%'>Title:</td><td width='75%'>" + items[count] + "</tr>";
              count++
              document.getElementById("json02").innerHTML += "<tr><td width='15%'>Information</td><td width='75%'>" + items[count] + "</tr></br>";
          
      });
  }

  getjson03(url) {
      $.getJSON(url, function (data2) {
          var items = [];
          document.getElementById("json03").innerHTML += "Number of users: " + data2.length + "</br>";
          $.each(data2, function (id) {

              items.push(data2[id].postId, data2[id].id, data2[id].name, data2[id].email, data2[id].body);


          });
          
          var count = 0;
          for (count; count < items.length; count++) {
              document.getElementById("json03").innerHTML += "<tr><td width='15%'>Post ID:</td><td width='75%'>" + items[count] + "</tr>";
              count++
              document.getElementById("json03").innerHTML += "<tr><td width='15%'>ID:</td><td width='75%'>" + items[count] + "</tr>";
              count++
              document.getElementById("json03").innerHTML += "<tr><td width='15%'>Name:</td><td width='75%'>" + items[count] + "</tr>";
              count++
              document.getElementById("json03").innerHTML += "<tr><td width='15%'>Email</td><td width='75%'>" + items[count] + "</tr>";
              count++
              document.getElementById("json03").innerHTML += "<tr><td width='15%'>Information</td><td width='75%'>" + items[count] + "</tr>";
          }
      });
  }
}

