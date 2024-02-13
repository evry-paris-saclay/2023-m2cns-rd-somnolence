# Étude des applications de détection de somnolence chez les conducteurs de véhicules et mise en place d’une solution innovante

Ce projet à pour but la réalisation d’une solution robuste à base d’objets connectés pour la détection précoce des situations de somnolence des conducteurs des véhicules. 
Le potentiel d’impact social et économique des résultats de cette problématique est élevé. En effet, les accidents de la route liés à la fatigue comptent parmi les principales causes de décès dans le monde.

La solution développée aura le potentiel d’améliorer la sécurité et de sauver des vies en contribuant à prévenir les accidents. Par ailleurs, le transfert technologique de ces solutions vers les constructeurs automobiles sera également facilité. Des implémentations préliminaires de tels systèmes sont intégrées dans les voitures par certains constructeurs, par exemple Volkswagen.

Cependant, ces implémentations sont basées sur la surveillance de profils de conduite irréguliers, par exemple des mouvements irréguliers du volant et des déviations de voie indiquant que le conducteur commence à avoir sommeil. Souvent, ces profiles erratiques ne sont détectés qu’à des stades avancés de somnolence. Dans ce projet, l’idée est plutôt d’exploiter des modalités qui permettent de détecter la somnolence dans des phases précoces à l’aide, par exemple, de caméras embarquées ou de capteurs de rythmes cardiaques qui monitorent le conducteur de manière continue.

<b> Encadrant : Massinissa HAMIDI (massinissa.hamidi@univ-evry.fr) </b>

# Description de la solution




# Amélioration à faire sur le projet

<ul>
  
  <li>Développement d'un modèle dédié à la detection de la somnolence via la caméra </li>
  La solution développé actuellement n'utilise pas de modèle dédié à la détection de la somnolence via la caméra. Il se base sur le modèle de dectection de visage de MLKIT développé par Google.
  Le principe consiste à utiliser le modèle de detection de visage pour déterminer le pourcentage de fermeture des yeux et d'ouverture de la bouche pour determiner si la personne somnole. A partir d'un certain nombre de condition, on arrive à avoir une solution qui fonctionne bien. Cépendant malgré nos bons résultats, c'est pas une solution vraiment dédié à la detection de somnolence. Ainsi, on prévoit de dévolopper notre propre modèle pour améliorer la robustesse de la solution. On a récueilli un certains nombre de dataset pouvant etre utiliser pour l'entrainement d'un modèle. On retrouve le lien de ces datasets dans le repertoire /Dataset. Il ya aussi un script shell pour télecharger ces datasets et les dezipper selon le répertoire de son choix. 

<ul>
  
<li>download_all_datasets.bat</li>

<li> Run .\download_all_datasets.bat</li>

</ul>

  <li>Amélioration de l'ontologie</li>

  <li>Amélioration de l'application android</li>

  <li>Introduire la notion de stockage pour le stockage</li>

</ul>





# Démonstration :



A partir de détection l'utilisateur récoit une notification via <b>Telegram</b> :

| Capture d'ecran 1                            | Capture d'écran  2                        |
| ----------------------------------- | ----------------------------------- |
| ![Notification1](link2) | ![notification2](link) |

La vidéo de demonstration du système est ci-dessous:

https://github.com/evry-paris-saclay/2023-m2cns-rd-somnolence/assets/104743493/84a6167d-630b-4e61-8c9a-2b403d299620




