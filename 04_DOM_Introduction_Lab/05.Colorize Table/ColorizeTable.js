function colorize() {
    const rows = document.getElementsByTagName('tr');

    // could use:
    // document.querySelectorAll('tr:nth-child(2n)')

    for (i = 1; i < rows.length; i += 2) {
        rows[i].style.background = 'Teal';
    }
}