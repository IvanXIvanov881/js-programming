function solve(text){

    let result = [];
    let reg = /[A-Z][a-z]*/gm;

    let matches = text.match(reg);

    for (const word of matches) {
        result.push(word);
    }

    console.log(result.join(", "));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');