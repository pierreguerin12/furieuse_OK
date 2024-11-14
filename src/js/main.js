import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", function () {
  //ajout du plugin ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  const screenWidth = window.screen.width;
  const containerWidth =
    document.querySelector(".scroll-container").offsetWidth;
  console.log(screenWidth, containerWidth);
  gsap.to(".scroll-container", {
    x: containerWidth - screenWidth,
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal-scroll",
      start: "top top",
      end: "+=300%",
      scrub: 1,
      pin: true,
    },
  });

  //explication des éléments

  //le gsap va animer l'élément grâce à la classe .container

  //le xPercent déplace horizontalement l'élément de -67% (calcul fait par rapport à la largeur de l'écran)

  //ease: "none" fait que il y a pas de variation de vitesse (la vitesse dépend de notre scroll).

  //Dans scrollTrigger on a configuré le déclenchement de l'animation.

  //Trigger: ".horizontal-scroll", veut dire que l'animation commence lors de la class .horizontal-scroll.

  //Start: "top top" est là pour que l'animation commence quand le haut de l'élément .horizontal-scroll est en haut de l'écran.

  //End: "+=300%" fait que l'animation se finit quand on a scrollé sur une distance qui équivaut à 3 fois la taille de l'écran (de la fenêtre).

  //Scrub:1, ajoute de la fluidité au scroll.

  //Pour fixer l'élément dans la fenêtre et donner l'impression qu'on scroll horizontalement nous avons ajouté : pin: true.

  // Pourquoi le défilement horizontal ? Pour nous ça semblait pertinent premièrement parce que cela donne un rythme dans le voyage de l'utilisateur-trice dans notre site. Deuxièmement car l'une de nos volontés était d'exprimer la situation d'angoisse d'Ysa face à tant d'agressions. Le défilement en superposition offre cette possibilité de voir plusieurs images accumulées à la suite et augmenter ce sentiment d'emprisonnement.

  //Ce PoC a été testé sur Firefox, Chrome et Safari et fonctionne de la même manière sur chaque moteur de recherche.
  //Grâce à l'utilisation des "%", ce Poc est responsive et fonctionne sur différenttes tailles d'écran.
});
