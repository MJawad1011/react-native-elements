"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3825,9486],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=u(n),c=r,k=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return n?a.createElement(k,o(o({ref:e},d),{},{components:n})):a.createElement(k,o({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58215:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(67294);const r=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},9877:(t,e,n)=>{n.d(e,{Z:()=>d});var a=n(87462),r=n(67294),l=n(72389),o=n(29548),i=n(86010);const p="tabItem_LplD";function u(t){var e,n,l,u=t.lazy,d=t.block,m=t.defaultValue,s=t.values,c=t.groupId,k=t.className,N=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=s?s:N.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),v=(0,o.lx)(g,(function(t,e){return t.value===e.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===m?m:null!=(e=null!=m?m:null==(n=N.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(l=N[0])?void 0:l.props.value;if(null!==f&&!g.some((function(t){return t.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+g.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.UB)(),b=h.tabGroupChoices,y=h.setTabGroupChoices,I=(0,r.useState)(f),C=I[0],A=I[1],D=[],w=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var E=b[c];null!=E&&E!==C&&g.some((function(t){return t.value===E}))&&A(E)}var T=function(t){var e=t.currentTarget,n=D.indexOf(e),a=g[n].value;a!==C&&(w(e),A(a),null!=c&&y(c,a))},x=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=D.indexOf(t.currentTarget)+1;n=D[a]||D[0];break;case"ArrowLeft":var r=D.indexOf(t.currentTarget)-1;n=D[r]||D[D.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},k)},g.map((function(t){var e=t.value,n=t.label,l=t.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:function(t){return D.push(t)},onKeyDown:x,onFocus:T,onClick:T},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":C===e})}),null!=n?n:e)}))),u?(0,r.cloneElement)(N.filter((function(t){return t.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},N.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==C})}))))}function d(t){var e=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(e)},t))}},25268:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>u,toc:()=>d,default:()=>s});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={},p=void 0,u={unversionedId:"component_usage/Input",id:"version-4.0.0-rc.0/component_usage/Input",title:"Input",description:"Interaction methods",source:"@site/versioned_docs/version-4.0.0-rc.0/component_usage/Input.mdx",sourceDirName:"component_usage",slug:"/component_usage/Input",permalink:"/docs/component_usage/Input",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.0/component_usage/Input.mdx",tags:[],version:"4.0.0-rc.0",frontMatter:{}},d=[{value:"Interaction methods",id:"interaction-methods",children:[],level:3},{value:"Calling methods on Input",id:"calling-methods-on-input",children:[],level:3}],m={toc:d};function s(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"interaction-methods"},"Interaction methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"method"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"focus"),(0,l.kt)("td",{parentName:"tr",align:null},"Focuses the Input")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blur"),(0,l.kt)("td",{parentName:"tr",align:null},"Removes focus from the Input")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clear"),(0,l.kt)("td",{parentName:"tr",align:null},"Clears the text in the Input")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isFocused"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," if the Input is focused")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setNativeProps"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets props directly on the react native component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shake"),(0,l.kt)("td",{parentName:"tr",align:null},"Shakes the input for error feedback")))),(0,l.kt)("h3",{id:"calling-methods-on-input"},"Calling methods on Input"),(0,l.kt)("p",null,"Store a reference to the Input in your component by using the ref prop\nprovided by React\n(",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"see docs"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const input = React.createRef();\n\n<Input\n  ref={input}\n  ...\n/>\n")),(0,l.kt)("p",null,"You can then use the Input methods like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"input.current.focus();\ninput.current.blur();\ninput.current.clear();\ninput.current.isFocused();\ninput.current.setNativeProps({ value: 'hello' });\ninput.current.shake();\n")),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE Input","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20Text%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Input%2C%20Icon%20%7D%20from%20'react-native-elements'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20placeholder%3D'BASIC%20INPUT'%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20placeholder%3D'INPUT%20WITH%20ICON'%0A%20%20%20%20%20%20leftIcon%3D%7B%7B%20type%3A%20'font-awesome'%2C%20name%3A%20'chevron-left'%20%7D%7D%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20placeholder%3D'INPUT%20WITH%20CUSTOM%20ICON'%0A%20%20%20%20%20%20leftIcon%3D%7B%0A%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20name%3D'user'%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B24%7D%0A%20%20%20%20%20%20%20%20%20%20color%3D'black'%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%2F%3E%0A%0A%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20placeholder%3D%22Comment%22%0A%20%20%20%20%20%20leftIcon%3D%7B%7B%20type%3A%20'font-awesome'%2C%20name%3A%20'comment'%20%7D%7D%0A%20%20%20%20%20%20onChangeText%3D%7Bvalue%20%3D%3E%20this.setState(%7B%20comment%3A%20value%20%7D)%7D%0A%20%20%20%20%20%20%2F%3E%0A%0A%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20placeholder%3D'INPUT%20WITH%20ERROR%20MESSAGE'%0A%20%20%20%20%20%20errorStyle%3D%7B%7B%20color%3A%20'red'%20%7D%7D%0A%20%20%20%20%20%20errorMessage%3D'ENTER%20A%20VALID%20ERROR%20HERE'%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3CInput%20placeholder%3D%22Password%22%20secureTextEntry%3D%7Btrue%7D%20%2F%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}s.isMDXComponent=!0},1812:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>p,contentTitle:()=>u,metadata:()=>d,toc:()=>m,default:()=>c});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=(n(9877),n(58215),n(34738),n(25268)),i=["components"],p={id:"input",title:"Input"},u=void 0,d={unversionedId:"components/input",id:"version-4.0.0-rc.0/components/input",title:"Input",description:"Usage",source:"@site/versioned_docs/version-4.0.0-rc.0/components/Input.mdx",sourceDirName:"components",slug:"/components/input",permalink:"/docs/components/input",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.0/components/Input.mdx",tags:[],version:"4.0.0-rc.0",frontMatter:{id:"input",title:"Input"},sidebar:"docs",previous:{title:"Image",permalink:"/docs/components/image"},next:{title:"LinearProgress",permalink:"/docs/components/linearprogress"}},m=[{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[],level:2}],s={toc:m};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(o.default,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Includes all ",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/textinput#props"},"React Native TextInput"),", ",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props."))),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"InputComponent")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ComponentType<{}>")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"ForwardRefExoticComponent<any>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabled")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"disabledInputStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"errorMessage")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"errorProps")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"errorStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"inputContainerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"inputStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"label")),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"labelProps")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"labelStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"leftIcon")),(0,l.kt)("td",{parentName:"tr",align:null},"IconNode"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"leftIconContainerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"renderErrorMessage")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rightIcon")),(0,l.kt)("td",{parentName:"tr",align:null},"IconNode"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rightIconContainerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}))))))}c.isMDXComponent=!0}}]);