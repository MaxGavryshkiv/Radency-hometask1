var e=[{id:"f61f6df4e77f6",name:"Shoping list",created:"April 20, 2021",category:"Task",content:"Tomatoes",dates:""},{id:"e40579de5d636",name:"the theory of evolution",created:"April 27, 2021",category:"Random Thought",content:"tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna",dates:""},{id:"d5517b8e96cd2",name:"Why is word 'why' called why?",created:"May 03, 2021",category:"Idea",content:"tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna",dates:""},{id:"8d875179a6976",name:"Where is live Dr.Pepper",created:"May 07, 2021",category:"Random Thought",content:"tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna",dates:""},{id:"69b4ae62c551b",name:"Make up a story about cats",created:"May 20, 2021",category:"Task",content:"tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna",dates:""},{id:"22a63d8d2b612",name:"How fast the water can flow",created:"May 28, 2021",category:"Random Thought",content:"tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna",dates:""},{id:"43653210ef08f",name:"What a beautiful Summer",created:"June 1, 2021",category:"Idea",content:"tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna",dates:""}];var t=[{id:"f61f6ec4e77f6",name:"Shoping list",created:"April 20, 2021",category:"Task",content:"Tomatoes",dates:""},{id:"e40123de5d636",name:"the theory of evolution",created:"April 27, 2021",category:"Random Thought",content:"tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna",dates:""},{id:"d5223b8e96cd2",name:"Why is word 'why' called why?",created:"May 03, 2021",category:"Idea",content:"tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna",dates:""},{id:"8d812379a6976",name:"Where is live Dr.Pepper",created:"May 07, 2021",category:"Random Thought",content:"tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna",dates:""}];localStorage.getItem("notes")||localStorage.setItem("notes",JSON.stringify(e)),localStorage.getItem("archivedNotes")||localStorage.setItem("archivedNotes",JSON.stringify(t));var a=function(e,t){localStorage.setItem(t,JSON.stringify(e))};function n(e){return e.length>17&&(e=e.substring(0,16)+"..."),e}function i(e){return e.length>22&&(e=e.substring(0,22)+"..."),e}const s=document.querySelector(".note-table-tbody");function o(e,t=s){var a;if(t.innerHTML="",0!==e.length)for(let o=0;o<e.length;o++){let r=e[o],c=t.insertRow(-1);c.dataset.id=r.id,"Idea"===r.category&&(c.insertCell(0).innerHTML=`<div class="td-alight"><span class="idea-icon icon"></span><p>${n(r.name)}</p></div>`),"Random Thought"===r.category&&(c.insertCell(0).innerHTML=`<div class="td-alight"><span class="thought-icon icon"></span><p>${n(r.name)}</p></div>`),"Task"===r.category&&(c.insertCell(0).innerHTML=`<div class="td-alight"><span class="task-icon icon"></span><p>${n(r.name)}</p></div>`),c.insertCell(1).innerHTML=r.created,c.insertCell(2).innerHTML=r.category,c.insertCell(3).innerHTML=((a=r.content).length>15&&(a=a.substring(0,14)+"..."),a),c.insertCell(4).innerHTML=i(r.dates),c.insertCell(5).innerHTML=t!==s?"<button class='note-bttn unarchive-bttn'></button><button class='note-bttn delete-bttn'></button>":"<button class='note-bttn edit-bttn'></button><button class='note-bttn archive-bttn'></button><button class='note-bttn delete-bttn'></button>"}}try{o(JSON.parse(localStorage.getItem("notes")))}catch{console.log("Something went wrong noteRender")}var r=o;let c;try{c=JSON.parse(localStorage.getItem("archivedNotes"))}catch{console.log("openArch")}const l=document.querySelector(".archive-note-table-tbody"),u=document.querySelector(".open-archive-modal"),d=document.querySelector(".archive-close"),m=document.querySelector("[data-archive]");u.addEventListener("click",(function(){m.classList.remove("is-hidden"),r(c,l)})),d.addEventListener("click",(function(){m.classList.add("is-hidden")}));const p=document.querySelector(".form");var g=function(e){p.elements.noteName.value=e.name,p.elements.noteCategory.value=e.category,p.elements.noteContent.value=e.content,p.elements.noteName.dataset.id=e.id,p.elements.noteName.dataset.dateOfCreation=e.created,p.classList.replace("form","edit-form")};const h=document.querySelector(".note-open-modal"),v=document.querySelector(".modal-close"),f=document.querySelector("[data-modal]");function b(){f.classList.add("is-hidden")}h.addEventListener("click",(function(){f.classList.remove("is-hidden")})),v.addEventListener("click",b);var q=function(e){const t=/^(0?[1-9]|[12][0-9]|3[01])[\/\-\.\/\\](0?[1-9]|1[012])[\/\-\.\/\\]\d{4}$/,a=e.split(/,| /).map((e=>e.match(t)));let n="",i="";return a.forEach((e=>{null!==e&&e.forEach((e=>{null!=e&&e.length>=4&&e.length<=10&&(n+=i+e,i=", ")}))})),n};const y=document.querySelector(".note-counter-table-tbody");var S=function(e,t){for(let a=0;a<e.length;a++){let n=e[a],i=t[a];if(n.name===i.name){if(0===n.quantity&&0===i)return;let e=y.insertRow(-1);"Idea"===n.name&&(e.insertCell(0).innerHTML=`<div class="td-alight"><span class="idea-icon icon"></span><p>${n.name}</p></div>`),"Task"===n.name&&(e.insertCell(0).innerHTML=`<div class="td-alight"><span class="task-icon icon"></span><p>${n.name}</p></div>`),"Random Thought"===n.name&&(e.insertCell(0).innerHTML=`<div class="td-alight"><span class="thought-icon icon"></span><p>${n.name}</p></div>`),e.insertCell(1).innerHTML=n.quantity,e.insertCell(2).innerHTML=i.quantity}}};var T=function(e){let t=0,a=0,n=0;return e.forEach((e=>{"Idea"===e.category&&(t+=1),"Task"===e.category&&(a+=1),"Random Thought"===e.category&&(n+=1)})),[{name:"Idea",quantity:t},{name:"Task",quantity:a},{name:"Random Thought",quantity:n}]};const L=document.querySelector(".note-counter-table-tbody");function N(e,t){L.innerHTML="";const a=T(e),n=T(t);S(a,n)}try{const e=JSON.parse(localStorage.getItem("notes"));N(e,JSON.parse(localStorage.getItem("archivedNotes")))}catch{console.log("Something went wrong")}var I=N;let M,C;try{M=JSON.parse(localStorage.getItem("notes")),C=JSON.parse(localStorage.getItem("archivedNotes"))}catch{console.log("note is notdefined")}const $=document.querySelector(".form");let k,w;$.addEventListener("submit",(function(e){e.preventDefault();let t=$.elements.noteName.value,n=$.elements.noteCategory.value,i=$.elements.noteContent.value,s=(new Date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),o=q(i),c=Math.random().toString(16).slice(2);if($.classList.contains("edit-form")){objId=$.elements.noteName.dataset.id;let e=M.findIndex((e=>e.id===objId)),s={id:`${$.elements.noteName.dataset.id}`,name:`${t}`,created:`${$.elements.noteName.dataset.dateOfCreation}`,category:`${n}`,content:`${i}`,dates:`${o}`};try{M.splice(e,1,s),a(M,"notes"),$.classList.replace("edit-form","form"),$.reset(),b(),r(M),I(M,C)}catch{console.log("noteCreator Error edit")}return}let l={id:`${c}`,name:`${t}`,created:`${s}`,category:`${n}`,content:`${i}`,dates:`${o}`};try{M.push(l),a(M,"notes"),$.reset(),b(),r(M),I(M,C)}catch{console.log("noteCreator Error")}}));try{w=JSON.parse(localStorage.getItem("notes")),k=JSON.parse(localStorage.getItem("archivedNotes"))}catch{console.log("addBttn")}const H=document.querySelector(".archive-note-table-tbody");function O(e){let t=w.findIndex((t=>t.id===e));var a;a=w[t],f.classList.remove("is-hidden"),g(a)}function E(e){let t=w.findIndex((t=>t.id===e)),n=w.splice(t,1);k.push(...n),a(w,"notes"),a(k,"archivedNotes"),r(w),I(w,k)}function J(e){let t=w.findIndex((t=>t.id===e));w.splice(t,1),a(w,"notes"),r(w),I(w,k)}function R(e){let t=k.findIndex((t=>t.id===e));k.splice(t,1),a(k,"archivedNotes"),r(k,H),I(w,k)}function x(e){let t=k.findIndex((t=>t.id===e)),n=k.splice(t,1);w.push(...n),a(k,"archivedNotes"),a(w,"notes"),r(k,H),r(w),I(w,k)}const A=document.querySelector(".archive-table"),D=document.querySelector(".note-table");A.addEventListener("click",(e=>{let t=e.target,a=t.parentNode.parentNode.dataset.id;"BUTTON"===t.nodeName&&(t.classList.contains("unarchive-bttn")&&x(a),t.classList.contains("delete-bttn")&&R(a))})),D.addEventListener("click",(e=>{let t=e.target,a=t.parentNode.parentNode.dataset.id;"BUTTON"===t.nodeName&&(t.classList.contains("edit-bttn")&&O(a),t.classList.contains("archive-bttn")&&E(a),t.classList.contains("delete-bttn")&&J(a))}));
//# sourceMappingURL=index.93bb5e91.js.map