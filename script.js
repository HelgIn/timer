jQuery.fn.okTimer = function(year, mounth, day, format) {
  
  this.addClass("okTimer");
  var $this = this;
  var arFormat = format.split(":");
  
  for(var i = 0; i < arFormat.length; i++) {     
     $this.append("<span class='timerItem " + arFormat[i] + "'></span>");
  }
  
  var result = { 
    'd' : 0, 'h' : 0, 'm' : 0, 's' : 0
  };  
  /* target date */
  var targetDate = new Date(year, mounth-1, day);
    
  /* date now */
  var today = new Date();
    
  /* total difference in seconds */
  var differense = Math.floor((targetDate - today) / 1000);
  
  timer(differense);
    
  function timer(differense) {                          
    
    for(var i = 0; i < arFormat.length; i++) {
        var label = "";   
        switch(arFormat[i]) {
           case 'd' :
              /* difference in days */
              result['d'] = Math.floor(differense / 3600 / 24);            
              label = "days"; 
              break;
           case 'h' :  
              label = "hours";
              /* difference in hours */
              result['h'] = Math.floor(differense / 3600) - (result['d'] * 24); 
              break;
           case 'm' :  
              label = "min";
              /* difference in minutes */
              result['m'] = Math.floor(differense / 60) - (result['d'] * 24 * 60) - (result['h'] * 60); 
              break;
           case 's' :  
              label = "sec";
              /* difference in minutes */
              result['s'] = Math.floor(differense) - (result['d'] * 24 * 60 * 60) - (result['h'] * 60 * 60) - (result['m'] * 60); 
              break;
        }     
        $("." + arFormat[i]).html(result[arFormat[i]] + " " + label);
    }
    
    setTimeout(
      function(){
        timer(differense - 1);
      }    
      , 1000);
  }  
}