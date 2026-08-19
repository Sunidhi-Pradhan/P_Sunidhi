function customRender(reactElement, container){
    // const DomElement = document.createElement(reactElement.type)
    // DomElement.innerHTML = reactElement.children
    // DomElement.setAttribute('href', reactElement.props.href)
    // DomElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(DomElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props){
        if(prop == 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
        
    }
    container.appendChild(domElement)
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