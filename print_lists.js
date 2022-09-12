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
            'xc-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9yZ29tZUBwcm90b25tYWlsLmNvbSIsImZpcnN0bmFtZSI6bnVsbCwibGFzdG5hbWUiOm51bGwsImlkIjoidXNfNGlpa3B5djd3cHdncmYiLCJyb2xlcyI6InVzZXIsc3VwZXIiLCJ0b2tlbl92ZXJzaW9uIjoiOWJhOTc0ZTI4N2M2MjVjZTNkNGVkMzRlNDI4NTc0YmI2ZWQ2YWViZGUxNTkwOThhMjk3OWY0OWU3YjNhMjBkNDkzYmZiZDMxNGMyYzdkNGUiLCJpYXQiOjE2NjI5Nzg1NzEsImV4cCI6MTY2MzAxNDU3MX0.iLu4xV0x0YV9hx-VzniuS1zLvqCiWYRNQ1ALhHBB3TQ'
        },
        json:true
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        
        console.log('\n', tag.toUpperCase() )
        //console.log(body);
        for ( var i in body.list ){
            var unit = body.list[i];
            console.log('[('+i+')]' ,unit.email ,'     ', unit.name , unit.tags );
        }
    });


}








listPerTag('scientist')
listPerTag('media')
listPerTag('mailinglist')