(()=>{"use strict";const t=function(){const t=document.getElementById("taskList");document.getElementById("noProjectsMessage");let e=[];function n(){t.innerHTML="";const n=e.find((t=>null===t.title));n&&n.tasks.forEach(((s,a)=>{const i=document.createElement("li");i.className="task-list-item",s.completed&&i.classList.add("completed"),i.innerHTML=`\n            <input type="checkbox" ${s.completed?"checked":""} onclick="toggleTask(${e.indexOf(n)}, ${a})">\n            <div class="task-content">\n              <h3 class="task-title">${s.title}</h3>\n              <p class="task-description">${s.description}</p>\n              <div class="task-meta">\n                <span>Due: ${s.dueDate.toLocaleDateString()}</span>\n                <span class="priority-${s.priority.toLowerCase()}">${s.priority}</span>\n                <button onclick="removeTask(${e.indexOf(n)}, ${a})" class="button">X</button>\n              </div>\n            </div>\n          `,t.appendChild(i)}))}return{projects:e,currentProject:null,updateTaskList:n,updateTaskList:n,resetTaskForm:function(){taskTitleInput.value="",taskDescriptionInput.value="",taskPrioritySelect.value="Medium"}}}(),e=t,n=document.getElementById("projectForm"),s=document.getElementById("projectTitleInput"),a=document.getElementById("projectSelect"),i=document.getElementById("taskFormContainer"),c=document.getElementById("taskForm"),o=document.getElementById("taskTitleInput"),l=document.getElementById("taskDescriptionInput"),r=document.getElementById("taskPrioritySelect");n.addEventListener("submit",(t=>{t.preventDefault();const n=s.value.trim();n&&(e.push({title:n,tasks:[]}),updateProjectSelect(),s.value="")})),c.addEventListener("submit",(t=>{if(t.preventDefault(),currentProject&&o.value.trim()){const t={title:o.value,description:l.value,dueDate:new Date,priority:r.value,completed:!1},n=e.find((t=>t.title===currentProject));n&&(n.tasks.push(t),updateTaskList(),resetTaskForm())}})),a.addEventListener("change",(t=>{currentProject=t.target.value,i.classList.toggle("hidden",!currentProject),updateTaskList()})),window.toggleTask=(t,n)=>{e[t].tasks[n].completed=!e[t].tasks[n].completed,updateTaskList()},window.removeTask=(t,n)=>{e[t].tasks.splice(n,1),updateTaskList()}})();