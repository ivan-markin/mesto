!function(e){var t={};function o(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(s,r,function(t){return e[t]}.bind(null,r));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t,o){},function(e,t,o){"use strict";o.r(t);o(0);class s{constructor(e,t){this.token=e,this.address=t}getAppInfo(){return Promise.all([this.getCards(),this.getUserInfo()])}getCards(){return fetch(`${this.address}cards`,{headers:{authorization:this.token}}).then(e=>e.ok?e.json():Promise.reject()).catch(()=>console.log("Ошибка загрузки карточек"))}postUser(e,t){return fetch(`${this.address}users/me`,{method:"PATCH",headers:{authorization:this.token,"content-type":"application/json"},body:JSON.stringify({name:e,about:t})}).then(e=>e.ok?e.json():Promise.reject()).catch(e=>console.log(e))}getUserInfo(){return fetch(`${this.address}users/me`,{headers:{authorization:this.token}}).then(e=>e.ok?e.json():Promise.reject()).catch(()=>console.log("Ошибка загрузки информации о пользователе"))}postCard(e,t){return fetch(`${this.address}cards`,{method:"POST",headers:{authorization:this.token,"content-type":"application/json"},body:JSON.stringify({name:e,link:t})}).then(e=>e.ok?e.json():Promise.reject()).catch(e=>console.log(e))}}class r{constructor(e,t,o){this.cardsArray=t,this.container=e,this.card=o}addCard(e){this.container.appendChild(e)}render(){for(const e of this.cardsArray){const t=this.card.create(e.name,e.link);this.container.appendChild(t)}}}class n{constructor(e,t){this.name=e,this.image=t,this.create=this.create.bind(this)}like(e){e.target.classList.toggle("place-card__like-icon_liked")}remove(e){e.target.classList.contains("place-card__delete-icon")&&e.target.closest(".places-list").removeChild(e.target.closest(".place-card"))}create(e,t){const o=document.createElement("div"),s=document.createElement("div"),r=document.createElement("button"),n=document.createElement("div"),a=document.createElement("h4"),i=document.createElement("button"),c=document.createElement("div"),d=document.createElement("p");return o.classList.add("place-card"),s.classList.add("place-card__image"),r.classList.add("place-card__delete-icon"),n.classList.add("place-card__description"),a.classList.add("place-card__name"),i.classList.add("place-card__like-icon"),c.classList.add("place-card__like-container"),d.classList.add("place-card__like-counter"),a.textContent=e,s.style.backgroundImage=`url(${t})`,o.appendChild(s),o.appendChild(n),s.appendChild(r),n.appendChild(a),n.appendChild(i),o}}class a{constructor(e){this.form=e}checkInputValidity(e,t){e.checkValidity()?t.classList.remove("error-message_active"):(e.validity.valueMissing&&(t.textContent="Это обязательное поле",t.classList.add("error-message_active")),e.validity.tooShort&&(t.textContent="Должно быть от 2 до 30 символов",t.classList.add("error-message_active")))}setSubmitButtonState(e){e.elements[0].checkValidity()&&e.elements[1].checkValidity()?e.elements.submit.removeAttribute("disabled"):e.elements.submit.setAttribute("disabled",!0)}setEventListeners(){this.form.addEventListener("input",e=>{this.checkInputValidity(e.target,document.querySelector(`#error-${e.target.id}`)),this.setSubmitButtonState(this.form)})}}class i{constructor(e){this.validateForm=e}open(e){e.element.classList.contains("user-info__button")&&(e.popupAddCard.classList.add("popup-block__is-opened"),document.addEventListener("keydown",t=>{27===t.keyCode&&e.popupAddCard.classList.remove("popup-block__is-opened")}),e.popupForm.reset(),e.addCardSubmit.setAttribute("disabled",!0)),e.element.classList.contains("user-info__edit-profile")&&(e.popupEditProfile.classList.add("popup-block__is-opened"),document.addEventListener("keydown",e=>{27===e.keyCode&&popupEditProfile.classList.remove("popup-block__is-opened")}),e.formUserName.checkValidity()&&e.formAboutUser.checkValidity()&&e.profileButton.removeAttribute("disabled"))}close(e){e.target.closest(".popup-block").classList.remove("popup-block__is-opened")}zoomImage(e){const t=document.querySelector(".big-image"),o=document.querySelector(".big-image__container"),s=e.style.backgroundImage.slice(5,e.style.backgroundImage.length-2),r=document.createElement("img"),n=document.createElement("img");if(o.hasChildNodes())for(;o.firstChild;)o.removeChild(o.firstChild);r.classList.add("big-image__image"),n.classList.add("big-image__close"),o.appendChild(r),o.appendChild(n),r.setAttribute("src",`${s}`),r.setAttribute("alt",""),n.setAttribute("src","./images/close.svg"),n.setAttribute("alt",""),t.classList.toggle("big-image_is-opened"),n.addEventListener("click",()=>{t.classList.remove("big-image_is-opened")}),document.addEventListener("keydown",e=>{27===e.keyCode&&t.classList.remove("big-image_is-opened")})}resetError(){const e=document.getElementsByClassName("error-message");Array.from(e).forEach(e=>{e.classList.remove("error-message_active")})}}class c{constructor(e,t){this.name=e,this.job=t}setUserInfo(e,t){e.value=this.name.textContent,t.value=this.job.textContent}updateUserInfo(e){this.name.textContent=e.name,this.job.textContent=e.about}}!function(){const e=document.querySelector(".places-list"),t=document.forms.new,o=document.forms.profile,d=document.querySelector(".user-info__button"),l=document.querySelector(".popup__button"),u=document.querySelector(".user-info__edit-profile"),m=document.querySelector(".edit-profile__button"),p=document.querySelectorAll(".popup-block__close"),h=o.elements.name,f=o.elements.about,g=t.elements.title,_=t.elements.link,b=document.querySelector(".user-info__name"),v=document.querySelector(".user-info__job"),y=document.querySelector(".user-info__photo"),k=document.querySelector(".edit-profile"),L=document.querySelector(".popup"),C=new n,E=C.create,S=new i,j=new c(b,v),A=new a(t),I=new a(o),P=new s("4b70a63a-218c-4b4c-9259-0286cc25ee55","https://praktikum.tk/cohort8/"),q={editProfileForm:o,popupForm:t,addCardSubmit:l,popupAddCard:L,profileButton:m,formUserName:h,formAboutUser:f,userName:b,userJob:v,popupEditProfile:k};P.getCards().then(t=>{new r(e,t,C).render()}),P.getUserInfo().then(e=>{b.textContent=e.name,v.textContent=e.about,y.style.backgroundImage=`url(${e.avatar})`}),o.addEventListener("submit",(function(e){e.preventDefault(),P.postUser(h.value,f.value).then(t=>{j.updateUserInfo(t),S.close(e)})})),t.addEventListener("submit",(function(t){t.preventDefault(),P.postCard(g.value,_.value).then(o=>{e.appendChild(E(o.name,o.link)),S.close(t)})})),d.addEventListener("click",e=>{const t=e.target;q.element=t,S.open(q)}),u.addEventListener("click",e=>{const t=e.target;q.element=t,S.open(q),j.setUserInfo(h,f),S.resetError()}),p.forEach(e=>{e.addEventListener("click",S.close)}),document.addEventListener("click",(function(e){e.target.classList.contains("place-card__image")&&S.zoomImage(e.target),e.target.classList.contains("place-card__like-icon")&&C.like(e),e.target.classList.contains("place-card__delete-icon")&&C.remove(e)})),I.setEventListeners(),A.setEventListeners()}()}]);