
	
n=25;
iwin = Math.floor(Math.random()*(n-1));
jwin = Math.floor(Math.random()*(n*2-1));
function handle(e) {
  if (form.elements[e.type + 'Ignore'].checked) return;
			table.rows[ip].cells[jp].style.backgroundColor='blue';
			if (e.keyCode=='37'){jp=(jp-1+n*2)%(n*2)}
			if (e.keyCode=='38'){ip=(ip-1+n)%n}
			if (e.keyCode=='39'){jp=(jp+1)%(n*2)}
			if (e.keyCode=='40'){ip=(ip+1)%n}
			table.rows[ip].cells[jp].focus();
			table.rows[ip].cells[jp].style.backgroundColor='red';
		if ((ip==iwin)&&(jp==jwin)){
			alert('You win!');
			break;				
		}
  if (form.elements[e.type + 'Stop'].checked) {
    e.preventDefault();
  }
}
document.addEventListener("DOMContentLoaded",function(){
	var table = document.createElement('table');
	table.id='matrix';
	table.align= 'center';
	table.border=2;
	table.keypress = handle;
	document.body.appendChild(table);
	
	for (i=0;i<n;i++){
		var newRow=table.insertRow(i);
		for (j=0;j<n*2;j++){
			var newCell = newRow.insertCell(j)
			table.rows[i].cells[j].innerHTML='O';
		}
	}	
	table.rows[iwin].cells[jwin].innerHTML='X';
	table.rows[iwin].cells[jwin].style.backgroundColor='red';
	
	alert('Start! Find X!');	
	ip=0;
	jp=0;	
	
			table.rows[ip].cells[jp].focus();
			console.log(String.fromCharCode(event.charCode));
			e = String.fromCharCode(event.charCode);	
			table.rows[ip].cells[jp].style.backgroundColor='blue';
		
		
		
	
})

window.document.onkeydown = function () {

                        startRefocus();

                }

                function startRefocus(event) {

                        event = event || window.event;

                        //if (!event.ctrlKey) return;

                        var key = event.keyCode;

                        var targetElement = event.target || event.srcElement;

                        focusMe(targetElement, key);

                }

                function focusMe(input, key) {

                        var needFocusElement = true;

                        function detectColumn(td) {

                                var result = 0, x;

                                while (td = td.previousElementSibling) {

                                        ++result

                                }

                                return result;

                        }

                        try {

                                switch (key) {

                                        case 37:

                                                needFocusElement = input.parentNode.previousElementSibling.querySelector("input");

                                                break;

                                        case 39:

                                                needFocusElement = input.parentNode.nextElementSibling.querySelector("input");

                                                break;

                                       case 38:

                                                needFocusElement = input.parentNode.parentNode.previousElementSibling.querySelectorAll("td")[detectColumn(input.parentNode)].querySelector("input");

                                                break;

                                        case 40:

                                                needFocusElement = input.parentNode.parentNode.nextElementSibling.querySelectorAll("td")[detectColumn(input.parentNode)].querySelector("input");

                        break;

                    default:

                        needFocusElement = false;

                                }

                        } catch (e) {

                                needFocusElement = false;

                        }

  

                        if (!needFocusElement) return;

                        needFocusElement.focus();

                }

	