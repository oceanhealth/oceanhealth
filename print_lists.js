const request = require('request');


warptok1 = '_QXjbAsRBOwEDv-tVGgc'
warptok2 = ''
warptok3 = 'dbVl2mvCe5PUIIem'
warptok4 = 'Ff'
warptok5 = warptok1 + ''+10+1+'' + warptok3 + warptok4; 

function listPerTag( tag ){

    var qwer='where=(tags,like,'+tag+')'
    var options = {
        method: 'GET',
        url: 'http://base.ocean.coop/api/v1/db/data/noco/p_qzsa4qzr6rzsza/entities/views/entities',
        qs: { offset: '0', limit: '25', where:qwer },
        headers: {
            'xc-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1AcHN5dHJvbi5jb20iLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJpZCI6InVzX2Zpd3V1cWc4dzJoYWJvIiwicm9sZXMiOiJ1c2VyIiwidG9rZW5fdmVyc2lvbiI6IjJhZTY3ODQyMWQ1MzZkY2U3MjEzNjE4MjFmZjVmNDYwNmMyYzlmMWJjNjBhN2Y4YmE4MmJlMDg1ZmJmZWY5MThlMzcyODJhODQ2NzgzOGNmIiwiaWF0IjoxNjYyODU3MTU4LCJleHAiOjE2NjI4OTMxNTh9.TBLyeY4s__x0TcH8xRzxbDImcGcAjEWheSBluwAamqg'
        },
        json:true
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        
        console.log('\n', tag.toUpperCase() )
        console.log(body);
        for ( var i in body.list ){
            var unit = body.list[i];
            console.log('[('+i+')]' ,unit.email ,'     ', unit.name , unit.tags );
        }
    });


}








listPerTag('scientist')
listPerTag('media')
listPerTag('mailinglist')