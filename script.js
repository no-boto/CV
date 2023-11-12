function limitInput(input) {
    input.value = input.value.toUpperCase().charAt(0);
}
function checkWords() {
    const words = [
        document.getElementById('1_1').value + document.getElementById('1_2').value + document.getElementById('1_3').value + document.getElementById('1_4').value + document.getElementById('1_5').value + document.getElementById('1_6').value + document.getElementById('1_7').value + document.getElementById('1_8').value + document.getElementById('1_9').value,
        document.getElementById('2_1').value + document.getElementById('2_2').value + document.getElementById('2_3').value + document.getElementById('2_4').value + document.getElementById('2_5').value + document.getElementById('2_6').value + document.getElementById('2_7').value,
        document.getElementById('3_1').value + document.getElementById('3_2').value + document.getElementById('3_3').value + document.getElementById('3_4').value + document.getElementById('3_5').value  + document.getElementById('3_6').value + document.getElementById('3_7').value  + document.getElementById('3_8').value + document.getElementById('3_9').value,
        document.getElementById('4_1').value + document.getElementById('4_2').value + document.getElementById('4_3').value + document.getElementById('4_4').value + document.getElementById('4_5').value + document.getElementById('4_6').value + document.getElementById('4_7').value,
        document.getElementById('5_1').value + document.getElementById('5_2').value + document.getElementById('5_3').value,
        document.getElementById('6_1').value + document.getElementById('6_2').value + document.getElementById('6_3').value + document.getElementById('6_4').value + document.getElementById('6_5').value + document.getElementById('6_6').value + document.getElementById('6_7').value + document.getElementById('6_8').value + document.getElementById('6_9').value + document.getElementById('6_10').value,
    ];

    const correctWords = ['POSTSALES', 'INBOUND', 'BACHILLER', 'CLIENTE', 'RMA', 'SALESFORCE'];

    for (let i = 0; i < words.length; i++) {
        if (words[i].toUpperCase() !== correctWords[i]) {
            alert('¡Respuestas incorrectas! Intenta de nuevo.');
            return;
        }
    }

    alert('¡Todas las respuestas son correctas!');
}