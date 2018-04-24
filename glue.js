function glue(a , b){
  
  var newArr = [];

  length = ( a.length > b.length ? a.length : b.length );

  var a_length = a.length;
  var b_length = b.length;

  console.log( length );
  for(var i = 0 ; i < length ; i++){
	if(i < a_length ) newArr.push( a.shift() );
    if(i < b_length ) newArr.push( b.shift() );
  }

  console.log( newArr );

}

a = [1,3,5,7,9,11,13];
b = [2,4,6,8,10,12,14,16];

glue(a,b);
