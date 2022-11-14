(function () {
    let sayHey = () => {
        alert("hey hey !!!");
    }
// pour plus tard: on peut avoir plusieur modèle --> this.pageTruc this.pageSommaire etc
// on change le nom de zone(rank) par modele(rank, typeDePage)
    function Zone (rank) {
        this.zn = [
            {
                elt: "div",
                pageBreakAfter: true,
                sub: [
                    {
                        elt: "div",
                        sub: [
                            {
                                elt: "img",
                                atts: [
                                    {
                                        src: "./image/logoCAFHeaderGif.gif",
                                        alt: "logo CAF"
                                    }
                                ]
                            },
                            {
                                elt: "div",
                                sub: [
                                    {
                                        elt: "div",
                                        inner: "Dates :"
                                    },
                                    {
                                        elt: "div"
                                    },
                                    {
                                        elt: "div",
                                        inner: "Technicien :"
                                    },
                                    {
                                        elt: "div"
                                    }
                                ]
                            },
                            {
                                elt: "div",
                                sub: [
                                    {
                                        elt: "h1",
                                        inner: "Check-list entretien<br>appareils de voies<br>Equipés en ACIER"
                                    }
                                ]
                            },
                            {
                                elt: "div",
                                inner: "REGIOLIS ne passe pas"
                            },
                            {
                                elt: "div",
                                inner: "Main Gauche = MG<br>Main Droite = MD"
                            },
                            {
                                elt: "div",
                                sub: [
                                    {
                                        elt: "div",
                                        inner: "Numéro d'appareil"
                                    },
                                    {
                                        elt: "div",
                                        inner: "C1"
                                    }
                                ]
                            },
                            {
                                elt: "div",
                                inner: "Cocher les constatations et / ou les opérations réalisées.<br>Les parties gauches et droites étant définies sur la photo."
                            },
                            {
                                elt: "div",
                                inner: "Suivre les recomendations de la Fiche technique :<br>EPB3000 - 02S - CONTROLE DES APPAREILS DE VOIE"
                            },
                            {
                                elt: "img",
                                atts: [
                                    {
                                        src: "./image/c1.gif",
                                        alt: "appareil C1"
                                    }
                                ]
                            },
                            {
                                elt: "div",
                                sub: [
                                    {
                                        elt: "h5",
                                        inner: "Consignes de sécurité"
                                    },
                                    {
                                        elt: "div",
                                        inner: "Demande accord d'accés à la voie d'essais<br>Port OBLIGATOIRE des équipements de sécurité <span class='note5--faible'>(Gants, lunettes, casque, GILET OU VESTE FLUORESCENTE)</span><br>Balisage de la zone de travail avec drapeaux et panneaux à 50m de la zone"
                                    }
                                ]
                            },
                            {
                                elt: "div",
                                sub: [
                                    {
                                        elt: "h3",
                                        inner: "En cas de fissures :"
                                    },
                                    {
                                        elt: "div",
                                        inner: "STOPPER IMMEDIATEMENT, condamner la circulation ferroviaire et informer le Responsable MAINTENANCE"
                                    }
                                ]
                            },
                            {
                                elt: "div",
                                inner: "Remarque(s) :"
                            },
                            {
                                elt: "div",
                                inner: "Signature :"
                            },
                            {
                                elt: "div",
                                sub: [
                                    {
                                        elt: "main",
                                        sub: [
                                            {
                                                elt: "div",
                                                inner: "Coeur"

                                            },
                                            {
                                                elt: "div",
                                                inner: "Contre-rail gauche"
                                            },
                                            {
                                                elt: "div",
                                                inner: "Contre-rail droit"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
        // problème avec les elt présents dans les elts en ligne
        // il faut un subLigne est donc inner doit être un tableau d'objet 
        // avec textNode pour inner normal et "br" pour l'elt br par exemple
        this.makeClasses = () =>{
            this.zn[0].classes = ['bloc-page',`bloc-page${rank}`];
            this.zn[0].sub[0].classes = ["bloc-page__int"];
            this.zn[0].sub[0].sub[0].classes = ["logo-caf"];
            this.zn[0].sub[0].sub[1].classes = ["QQ"];
            this.zn[0].sub[0].sub[1].sub[0].classes = ["date__txt","QQ__txt"];
            this.zn[0].sub[0].sub[1].sub[1].classes = ["date__field","QQ__field"];
            this.zn[0].sub[0].sub[1].sub[2].classes = ["name__txt","QQ__txt"];
            this.zn[0].sub[0].sub[1].sub[3].classes = ["name__field","QQ__field"];
            this.zn[0].sub[0].sub[2].classes = ["border-ext", "border-ext--h1"];
            this.zn[0].sub[0].sub[3].classes = ["note","note1"];
            this.zn[0].sub[0].sub[4].classes = ["note","note2"];
            this.zn[0].sub[0].sub[5].classes = ["item"];
            this.zn[0].sub[0].sub[5].sub[0].classes = ["item__note"];
            this.zn[0].sub[0].sub[5].sub[1].classes = ["item__number"];
            this.zn[0].sub[0].sub[6].classes = ["note","note3"];
            this.zn[0].sub[0].sub[7].classes = ["note","note4"];
            this.zn[0].sub[0].sub[8].classes = ["img-c1"];
            this.zn[0].sub[0].sub[9].classes = ["note", "note5"];
            this.zn[0].sub[0].sub[10].classes = ["note", "note6"];
            this.zn[0].sub[0].sub[11].classes = ["note", "note7"];
            this.zn[0].sub[0].sub[12].classes = ["note", "note8"];
            this.zn[0].sub[0].sub[13].classes = ["border-ext","border-ext--main"];
            this.zn[0].sub[0].sub[13].sub[0].sub[0].classes = ["main__coeur"];
            this.zn[0].sub[0].sub[13].sub[0].sub[1].classes = ["main__gauche"];
            this.zn[0].sub[0].sub[13].sub[0].sub[2].classes = ["main__droit"];
        }
    }

    let buildElt = (what, ID, classes = [], inner = "", contentEditable = false, atts = null, pageBreakAfter = false) => {
        let newElt = document.createElement(what);
        if (ID != "") newElt.setAttribute('id', ID);
        if (classes) for (let elt of classes) newElt.classList.add(elt);
        if (inner != "") newElt.innerHTML = inner;
        if (contentEditable) newElt.contentEditable = true;
        if (atts != null) for (let att of atts) for (let prop in att) newElt[prop] = att[prop];
        if (pageBreakAfter == true) newElt.setAttribute('page-break-after', true);
    
        return newElt;
      }
      let downOnZone = (obj, father) => {
          for (let elt of obj) {
               let id = "";
               let classes = null;
               let inner = "";
               let newElt = null;
               let atts = null;
               let pageBreakAfter = false;
          let contentEditable = false;
              if (elt.id) id = elt.id;
              if (elt.classes) classes = [...elt.classes];
              if (elt.inner) inner = elt.inner;
              if (elt.atts) atts = [...elt.atts];
              if (elt.pageBreakAfter) pageBreakAfter = true;
          if (elt.contentEditable) contentEditable = elt.contentEditable;
              
              newElt = buildElt(elt.elt, id, classes, inner, contentEditable, atts, pageBreakAfter);
              father.appendChild(newElt);
              
              if (elt.sub) downOnZone(elt.sub, newElt);  
          }
      }
    
      let addAZone = (st=false, rank=1) => {
      
          let newZone = new Zone(rank);
          newZone.makeClasses();
        downOnZone(newZone.zn, document.getElementsByTagName('body')[0]);
      }
    window.elt = {
        sayHey: sayHey,
        addAZone: addAZone
    }
})();