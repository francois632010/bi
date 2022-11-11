(function () {
    let sayHey = () => {
        alert("hey hey !!!");
    }

    function Zone (rank) {
        this.zn = [
            {
                elt: "div",
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
                            }
                        ]
                    }
                ]
            }
        ]
        this.makeClasses = () =>{
            this.zn[0].classes = ['bloc-page', `bloc-page${rank}`];
            this.zn[0].sub[0].classes = ["bloc-page__int"];
            this.zn[0].sub[0].sub[0].classes = ["logo-caf"];
        }
    }

    let buildElt = (what, ID, classes = [], inner = "", contentEditable = false, atts = null) => {
        let newElt = document.createElement(what);
        if (ID != "") newElt.setAttribute('id', ID);
        if (classes) for (let elt of classes) newElt.classList.add(elt);
        if (inner != "") newElt.innerHTML = inner;
        if (contentEditable) newElt.contentEditable = true;
        if (atts != null) for (let att of atts) for (let prop in att) newElt[prop] = att[prop];
    
        return newElt;
      }
      let downOnZone = (obj, father) => {
          for (let elt of obj) {
               let id = "";
               let classes = null;
               let inner = "";
               let newElt = null;
               let atts = null;
          let contentEditable = false;
              if (elt.id) id = elt.id;
              if (elt.classes) classes = [...elt.classes];
              if (elt.inner) inner = elt.inner;
              if (elt.atts) atts = [...elt.atts];
          if (elt.contentEditable) contentEditable = elt.contentEditable;
              
              newElt = buildElt(elt.elt, id, classes, inner, contentEditable, atts);
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