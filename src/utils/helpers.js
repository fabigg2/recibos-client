// const getImages = require.context('../assets/images', true);

export const getLocalImages = require.context('../assets', true);


export const hideTagById = (id)=>{
    let element = document.getElementById(id);
    element.remove();
}

export const getElementPositioY = (id) =>{
    return document.getElementById(id).offsetTop;
}

export const goToSectionY = (positionY)=>{
    window.scrollTo(
        {
            top: positionY-70,
            behavior: 'smooth'
        }
    )
}

export const sectionIds = {
    aboutME: '#aboutMe',
    skills: '#skills',
    works: '#works',
    templates: '#templates'

}