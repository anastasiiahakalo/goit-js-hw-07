const categories = document.querySelectorAll('#categories .item');
console.log(categories.length);

categories.forEach(category => {
    
    const title = category.querySelector('h2').textContent
    const list = category.querySelector('ul')
    const items = list.querySelectorAll('li')

    console.log(`Category: ${title}`);
    console.log(`Elements: ${items.length}`)
});