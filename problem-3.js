function paperRequirements(firstBook, secondBook, thirdBook) {
    const firstBookPages = firstBook * 100;
    const secondBookPages = secondBook * 200;
    const thirdBookPages = thirdBook * 300;
    const totalPages = firstBookPages + secondBookPages + thirdBookPages;
    return totalPages;
}

console.log(paperRequirements(5, 2, 3));
