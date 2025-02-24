(()=>{"use strict";var t={56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},72:t=>{var e=[];function n(t){for(var n=-1,a=0;a<e.length;a++)if(e[a].identifier===t){n=a;break}return n}function a(t,a){for(var o={},r=[],l=0;l<t.length;l++){var i=t[l],c=a.base?i[0]+a.base:i[0],d=o[c]||0,u="".concat(c," ").concat(d);o[c]=d+1;var p=n(u),y={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)e[p].references++,e[p].updater(y);else{var g=s(y,a);a.byIndex=l,e.splice(l,0,{identifier:u,updater:g,references:1})}r.push(u)}return r}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var o=a(t=t||[],s=s||{});return function(t){t=t||[];for(var r=0;r<o.length;r++){var l=n(o[r]);e[l].references--}for(var i=a(t,s),c=0;c<o.length;c++){var d=n(o[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=i}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",a=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),a&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),a&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,a,s,o){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(a)for(var l=0;l<this.length;l++){var i=this[l][0];null!=i&&(r[i]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);a&&r[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),e.push(d))}},e}},365:(t,e,n)=>{n.d(e,{A:()=>l});var a=n(601),s=n.n(a),o=n(314),r=n.n(o)()(s());r.push([t.id,':root {\n    --color-light: #FFF8E7;\n    --color-dark: #1C1B19;\n    --gray-dark: #1C1B1988;\n    --gray-light: #1C1B1933;\n    --white-light: #ffffff88;\n    --white-dark: #ffffff33;\n    --accent-color-1: #D76500;\n    --accent-color-2: #396E67;\n    --accent-color-3: #D14D41;\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0;\n}\n\nhtml,\nbody {\n    height: 100%;\n    min-height: fit-content;\n    font-size: 1.2em;\n}\n\nbody {\n    line-height: 1.5; /* This requires customizing the line height for larger text. */\n    background-color: var(--color-light);\n    color: var(--color-dark);\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\n    display: flex;\n    flex-direction: column;\n}\n\nimg, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%; /* Use `max-width: revert;` if an image is meant to overflow */\n}\n\ninput, button, textarea, select {\n    font: inherit;\n}\n\nul {\n    list-style-type: none;\n    padding: 0;\n}\n\nheader {\n    color: var(--color-light);\n    background-color: var(--color-dark);\n    display: flex;\n    gap: 1rem;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem;\n    font-size: 2em;\n    font-weight: bold;\n}\n\nheader a,\nheader a:active,\nheader a:visited {\n    color: var(--color-light);\n}\n\nheader .hamburger svg {\n    cursor: pointer;\n    fill: var(--color-light);\n}\n\n.menu {\n    background-color: var(--gray-light);\n    padding: 1rem;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    height: 84.4px;\n}\n\n.nav {\n    display: flex;\n    gap: 0.2rem;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n.nav button {\n    background: none;\n    border: none;\n    font-weight: bold;\n    border-radius: 5px;\n}\n\n.new-all,\n.new-task,\n.new-project,\n.new-tag {\n    background-color: var(--gray-dark);\n    color: var(--color-light);\n    border: none;\n    width: 2em;\n    height: 2em;\n    border-radius: 50%;\n}\n\nbutton:active,\nbutton:hover {\n    background-color: var(--gray-light);\n} \n\n.content,\n#add-task,\n#add-project {\n    padding: 1rem;\n    width: min(1000px, 98%);\n    margin: 0 auto;\n}\n\n.content > div {\n    display: flex;\n    justify-content: space-between;\n}\n\n.task {\n    padding: 0.3rem 0;\n    display: grid;\n    grid-template-columns: max-content 1fr 1fr 1fr;\n    border-bottom: 1px solid var(--gray-light);\n    align-items: center;\n}\n\n.task:nth-last-child(1) {\n    border-bottom: 0;\n}\n\n.task .status {\n    cursor: pointer;\n    margin-right: 0.5em;\n}\n\n.task .title {\n    font-weight: bold;\n    cursor: pointer;\n    grid-column: 2 / 4;\n}\n\n.content h2 {\n    cursor: pointer;\n}\n\n.task-project,\n.tag {\n    cursor: pointer;\n}\n\n.task .task-project:hover,\n.tag:hover {\n    color: var(--accent-color-2);\n}\n\n.task[priority="high"] .title::after {\n    content: \' ↑\';\n    color: var(--gray-dark);\n}\n\n.task[priority="low"] .title::after {\n    content: \' ↓\';\n    color: var(--gray-dark);\n}\n\n.task .due {\n    margin-left: auto;\n    grid-column: 4 / 5;\n}\n.task .today {\n    color: var(--accent-color-3);\n}\n\n.task .this-week {\n    color: var(--accent-color-1);\n}\n\n.task .later {\n    color: var(--accent-color-2);\n}\n\n.task .task-project {\n    grid-column: 1 / 3;\n    color: var(--gray-dark);\n    display: none;\n}\n\n.task .tag::before {\n    content: "#";\n}\n\n.task .tags {\n    display: none;\n    flex-wrap: wrap;\n    gap: 1rem;\n    color: var(--gray-light);\n}\n\n.task .exact-due {\n    color: var(--gray-dark);\n    margin-left: auto;\n}\n\n.task .notes {\n    grid-row: 3 / 4;\n    grid-column: 1 / 5;\n    font-style: italic;\n}\n\n.task .task-controls {\n    grid-column: 1 / 5;\n    grid-row: 4 / 5;\n    display: flex;\n    justify-content: flex-end;\n    gap: 1em;\n}\n\n.task .edit,\n.task .delete {\n    cursor: pointer;\n}\n\n.task .edit:hover {\n    color: var(--accent-color-2);\n}\n\n.task .delete:hover {\n    color: var(--accent-color-3);\n}\n\n.task ul {\n    grid-column: 2 / -1;\n    margin: 0.3rem;\n    padding: 0.2rem 0.6rem;\n    background-color: var(--white-light);\n    border-radius: 10px;\n}\n\nli[done="true"],\nli[deleted="true"] {\n    opacity: 0.40;\n}\n\nli[deleted="true"] > .title{\n    text-decoration: line-through;\n}\n\nfooter {\n    color: var(--color-light);\n    background-color: var(--color-dark);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    padding: 1rem;\n    margin-top: auto;\n}\n\nfooter img {\n    background-color: var(--color-light);\n    border-radius: 50%;\n    border: 0.1em solid var(--color-light);\n    height: 1em;\n    flex-shrink: 0;\n}\n\na,\na:visited {\n    text-decoration: none;\n    color: var(--accent-color-1);\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5em;\n}\n\nform div {\n    display: flex;\n    flex-direction: column;\n}\n\nform button {\n    width: max-content;\n    margin-left: auto;\n}',""]);const l=r},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},601:t=>{t.exports=function(t){return t[1]}},659:t=>{var e={};t.exports=function(t,n){var a=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,s&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}}},e={};function n(a){var s=e[a];if(void 0!==s)return s.exports;var o=e[a]={id:a,exports:{}};return t[a](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var a=n(72),s=n.n(a),o=n(825),r=n.n(o),l=n(659),i=n.n(l),c=n(56),d=n.n(c),u=n(540),p=n.n(u),y=n(113),g=n.n(y),f=n(365),m={};m.styleTagTransform=g(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=p(),s()(f.A,m),f.A&&f.A.locals&&f.A.locals;class h{title=void 0;due=1/0;priority=0;notes="";project=void 0;tags=[];done=!1;constructor(t){this.title=t}}function v(t,e,n,a){t.find((t=>t.title===e))[n]=a}function k(t,e){let n=x(t,e);if(-1!==n){if("tasks"in t[n])for(let n in t)t[n].project===e&&v(t,t[n].title,"project",void 0);t.splice(n,1);for(let n in t)"tasks"in t[n]&&k(t[n].tasks,e)}}function x(t,e){return t.findIndex((t=>t.title===e))}function b(t,e){let n=x(t,e);if(t[n].done)t[n].done=!1;else if(t[n].done=!0,"tasks"in t[n])for(let e in t[n].tasks)t[n].tasks[e].done||b(t[n].tasks,t[n].tasks[e].title)}function C(t,e,n){let a=x(t,e);if(!t[a].tags.includes(n)&&(t[a].tags.unshift(n),"tasks"in t[a]))for(let e in t[a].tasks)t[a].tasks[e].tags.includes(n)||C(t[a].tasks,t[a].tasks[e].title,n)}function L(t,e,n){t[x(t,e)].due=new Date(n)}function j(t,e,n){t[x(t,e)].notes=n}function E(t){t.sort(((t,e)=>t.done>e.done?1:t.done<e.done?-1:t.due-e.due||e.priority-t.priority||t.title.localeCompare(e.title)))}class w extends h{constructor(t,e=[]){super(t),this.tasks=e}}function S(t){const e=[];for(let n in t)"tasks"in t[n]&&e.push(t[n].title);return e}function T(t,e,n){D(t.filter(n),e)}function q(t,e,n){D(t.filter((t=>t.tags.includes(n))),e)}function A(t){return!("tasks"in t)}function D(t,e){for(let n in t){x(t,t[n].title);const a=document.createElement("li"),s=document.createElement("span"),o=document.createElement("span"),r=document.createElement("span"),l=document.createElement("span"),i=document.createElement("span"),c=document.createElement("span"),d=document.createElement("span"),u=document.createElement("span"),p=document.createElement("p"),y=document.createElement("span"),g=document.createElement("div");if(a.classList.add("task"),a.id=t[n].title,s.classList.add("title"),o.classList.add("priority"),r.classList.add("due"),l.classList.add("exact-due"),i.classList.add("status"),c.classList.add("task-project"),d.classList.add("tags"),u.classList.add("edit"),p.classList.add("notes"),y.classList.add("delete"),g.classList.add("task-controls"),c.style.display="none",d.style.display="none",l.style.display="none",p.style.display="none",g.style.display="none",s.textContent=t[n].title,u.textContent="✎",p.textContent=t[n].notes,y.textContent="⊗",1===t[n].priority?a.setAttribute("priority","high"):-1===t[n].priority?a.setAttribute("priority","low"):o.textContent=" ",t[n].due===1/0||null===t[n].due)r.textContent=" ",l.textContent=" ";else{const e=new Date,a=new Date,s=new Date(t[n].due);a.setDate(e.getDate()+7),s.setHours(0,0,0,0)<e.setHours(0,0,0,0)?(r.textContent="Late!",r.classList.add("late")):s.setHours(0,0,0,0)==e.setHours(0,0,0,0)?(r.textContent="Today",r.classList.add("today")):s.setHours(0,0,0,0)<=a.setHours(0,0,0,0)?(r.textContent="Soon",r.classList.add("this-week")):(r.textContent="Later",r.classList.add("later")),l.textContent=`${s.getFullYear()}-${s.getMonth()+1}-${s.getDate()}`}if(!0===t[n].done?(i.textContent="☒",a.setAttribute("done","true")):(i.textContent="☐",a.setAttribute("done","false")),void 0!==t[n].project&&(c.textContent=`${t[n].project}`,c.setAttribute("project",t[n].project)),t[n].tags.length>0)for(let e in t[n].tags){const a=document.createElement("li");a.classList.add("tag"),a.textContent=t[n].tags[e],a.setAttribute("tags",t[n].tags[e]),d.appendChild(a)}e.appendChild(a),a.appendChild(i),a.appendChild(s),s.appendChild(o),a.appendChild(r),a.appendChild(c),a.appendChild(d),a.appendChild(l),a.appendChild(p),g.appendChild(u),g.appendChild(y),a.appendChild(g)}}const I=document.querySelector(".content"),O=document.createElement("h2"),H=document.createElement("div"),N=document.createElement("ul"),M=document.querySelector("#add-task-form"),P=document.querySelector("#add-project-form"),$=document.querySelector(".new-all");let F="",J="",Y="";I.appendChild(O),I.appendChild(H),I.appendChild(N);const U=localStorage.getItem("save")?(console.log("Loading local storage..."),JSON.parse(localStorage.getItem("save"))):(console.log("No local storage."),[]);function z(t){for(;t.firstChild;)t.firstChild.remove()}function B(t,e){z(e),P.parentElement.style.display="none",M.parentElement.style.display="none",$.style.display="block",I.style.display="block","Tasks"===F?(O.innerText="Tasks",H.innerText="Your upcoming tasks",T(t,e,A)):"Projects"===F?(O.innerText="Projects",H.innerText="Your various projects",function(t,e){for(let n in t)if("tasks"in t[x(t,t[n].title)]){const a=document.createElement("li"),s=document.createElement("span"),o=document.createElement("span"),r=document.createElement("span"),l=document.createElement("span"),i=document.createElement("span"),c=document.createElement("span"),d=document.createElement("span"),u=document.createElement("p"),p=document.createElement("span"),y=document.createElement("div"),g=document.createElement("ul");if(a.classList.add("task"),a.id=t[n].title,s.classList.add("title"),o.classList.add("priority"),r.classList.add("due"),l.classList.add("exact-due"),i.classList.add("task-project"),c.classList.add("tags"),d.classList.add("edit"),u.classList.add("notes"),p.classList.add("delete"),y.classList.add("task-controls"),g.classList.add("project-tasks"),i.style.display="none",c.style.display="none",l.style.display="none",u.style.display="none",y.style.display="none",g.style.display="none",s.textContent=t[n].title,d.textContent="✎",u.textContent=t[n].notes,p.textContent="⊗",1===t[n].priority?a.setAttribute("priority","high"):-1===t[n].priority?a.setAttribute("priority","low"):o.textContent=" ",t[n].due===1/0||null===t[n].due)r.textContent=" ",l.textContent=" ";else{const e=new Date,a=new Date,s=new Date(t[n].due);a.setDate(e.getDate()+7),s.setHours(0,0,0,0)<e.setHours(0,0,0,0)?(r.textContent="Late!",r.classList.add("late")):s.setHours(0,0,0,0)==e.setHours(0,0,0,0)?(r.textContent="Today",r.classList.add("today")):s.setHours(0,0,0,0)<=a.setHours(0,0,0,0)?(r.textContent="Soon",r.classList.add("this-week")):(r.textContent="Later",r.classList.add("later")),l.textContent=`${s.getFullYear()}-${s.getMonth()+1}-${s.getDate()}`}if(!0===t[n].done?a.setAttribute("done","true"):a.setAttribute("done","false"),void 0!==t[n].project&&(i.textContent=`${t[n].project}`,i.setAttribute("project",t[n].project)),t[n].tags.length>0)for(let e in t[n].tags){const a=document.createElement("li");a.classList.add("tag"),a.textContent=t[n].tags[e],a.setAttribute("tags",t[n].tags[e]),c.appendChild(a)}t[n].tasks.length>0&&(E(t[n].tasks),T(t[n].tasks,g,A)),e.appendChild(a),a.appendChild(s),s.appendChild(o),a.appendChild(r),a.appendChild(i),a.appendChild(c),a.appendChild(l),a.appendChild(u),y.appendChild(d),y.appendChild(p),a.appendChild(y),a.appendChild(g)}}(t,e)):"Tags"===F?($.style.display="none",O.innerText="Tags",H.innerText="Your assorted tags",function(t,e){const n=[];for(let e in t)for(let a in t[e].tags)n.includes(t[e].tags[a])||n.push(t[e].tags[a]);for(let a in n){const s=document.createElement("li"),o=document.createElement("span"),r=document.createElement("ul");s.classList.add("task"),s.id=n[a],o.classList.add("title"),o.classList.add("title-tag"),r.classList.add("project-tasks"),r.style.display="none",o.textContent=n[a],q(t,r,n[a]),r.appendChild,e.appendChild(s),s.appendChild(o),s.appendChild(r)}}(t,e)):"Project"===F?($.style.display="none",O.innerText=J,H.innerText=t[x(t,J)].notes,function(t,e,n){D(t.filter((t=>n===t.project)),e)}(t,e,J)):"Tag"===F&&($.style.display="none",O.innerText=Y,H.innerText=`Tasks with the ${Y} tag`,q(t,e,Y)),localStorage.setItem("save",JSON.stringify(t))}F="Tasks",B(U,N),localStorage.setItem("save",JSON.stringify(U)),document.addEventListener("click",(t=>{if("Tasks"===t.target.innerText?(F="Tasks",E(U),B(U,N)):"Projects"===t.target.innerText?(F="Projects",E(U),B(U,N)):"Tags"===t.target.innerText&&(F="Tags",E(U),B(U,N)),"new-all"===t.target.classList.value&&"Tasks"===F){const t=M.querySelector("#task-project");M.querySelector(".task-project-title").style.display="block",t.style.display=" block",M.classList.value="new-task-form",I.style.display="none",P.parentElement.style.display="none",M.parentElement.style.display="block";const e=document.querySelector("#task-project");z(e);const n=S(U);for(let t in n){const a=document.createElement("option");a.textContent=n[t],e.appendChild(a)}}else"new-all"===t.target.classList.value&&"Projects"==F&&(I.style.display="none",M.parentElement.style.display="none",P.parentElement.style.display="block");localStorage.setItem("save",JSON.stringify(U))})),M.addEventListener("submit",(t=>{t.preventDefault();const e=M["task-title"].value,n=M["task-due"].value,a=M["task-priority"].value,s=M["task-project"].value;let o=M["task-tags"].value;const r=M["task-notes"].value;"new-task-form"===M.classList.value&&U.push(new h(e)),n.length>0&&L(U,e,`${n}T00:00`),v(U,e,"priority",+a),s.length>0&&function(t,e,n){let a=t.indexOf(t.find((t=>t.title===e))),s=t.indexOf(t.find((t=>t.title===n)));for(let n in t[s].tasks)if(e===t[s].tasks[n].title){const n=x(t[s].tasks,e);t[s].tasks.splice(n,1)}if(t[s].tasks.unshift(t[a]),t[a].project=t[s].title,t[s].tags.length>0)for(let n in t[s].tags)C(t,e,t[s].tags[n]);t[s].due<t[a].due&&L(t,e,t[s].due,(t[s].due.getFullYear(),t[s].due.getMonth(),t[s].due.getDate()))}(U,e,s),o.length>0&&(o=o.split(" "),v(U,e,"tags",o)),j(U,e,r),E(U),B(U,N),M.reset(),M.parentElement.style.display="none",localStorage.setItem("save",JSON.stringify(U))})),P.addEventListener("submit",(t=>{t.preventDefault();const e=P["project-title"].value,n=P["project-due"].value,a=P["project-priority"].value;let s=P["project-tags"].value;const o=P["project-notes"].value;if(U.push(new w(e)),n.length>0&&L(U,e,`${n}T00:00`),v(U,e,"priority",+a),s.length>0){s=s.split(" ");for(let t in s)C(U,e,s[t])}j(U,e,o),E(U),B(U,N),P.reset(),P.parentElement.style.display="none",localStorage.setItem("save",JSON.stringify(U))})),N.addEventListener("click",(t=>{let e=t.target.closest(".task");if(e.getAttribute("deleted"));else if("status"==t.target.classList[0])b(U,e.id),B(U,N);else if("delete"==t.target.classList[0])k(U,e.id),e.setAttribute("deleted","true");else if("edit"==t.target.classList[0]){const t=M.querySelector("#task-project");M.querySelector(".task-project-title").style.display="block",t.style.display=" block",I.style.display="none",P.parentElement.style.display="none",M.parentElement.style.display="block";const n=document.querySelector("#task-project");z(n);const a=S(U);for(let t in a){const e=document.createElement("option");e.textContent=a[t],n.appendChild(e)}!function(t){M.classList.remove("new-task-form"),M.classList.add("edit-task-form"),M.querySelector("#task-title").value=t.title,M.querySelector("#task-due").value=toString(t.due),M.querySelector("#task-priority").value=t.priority;const e=M.querySelector("#task-project");e.value=t.project,"tasks"in t&&(M.querySelector(".task-project-title").style.display="none",e.style.display=" none"),M.querySelector("#task-tags").value=t.tags.join(" "),M.querySelector("#task-notes").value=t.notes,localStorage.setItem("save",JSON.stringify(U))}(U[x(U,e.id)])}"title"==t.target.classList[0]&&("title title-tag"===t.target.classList.value?function(t){const e=t.querySelector(".project-tasks");"none"===e.style.display?e.style.display="grid":e.style.display="none"}(e):function(t){const e=t.querySelector(".task-project"),n=t.querySelector(".tags"),a=t.querySelector(".exact-due"),s=t.querySelector(".notes"),o=t.querySelector(".task-controls"),r=t.querySelector(".project-tasks");"inline"==e.style.display?(e.style.display="none",n.style.display="none",a.style.display="none",s.style.display="none",o.style.display="none",null!=r&&(r.style.display="none")):(e.style.display="inline",n.style.display="flex",a.style.display="inline",s.style.display="block",o.style.display="flex",null!=r&&(r.style.display="grid"))}(e)),"task-project"===t.target.classList.value&&(F="Project",J=t.target.getAttribute("project"),E(U),B(U,N)),"tag"===t.target.classList.value&&(F="Tag",Y=t.target.getAttribute("tags"),E(U),B(U,N)),localStorage.setItem("save",JSON.stringify(U))}))})();