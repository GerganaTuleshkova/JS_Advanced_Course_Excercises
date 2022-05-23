function pieceOfPie(pies, startPie, endPie) {
    const startIndex = pies.indexOf(startPie);
    const endIndex = pies.indexOf(endPie) + 1;
    const result = pies.slice(startIndex, endIndex);

    return result;
}

pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
);