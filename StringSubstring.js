function solve(word, text) {

    let lowWord = word.toLowerCase();
    let lowtext = text.toLowerCase();

    if (lowtext.includes(lowWord)) {
        console.log(word);
    } else {
        console.log(word + " not found!");
    }

}

solve('javascript', 'JavaScript is the best programming language');
solve('python', 'JavaScript is the best programming language');
solve('java', 'JAVA is the best');