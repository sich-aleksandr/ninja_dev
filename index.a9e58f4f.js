const t=new function(t){this.root=document.querySelector("#menu"),this.open=function(t,e){const i=document.documentElement.clientWidth;this.root.classList.add("open"),this.root.style.top=e-70+"px",document.addEventListener("click",this.hendleMenu),document.addEventListener("wheel",(()=>this.close())),this.root.style.left=i>=t+60+300?`${t+60}px`:i-300+"px"},this.close=function(){this.root.classList.remove("open")},this.hendleMenu=t=>{"button"!==t.target.type&&this.close()}},e={url:"https://6218fefb81d4074e859e849d.mockapi.io/api",endPoints:{pints:"/pinterst/pinterest/"},getPints(){return this.url+this.endPoints.pints},getPint(t){return this.url+this.endPoints.pints+t}};function i(t){return Math.floor(Math.random()*t)}function n(t,e,i=""){const n=document.createElement(t),o=document.createTextNode(i);return n.className=e,n.append(o),n}const o={key:"pintrest-desks",storage:[[],[],[]],get:function(){let t=JSON.parse(localStorage.getItem(this.key));return t??=this.storage},set:function(t){localStorage.setItem(this.key,JSON.stringify(t))}},s={key:"pintrest-delete-items",storage:[],get:function(){let t=JSON.parse(localStorage.getItem(this.key));return t??=this.storage},set:function(t){localStorage.setItem(this.key,JSON.stringify(t))}};let c;const a={0:"card_small",1:"card_medium",2:"card_large"};function d({imageURL:e,avatarURL:o,description:d,id:r}){this.root=null,this.path=document.querySelector(".pin_container"),this.image=`url(${e})`,this.description=d,this.id=`pint-${r}`,this.avatar=`url(${o})`,this.init=function(){this.root=this.render(),this.root.addEventListener("click",this.handlePint)},this.render=function(){if(s.get().includes(r,0)){const t=n("div",`card ${a[i(3)]}`),e=n("div","card__image-board card__image-board--banned");e.style.background=`#d91a1ae3 ${this.image} center / cover`,e.style.backgroundBlendMode="hard-light";const o=n("button","card__menu-button","ADD");o.type="button";const s=n("div","card__description"),c=n("div","card__avatar");c.style.backgroundImage=this.avatar;const d=n("div","card__text",this.description);return e.append(o),s.append(c,d),t.append(e,s),t.id=this.id,this.path.append(t),t}{const t=n("div",`card ${a[i(3)]}`),e=n("div","card__image-board");e.style.backgroundImage=this.image;const o=n("button","card__menu-button","ADD");o.type="button";const s=n("div","card__description"),c=n("div","card__avatar");c.style.backgroundImage=this.avatar;const d=n("div","card__text",this.description);return e.append(o),s.append(c,d),t.append(e,s),t.id=this.id,this.path.append(t),t}},this.handlePint=e=>{"button"===e.target.type&&(t.open(e.clientX,e.clientY),c=this.id.slice(5))},this.hidePint=function(){this.path.style.display="none"}}function r(t){t.forEach((t=>{new d(t).init()}))}function l(t,i){fetch(e.getPints()).then((t=>t.json())).then((t=>t)).then((e=>{datas=e.slice(t,i),r(datas)}))}function h(t){document.querySelector(".pin_container").innerHTML="";o.get()[t].forEach((t=>{var i;(i=t,new Promise(((t,n)=>fetch(e.getPint(i)).then((e=>{if(e.ok){const i=e.json();t(i)}else n(console.log("Pint not found"))}))))).then((t=>{r([t])}))}))}let u=20,m=30;const p=new function(t){this.root=document.querySelector("#toast-completed"),this.init=function(t){this.open(t),this.closeTimeout(),this.root.addEventListener("click",this.handleToastCompleted)},this.handleToastCompleted=t=>{"button"===t.target.type&&this.close()},this.open=function(t){this.root.classList.add("open"),document.querySelector("#toast-title").innerHTML=`${t}`},this.close=function(){this.root.classList.remove("open")},this.closeTimeout=function(){setTimeout((()=>{this.root.classList.remove("open")}),4e3)}};const v=new function(){this.root=document.querySelector("#modal-add"),this.init=function(){document.querySelector("#btn-modal-add-desk").addEventListener("click",this.open),this.root.addEventListener("click",this.handleModalAdd)},this.open=()=>{this.root.classList.add("open")},this.handleModalAdd=t=>{"radio"===t.target.type?this.add():this.close()},this.add=function(){const t=o.get(),e=document.querySelector(".modal__row");t[event.target.value-1].includes(c,0)?p.init(`На доске ${event.target.value} уже есть такой пинт`):(t[event.target.value-1].push(c),o.set(t),e.addEventListener("click",p.init(`Пинт успешно добавлен на доску ${event.target.value}`)),this.close())},this.close=()=>{this.root.classList.remove("open")}},f=[{title:"Спам",subtitle:"Вводящие в заблуждение или повторяющиеся публикации"},{title:"Изображения обнаженного тела или порнография",subtitle:"Содержимое сексуального характера"},{title:"Членовредительство",subtitle:"Расстройства пищевого поведения, нанесение травм себе, суицид"},{title:"Ложная информация",subtitle:"Ложная информация о здоровье или заговоры"},{title:"Агрессивные действия",subtitle:"Предрассудки, стереотипы, идея превосходства белой расы, оскорбления"},{title:"Опасные товары",subtitle:"Наркотики, оружие, регулируемые товары"},{title:"Преследование или нарушение конфиденциальности",subtitle:"Оскорбления, угрозы, публикация персональных данных"},{title:"Сцены насили",subtitle:"Графическое изображение или пропаганда насилия"},{title:"Это моя интеллектуальная собственность",subtitle:"Нарушение авторских прав или прав на товарный знак"}];const g=new function(){this.root=document.querySelector("#modal-complaints"),this.init=function(){this.render(),this.root.addEventListener("click",this.handleComplainst),document.querySelector("#btn-modal-complaint").addEventListener("click",this.open)},this.open=()=>{this.root.classList.add("open")},this.handleComplainst=({target:t})=>{t.dataset.close?this.close():"submit"===t.type&&this.deletePint()},this.close=()=>{this.root.classList.remove("open")},this.deletePint=()=>{const t=s.get(),e=document.querySelector(".btn-next");t.includes(c,0)?p.init("Вы уже жаловались на этот пинт"):(e.addEventListener("click",p.init("Спасибо за жалобу")),t.push(c),s.set(t),document.querySelector(`#pint-${c}`).firstElementChild.classList.add("card__image-board--banned")),this.close()},this.render=function(){this.modalBody=document.querySelector("#modal-body"),f.forEach((t=>{this.modalBody.insertAdjacentHTML("beforeend",`\n                  <label>\n                      <div class="modal__body-item">\n                          <div class="item-choice">\n                              <input type="checkbox" class="checkbox">\n                              <span class="fake"></span>\n                          </div>\n                          <div class="item-text">\n                              <h3 class="item-text-title">${t.title}</h3>\n                              <p class="item-text-subtitle">${t.subtitle}</p>\n                          </div>\n                      </div>\n                  </label>`)}))}};(new function(t){this.init=function(){this.root=document.querySelector("#toast"),this.root.addEventListener("click",this.handleToast),this.start()},this.start=function(){new Promise((t=>{setTimeout((()=>{this.open(),t()}),15e3)})).then((()=>{setTimeout((()=>{this.close()}),5e3)}))},this.handleToast=t=>{"button"==t.target.type&&this.close()},this.open=function(){this.root.classList.add("open-toast")},this.close=function(){this.root.classList.remove("open-toast")}}).init(),document.querySelector("#desktop-select").addEventListener("change",(function(){"333"!==this.value?(h(this.value),document.querySelector("#load-more").classList.add("btn--close")):document.location.href="./index.html"})),document.querySelector("#mobile-select").addEventListener("change",(function(){"333"!==this.value?(h(this.value),document.querySelector("#load-more").classList.add("btn--close")):document.location.href="./index.html"}));(new function(){this.root=document.querySelector("#header__menu"),this.init=function(){this.open()},this.open=function(){document.querySelector("#header__burger").addEventListener("click",(()=>{this.root.classList.toggle("activ")}))}}).init();document.addEventListener("DOMContentLoaded",(function(){l(0,20),document.querySelector("#load-more").addEventListener("click",(()=>{var t;t=10,l(u,m),u+=t,m+=t})),g.init(),v.init()}));
//# sourceMappingURL=index.a9e58f4f.js.map
