var myFullpage = new fullpage('#fullpage', {

    anchors: ['Home', 'About', 'Skills', 'Projects', 'Contact'],
    navigation: true,
    navigationTooltips: ['Home', 'About', 'Skills', 'Projects', 'Contact'],
    showActiveTooltip: true,
    menu: '#menu'
});



document.getElementsByClassName('fp-tooltip')[1].style.color = "black";
document.getElementsByClassName('fp-tooltip')[3].style.color = "black";