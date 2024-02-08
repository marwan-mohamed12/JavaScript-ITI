async function getUsersData() {
    const response = await fetch("https://dummyjson.com/users");
    const usersData = await response.json();
    console.log(usersData.users);
    
    let i = 0;
    usersData.users.slice(0,3).forEach(({firstName, lastName, email, image}) => {
        let userCard = `
        <article class="card card--1">
            <div class="card__img"></div>
            <a href="#" class="card_link">
                <div class="card__img--hover" data-id='${i}'></div>
            </a>
            <div class="card__info">
                <h3 class="card__title">${firstName} ${lastName}</h3>
                <span class="card__by"> <a href="#" class="card__author" title="author">${email}</a></span>
            </div>
        </article>
        `;

        document.querySelector('.cards').insertAdjacentHTML('afterbegin', userCard)
        
        let backgroundDivImage = document.querySelector(`[data-id='${i}']`);
        backgroundDivImage.style.backgroundImage = `url(${image})`;
        i++;
    }); 
}

getUsersData();


