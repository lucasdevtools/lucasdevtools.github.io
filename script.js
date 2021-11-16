class web {
  #lenguajes = [
    {img:"JavaScript.jpg", sec:"Frond-end, Back-End"},
    {img:"Python.jpg", sec:"Back-End"},
    {img:"php.jpg", sec:"Back-End"},
    {name:"c#", img:"c.jpg", sec:"Frond-end, Back-End"},
    {img:"TypeScript.jpg", sec:"Frond-end, Back-End"},
    {img:"Java.jpg", sec:"Back-End"}
  ];
  #Frameworks = [
    {img:"React.JS.jpg", sec:"Frond-end"},
    {img:"Angular.jpg", sec:"Frond-end"},
    {img:"ASP.NET.jpg", sec:"Back-End"},
    {img:"Next.JS.jpg", sec:"Back-End"},
    {img:"Nest.jpg", sec:"Back-End"},
    {img:"Koa.JS.jpg",sec:"Back-End"}
  ];
  #Entornos = [
    {img:"Node.JS.jpg", sec:"Back-End"},
    {img:"Kubernetes.jpg", sec:"Back-End"},
    {img:"Servidores Linux.jpg", sec:"Back-End"},
    {img:"Amazon Web Services.jpg", sec:"Back-End"},
    {img:"Docket.jpg",  sec:"Back-End"},
  ];
  #sections = document.getElementsByTagName("section");
  #tabs = document.querySelector(".tabs");

  constructor() {
    this.#render(this.#lenguajes, 0);
    this.#render(this.#Frameworks, 1);
    this.#render(this.#Entornos, 2);
    this.#scroll()
  };

  #render(boxitems, box) {
    let fragment = document.createDocumentFragment();

    boxitems.forEach(item => {
      let nombre = item.name? item.name : item.img.slice(0, -4);
      let div = document.createElement("div");
      div.classList.add("box-item");
      div.innerHTML = 
                    `
                    <img src="/img/${item.img}">
                    <div>${item.sec}</div>
                    <div>${nombre}</div>
                    <div class="loader"></div>
                    `;
      fragment.appendChild(div);
    });
    this.#sections[box].appendChild(fragment);
  }

  #scroll() {
    this.#tabs.addEventListener('click', (e) => {
      if(e.target.className === "tab one-tab" || "tab two-tab") {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      };
    });
  };
};
let Web = new web()
