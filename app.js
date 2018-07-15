//console.log(document.title = 'JavaScript DOM');

/* document.write('<h1>Sou o uso do document.write</h1>')
document.write('<p>Sou um paragrafo</p>') */


//document.getElementById('test').innerHTML = 'Sou um novo texto'

setTimeout(function() {
    //document.getElementById('test').innerHTML = 'Sou um novo texto'
    //document.getElementById('test').innerText = 'Sou um novo texto'
    //document.getElementById('test-id').innerHTML = '<h3>Sou um P JS</h3>'
    //document.getElementById('test-id').innerText = '<h3>Sou um P JS</h3>'


    //console.log(document.getElementsByName('div-name')[0].innerText = 'Alterando o primeiro...')
    /* var nameTag = document.getElementsByName('div-name')
    nameTag[0].innerText = 'Alterei'
    nameTag[1].innerText = 'Alterei o segundo...'
    console.log(nameTag) */


    //document.getElementsByTagName('div')[0].innerHTML = '<h4>Mudando...</h4>'

    /* var tagsName = document.getElementsByTagName('div')
    tagsName[0].innerHTML = '<h4>Mudando 1...</h4>'
    tagsName[1].innerHTML = '<h4>Mudando 2...</h4>'

    if(tagsName[2]){
        tagsName[2].innerHTML = '<h4>Mudando 3...</h4>'
    } */


    //document.getElementsByClassName('test-class')[0].innerHTML = '<h5>Sou o conteúdo através de um identificador por classe</h5>'


    //document.querySelector('div').innerHTML = '<strong>Algo Aqui Uhuuu</strong>'

    //document.querySelectorAll('div')[2].innerHTML = '<p>Inseriu</p>'

    //document.querySelector('li').parentNode.setAttribute('style', 'background:red;')


    //document.querySelector('ul').children

    //var ul = document.querySelector('ul')

    /* var li = ul.children
    li[0].innerHTML = 'Alterei' */
    
    //console.log(ul.firstElementChild.innerHTML = 'Update')
    //console.log(ul.lastElementChild.innerHTML = 'Update')


    //var div = document.getElementById('test-id')
    //console.log(div.hasAttribute('class'))
    //console.log(div.getAttribute('attr-value2'))

    /* if(div.hasAttribute('attr-value2')){
        console.log(div.getAttribute('attr-value2'))
    } */

    //div.setAttribute('style', 'display:none;')

    /* var ul = document.querySelector('ul')
    ul.insertAdjacentHTML('beforebegin', '<hr>')
    ul.insertAdjacentHTML('afterend', '<hr>')
    ul.insertAdjacentHTML('afterbegin', '<li>afterbegin</li>')
    ul.insertAdjacentHTML('beforeend', '<li>beforeend</li>') */


    
}, 3000)

function footer(){
    //console.log(document.body.scrollHeight)

    var height = document.body.scrollHeight
    
    //window.scrollTo(0, height)

    window.scroll({
        top: height,
        left: 0,
        behavior: 'smooth'
    })
}

function topo(){
    var height = document.body.scrollHeight

    //window.scrollTo(0, 0)

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}