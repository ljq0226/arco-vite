import{r as l,j as a,ay as o,aE as d,s as i}from"./vendor.f0081227.js";/* empty css              */function f(){const s=[{key:"1",name:"\u9707\u60CA,\u4E00\u7537\u5B50\u7ADF...",salary:"\u793E\u4F1A",address:"2022/08/08",email:"jane.doe@example.com"},{key:"2",name:"\u9707\u60CA , ...",salary:"\u65B0\u95FB \u5B66\u6821",address:"2022/08/08",email:"aasasddoe@example.com"},{key:"3",name:"\u9707\u60CA,\u4E00\u7537\u5B50\u7ADF...",salary:"\u5A31\u4E50",address:"2022/08/08",email:"jane.doe@example.com"}],r=l.exports.useRef(null);return a(o,{className:"table-demo-resizable-column",border:!0,borderCell:!0,columns:[{title:"\u6807\u9898",dataIndex:"name"},{title:"\u5173\u952E\u5B57",dataIndex:"salary",filterIcon:a(d,{}),filterDropdown:({filterKeys:e,setFilterKeys:u,confirm:n})=>a("div",{className:"arco-table-custom-filter",children:a(i.Search,{ref:r,searchButton:!0,placeholder:"Please enter name",value:e[0]||"",onChange:t=>{u(t?[t]:[])},onSearch:()=>{n()}})}),onFilter:(e,u)=>e?u.salary.indexOf(e)!==-1:!0,onFilterDropdownVisibleChange:e=>{e&&setTimeout(()=>r.current.focus(),150)}},{title:"\u65E5\u671F",dataIndex:"address"},{title:"\u6458\u8981",dataIndex:"email"}],data:s})}export{f as default};
