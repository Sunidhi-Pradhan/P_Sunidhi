function customRender(reactElement, container){
    const DomElement = document.createElement(reactElement.type)
    DomElement.innerHTML = reactElement.children
    DomElement.setAttribute('href', reactElement.props.href)
    DomElement.setAttribute('target', reactElement.props.target)
    container.appendChild(DomElement)
}

const reactElement = {
    type: 'a',
    props:{
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'Click me to go to Google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)