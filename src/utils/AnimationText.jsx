const textAnimationMotParMot01 = () => {
    const words = document.querySelectorAll(".title");
    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        function animateTitle() {
            function wrapWordsWithSpan(elements) {
                if (!words || words.length === 0) {
                    return; // Vérification si aucun élément n'est présent
                }
                const childNodes = Array.from(elements.childNodes);

                childNodes.forEach((childNode) => {
                    // Étape 1 : Vérification du type de nœud
                    if (childNode.nodeType === Node.TEXT_NODE) {
                        // Étape 2 : Traitement des nœuds de texte
                        const words = childNode.textContent.split(" ");

                        const spannedWords = words.map((word) => {
                            // Étape 3 : Création de l'élément span interne
                            if (word.trim() !== "") {
                                const innerSpan =
                                    document.createElement("span");
                                innerSpan.textContent = word;

                                // Étape 4 : Création de l'élément span externe
                                const outerSpan =
                                    document.createElement("span");
                                outerSpan.appendChild(innerSpan);

                                return outerSpan;
                            } else {
                                return word;
                            }
                        });
                        // Étape 5 : Insertion des éléments span dans le document
                        const parent = childNode.parentNode;
                        spannedWords.forEach((spannedWord) => {
                            if (typeof spannedWord === "string") {
                                parent.insertBefore(
                                    document.createTextNode(spannedWord),
                                    childNode
                                );
                            } else {
                                parent.insertBefore(spannedWord, childNode);
                            }
                            parent.insertBefore(
                                document.createTextNode(" "),
                                childNode
                            );
                        });

                        // Étape 6 : Suppression du nœud de texte d'origine
                        parent.removeChild(childNode);
                    } else {
                        // Étape 7 : Appel récursif pour les nœuds non textuels
                        wrapWordsWithSpan(childNode);
                    }
                });
            }

            wrapWordsWithSpan(word);
        }
        animateTitle();
        word.querySelectorAll("span span").forEach((span, k) => {
            span.style.animationDelay = k * 0.3 + "s";
        });
    }
};
const textAnimationMotParMot02 = () => {
    const words = document.querySelectorAll("#animation-container");

    // Définissez une fonction pour démarrer l'animation
    function startAnimation() {
        words.forEach((word, index) => {
            console.log(word.childNodes);
            word.childNodes.forEach((word, index) => {
                // Définissez un délai croissant pour chaque mot
                const delay = index * 0.3; // Ajustez la valeur du délai selon vos besoins

                // Ajoutez une classe pour déclencher l'animation
                word.style.animationDelay = delay + "s";
                word.classList.add("animate");
            });
        });
    }

    // Appelez la fonction pour démarrer l'animation
    startAnimation();
};
export { textAnimationMotParMot01, textAnimationMotParMot02 };
