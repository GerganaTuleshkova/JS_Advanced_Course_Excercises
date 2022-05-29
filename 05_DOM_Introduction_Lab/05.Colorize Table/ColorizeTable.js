function colorize() {
    const rows = document.getElementsByTagName('tr');

    for (i = 1; i < rows.length; i += 2) {
        rows[i].style.background = 'Teal';
    }
}