(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{7544:function(e,t,s){Promise.resolve().then(s.bind(s,7720))},7720:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var n=s(7437),a=s(2265),r=s(6463),o=s(7138),l=s(7453),i=()=>{let[e,t]=(0,a.useState)(!1),[s,n]=(0,a.useState)(null),o=(0,r.useRouter)(),{handleSetUserUsername:i}=(0,l.S)();return{login:async(e,s)=>{t(!0),n(null);try{let t=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:s}),credentials:"include"}),n=await t.json();if(!t.ok)throw Error(n.message||"Error al iniciar sesi\xf3n");i(e),o.push("/")}catch(e){n(e.message)}finally{t(!1)}},isLoading:e,error:s}},u=()=>{let[e,t]=(0,a.useState)(""),[s,l]=(0,a.useState)(""),{login:u,isLoading:d,error:c}=i(),h=(0,r.useRouter)();(0,a.useEffect)(()=>{document.cookie.split("; ").find(e=>e.startsWith("session="))&&h.push("/")},[h]);let m=async t=>{t.preventDefault(),await u(e,s)};return(0,n.jsxs)("div",{className:"flex mt-32 justify-center",children:[(0,n.jsxs)("form",{className:"bg-white shadow-md w-[50rem] rounded px-8 pt-6 pb-8",onSubmit:m,children:[(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Usuario"}),(0,n.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Usuario",value:e,onChange:e=>t(e.target.value)})]}),(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password",children:"Contrase\xf1a"}),(0,n.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"*********",value:s,onChange:e=>l(e.target.value)})]}),(0,n.jsx)("div",{className:"flex items-center justify-between",children:(0,n.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",disabled:d,children:d?"Cargando...":"Entrar"})}),c&&(0,n.jsx)("p",{className:"text-red-500 text-center font-bold italic",children:c})]}),(0,n.jsx)("div",{className:"ml-3 mr-3"}),(0,n.jsxs)("div",{className:"p-4 text-center content-center bg-white shadow-md rounded",children:[(0,n.jsx)("h2",{className:"text-lg",children:"\xbfNuevo aqu\xed?"}),(0,n.jsx)("p",{className:"mb-6",children:"\xdanete a nosotros hoy y explora m\xe1s!"}),(0,n.jsx)(o.default,{href:"/register",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Reg\xedstrate"})]})]})}},7453:function(e,t,s){"use strict";s.d(t,{S:function(){return l},d:function(){return o}});var n=s(7437),a=s(2265);let r=(0,a.createContext)(void 0),o=e=>{let{children:t}=e,[s,o]=(0,a.useState)({username:""});return(0,n.jsx)(r.Provider,{value:{user:s,setUser:o,handleSetUserUsername:e=>{o(t=>({...t,username:e}))}},children:t})},l=()=>{let e=(0,a.useContext)(r);if(!e)throw Error("useUser must be used within a UserProvider");return e}}},function(e){e.O(0,[291,971,23,744],function(){return e(e.s=7544)}),_N_E=e.O()}]);