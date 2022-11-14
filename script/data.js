(function () {
    let sayHey = () => {
        alert("hey hey !!!");
    }
/*
    On définit un objet document.
    objet qui permet d'avoir les infos pour selectionner le type de page que l'on doit chercher dans elt (titre sommaire rapport etc)
    ainsi que les modificateur à apporter
    question fait on un tableau d'objet avec une case par page ou fait on une structure plus courte et travaillet
    possible aussi de faire un tableau des modificateurs.

    solution : 1 tableaux d'objet --> {type: "page", modif: ["regiolisNone", etc]} à la case correspond la page
    
*/
let doc = [
    {
        type:"a", modif: ["regN"]
    },
    {
        type: "a"
    }
]
let getDoc = () => {
    return [...doc];
}
let getAPage = pg => getDoc()[pg];
    
window.data = {
        sayHey: sayHey,
        getDoc: getDoc,
        getAPage: getAPage
    }
})();