$( document ).ready(function() {

	// Tableau de Web
    var web_title=['Titre1','Titre2','Titre3','Titre4','Titre5','Titre6'];
    var web_img=['img/bg.jpg','img/bg.jpg','img/bg.jpg','img/bg.jpg','img/bg.jpg','img/bg.jpg'];

    // Remplissage de la plage view
    document.getElementById("tv").innerHTML = web_title[0];
    $('#iv').attr('src', web_img[0]);

});