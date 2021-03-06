// Nous voila dans le JS, que je vais essayer de le garder le plus clair et concis possible.

function lightbox(elements){
  
  // C'est ici que nous definissons les images qui doivent ouvrir une lightbox au click.
  // Pour nous, toutes les images dans les élément ovec la classe "thumbnail"
  $(elements).click(function(){
    // Récupérationdu body, pour la suite
    var $body = $('body');
    // L'image qui as ete ouverte
    $thumbnail = $(this);
    
    // Nous créons ici nos elements
    var $blackout = $("<div id='blackout'>").css("display", "none");
    
    // La source de notre image provient bien du "data-img" de la thumbnail, ou à défaut du src de l'image
    var src = $thumbnail.data("img") || $thumbnail.attr("src")
    var $img = $("<img>").attr("src", src);
    $blackout.append($img);
    
    // Nous créons le titre si l'attribut alt existe
    if($(this).attr("alt")){
      var $title = $("<div class='title'>"+ $thumbnail.attr("alt") +"</div>");
      $blackout.append($title);
    }
    
    // Ce block ne s'execute pas maintenant, mais au prochain click sur notre "blackout". Il se lit comme suit :
    // Au clic sur le fond...
    $blackout.click(function(){
      // On fait disparaitre progressivement la lightbox...
      $blackout.fadeOut(function(){
        // Puis on la supprime.
        $blackout.remove();
      })
    });
    
    // On ajoute notre lightbox au body.
    $body.append($blackout);
    //Et enfin nous la faisons apparaitre progressivement.
    $blackout.fadeIn();
    
    // Ces trois petites lignes permettent de centrer l'image en hauteur
    if($img.height() < $blackout.height()){
      $img.css("marginTop", ($blackout.height() - $img.height()) / 2);
    }
    
  })
}
