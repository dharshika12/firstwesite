
    function addEntry() {
        let systolic = document.getElementById('systolic').value;
        let diastolic = document.getElementById('diastolic').value;
        let date = document.getElementById('date').value;

        if (systolic && diastolic && date) {
            let table = document.getElementById('bpTable').getElementsByTagName('tbody')[0];
            let newRow = table.insertRow(table.rows.length);

            let cellDate = newRow.insertCell(0);
            let cellSystolic = newRow.insertCell(1);
            let cellDiastolic = newRow.insertCell(2);

            cellDate.innerHTML = date;
            cellSystolic.innerHTML = systolic;
            cellDiastolic.innerHTML = diastolic;

            // Clear input fields after adding an entry
            document.getElementById('systolic').value = '';
            document.getElementById('diastolic').value = '';
            document.getElementById('date').value = '';
        } else {
            alert('Please fill in all fields.');
        }
    }
