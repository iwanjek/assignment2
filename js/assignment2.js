function subFunc(){

  var registry = document.getElementById('registry');
  var pass_registry = true;
  var has_allegiance = false;
  var fullname;
  var alias;
  var power;
  var allegiance;

  for(var i = 1; i < 4; i++){
    var input=registry.elements[i];

    if(input.value.length === 0 || input.value === 'Error: Enter a ' + input.name){
      document.getElementById('registry').elements[i].value = 'Error: Enter a ' + input.name;
      pass_registry=false;
    }

  }
  var fullname = registry.elements[1].value;
  var alias = registry.elements[2].value;
  var power = registry.elements[3].value;

  if(pass_registry){
    document.getElementById('registry').style.display = 'none';
    alert('Congratualtions! You have successfully registered with the Gotham Data Center.')
  }

}
