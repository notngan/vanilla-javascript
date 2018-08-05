let keys = document.querySelectorAll('span');


for (let i = 0; i < keys.length; i++){
    keys[i].onclick = function(e){
        
        let btnValue = this.innerHTML;
        let screen = document.querySelector('.screen');
        let screenValue = screen.innerHTML;
        
        if (btnValue == 'C'){
            
          screen.innerHTML = '';
        
        } else if (btnValue == '='){
       			
					let equation = screenValue;
          let lastChar = equation[equation.length - 1];
					
					if (lastChar == '.' || lastChar == '+' || lastChar == '-' || lastChar == '÷' || lastChar == 'x'){
          equation = equation.replace(lastChar, '');
          }
					
          equation = equation.replace('÷', '/').replace('x','*');
					
					if(equation){
						
						let total = eval(equation);
						if(total.toString().indexOf('.') != -1)
						total= total.toFixed(2);
						screen.innerHTML = total;
      
					} else {
						
						screen.innerHTML = eval(equation)
				
					}
					
        } else {
             screen.innerHTML += btnValue;
        }
    }
}
    