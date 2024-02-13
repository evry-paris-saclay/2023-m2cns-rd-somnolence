# Étude des applications de détection de somnolence chez les conducteurs de véhicules et mise en place d’une solution innovante

Ce projet à pour but la réalisation d’une solution robuste à base d’objets connectés pour la détection précoce des situations de somnolence des conducteurs des véhicules. 
Le potentiel d’impact social et économique des résultats de cette problématique est élevé. En effet, les accidents de la route liés à la fatigue comptent parmi les principales causes de décès dans le monde.

La solution développée aura le potentiel d’améliorer la sécurité et de sauver des vies en contribuant à prévenir les accidents. Par ailleurs, le transfert technologique de ces solutions vers les constructeurs automobiles sera également facilité. Des implémentations préliminaires de tels systèmes sont intégrées dans les voitures par certains constructeurs, par exemple Volkswagen.

Cependant, ces implémentations sont basées sur la surveillance de profils de conduite irréguliers, par exemple des mouvements irréguliers du volant et des déviations de voie indiquant que le conducteur commence à avoir sommeil. Souvent, ces profiles erratiques ne sont détectés qu’à des stades avancés de somnolence. Dans ce projet, l’idée est plutôt d’exploiter des modalités qui permettent de détecter la somnolence dans des phases précoces à l’aide, par exemple, de caméras embarquées ou de capteurs de rythmes cardiaques qui monitorent le conducteur de manière continue.

<b> Encadrant : Massinissa HAMIDI (massinissa.hamidi@univ-evry.fr) </b>

# Description de la solution




# Prise en main du projet



# Amélioration à faire sur le projet

<ul>

  <li><b>Evaluation de notre solution</b> </li>
  
  La prémière chose à faire pour améliorer cet projet est d'effectuer une évaluation avec les produits existants. <b>A notre connaissance, nous n'avons pas pu trouver de solution basé sur smartphone combinant le rythme cardiaque, les caractéristiques faciaux et une ontologie pour la détection de la somnolence</b>. Cépendant une évaluation pourrait vraiment determiner la robustesse de la solution et conduire à améliorer considérablement les performences pour obténir un système complet.
  
  <li><b>Développement d'un modèle dédié à la detection de la somnolence via la caméra</b> </li>
  
  La solution développé actuellement n'utilise pas de modèle dédié à la détection de la somnolence via la caméra. Il se base sur le modèle de dectection de visage de MLKIT développé par Google.
  Le principe consiste à utiliser le modèle de detection de visage pour déterminer le pourcentage de fermeture des yeux et d'ouverture de la bouche pour determiner si la personne somnole. A partir d'un certain nombre de condition, on arrive à avoir une solution qui fonctionne bien. Cépendant malgré nos bons résultats, c'est pas une solution vraiment dédié à la detection de somnolence. Ainsi, on prévoit de dévolopper notre propre modèle pour améliorer la robustesse de la solution. On a récueilli un certains nombre de dataset pouvant etre utiliser pour l'entrainement d'un modèle. On retrouve le lien de ces datasets dans le repertoire <b>Dataset</b>. Il ya aussi un script shell pour télecharger ces datasets et les dezipper selon le répertoire de son choix. 

Pour utiliser le scritp shell  

<ul>
  
<li>download_all_datasets.bat</li>

<li> Run .\download_all_datasets.bat</li>

</ul>

  <li><b>Amélioration de l'ontologie</b></li>

  <li><b>Amélioration de l'application android</b></li>

  <li><b>Introduire la notion de stockage pour le stockage</b></li>

</ul>





# Démonstration :



A partir de détection l'utilisateur récoit une notification via <b>Telegram</b> :

| Capture d'ecran 1                            | Capture d'écran  2                        |
| ----------------------------------- | ----------------------------------- |
| ![Notification1](link2) | ![notification2](link) |

La vidéo de demonstration du système est ci-dessous:

<div align="center">
  
<video align="center" src="https://github.com/evry-paris-saclay/2023-m2cns-rd-somnolence/assets/104743493/84a6167d-630b-4e61-8c9a-2b403d299620">

</div>





