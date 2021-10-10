 //get the div
 const container = document.getElementById('main');

 //setting blotter txt
 let txt = new Blotter.Text('move',{
     family: 'sans-serif',
     size: 200,
     fill: '#fff',
     paddingTop: 80,
     paddingRight: 80,
     paddingBottom: 80,
     paddingLeft: 80,
 });

 //setting blotter material
 let material = new Blotter.FliesMaterial();
 material.uniforms.uPointCellWidth.value = 0.01;
 material.uniforms.uPointRadius.value = 0.3;
 material.uniforms.uSpeed.value = 5;

 let blotter = new Blotter(material,{
    texts: txt
 });

 //append blotter to the div
 let scope = blotter.forText(txt);
 scope.appendTo(container);

 
 //get the button
 const controller = document.getElementById('move');
 //help variable
 let clicked = false;

 //mousemove toggle funct. between reactive and non-reactive
 function goMouseMove(){
    clicked = !clicked;

    if(clicked){
        document.addEventListener('mousemove', function(evt){
            material.uniforms.uSpeed.value = (evt.clientY*.01);
            material.uniforms.uPointCellWidth.value = (evt.clientX/60000);
            controller.innerHTML = 'Want to go back? Click again'
         })
    }else{
        document.addEventListener('mousemove', function(){
            material.uniforms.uSpeed.value = 5;
            material.uniforms.uPointCellWidth.value = 0.01;
            controller.innerHTML = 'Reactive on mousemove? Click here'
         })
    }
 }
 