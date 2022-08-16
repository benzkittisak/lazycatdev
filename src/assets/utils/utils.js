export const setActiveClass = (e) => {
    const filterButtons = document.querySelectorAll( "" );

    filterButtons.forEach(item => {
        item.classList.remove("active")
    })

    e.currentTarget.classList.add("active")
}

export const setActiveButtonClass = (e) => {
    const filterButtons = document.querySelectorAll( ".lang" );

    filterButtons.forEach(item => {
        item.classList.remove("active")
    })

    e.currentTarget.classList.add("active")
}