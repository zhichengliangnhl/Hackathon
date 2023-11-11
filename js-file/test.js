function A() {
    $('#toggler').attr('onclick', 'B()');
    console.log ('this is button a')
  }
  
  function B() {
    console.log('Updated to B()!');
  }