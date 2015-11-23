
function handle(e) {
  if (form.elements[e.type + 'Ignore'].checked) return;
			table.rows[ip].cells[jp].style.backgroundColor='blue';
			if (e.keyCode=='37'){jp=(jp-1+n*2)%(n*2)}
			if (e.keyCode=='38'){ip=(ip-1+n)%n}
			if (e.keyCode=='39'){jp=(jp+1)%(n*2)}
			if (e.keyCode=='40'){ip=(ip+1)%n}
			table.rows[ip].cells[jp].focus();
			table.rows[ip].cells[jp].style.backgroundColor='red';

  if (form.elements[e.type + 'Stop'].checked) {
    e.preventDefault();
  }
}