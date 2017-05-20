$(document).ready(function() {
       
    var d = new Date();
    
    var month = {
        0:'Jan',
        1:'Feb',
        2:'Mar',
        3:'Apr',
        4:'May',
        5:'Jun',
        6:'Jul',
        7:'Aug',
        8:'Sep',
        9:'Oct',
        10:'Nov',
        11:'Dec'
    };
    
    var day = {
        0:'Mon',
        1:'Tue',
        2:'Wed',
        3:'Thu',
        4:'Fri',
        5:'Sat',
        6:'Sun'
    }
    
    var m = month[d.getMonth()];
    
    for(var i=0;i<4 ;i++){
        $('#firstDay').html(+m+''+d.getDate());
    }
    
    
    
});

 