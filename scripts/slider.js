const nextPage1 = document.getElementById('next-page-1');
const prevPage1 = document.getElementById('prev-page-1');

function changeImagesPage(currentPageNum) {
    const currentCards = document.getElementsByClassName('card-img-1');
    for (let i = 0; i < 4; i++)
        currentCards[i].getElementsByTagName('img')[0].src = `img/${currentPageNum}/${i + 1}.png`;
}

nextPage1.addEventListener('click', () => {
    const pageNumber = document.getElementById('page-number');
    let currentPageNum = Number(pageNumber.innerText.split(' ')[0]);

    if (currentPageNum < 3) currentPageNum += 1;
    else currentPageNum = 1;

    pageNumber.innerText = `${currentPageNum} из 3`;

    changeImagesPage(currentPageNum);
});

prevPage1.addEventListener('click', () => {
    const pageNumber = document.getElementById('page-number');
    let currentPageNum = Number(pageNumber.innerText.split(' ')[0]);

    if (currentPageNum > 1) currentPageNum -= 1;
    else currentPageNum = 3;

    pageNumber.innerText = `${currentPageNum} из 3`;

    changeImagesPage(currentPageNum);
});