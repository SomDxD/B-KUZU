"use strict";(self.webpackChunkfacebook_clone_app_react_client=self.webpackChunkfacebook_clone_app_react_client||[]).push([[88],{9856:function(e,n,t){t.d(n,{Y:function(){return a}});var o=t(2791),r=o.createContext();function a(){return o.useContext(r)}n.Z=r},4326:function(e,n,t){function o(e){var n=e.props,t=e.states,o=e.muiFormControl;return t.reduce((function(e,t){return e[t]=n[t],o&&"undefined"===typeof n[t]&&(e[t]=o[t]),e}),{})}t.d(n,{Z:function(){return o}})},5088:function(e,n,t){t.d(n,{Z:function(){return x}});var o=t(5987),r=t(7462),a=t(2929),i=t(2791),l=(t(2007),t(8182)),u=t(4326),d=t(9856),c=t(8317),s=t(1122),f=t(9806),p=t(503);function m(e,n){return parseInt(e[n],10)||0}var h="undefined"!==typeof window?i.useLayoutEffect:i.useEffect,b={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},w=i.forwardRef((function(e,n){var t=e.onChange,a=e.rows,l=e.rowsMax,u=e.rowsMin,d=e.maxRows,c=e.minRows,s=void 0===c?1:c,w=e.style,v=e.value,g=(0,o.Z)(e,["onChange","rows","rowsMax","rowsMin","maxRows","minRows","style","value"]),y=d||l,x=a||u||s,C=i.useRef(null!=v).current,Z=i.useRef(null),k=(0,f.Z)(n,Z),E=i.useRef(null),R=i.useRef(0),S=i.useState({}),M=S[0],A=S[1],F=i.useCallback((function(){var n=Z.current,t=window.getComputedStyle(n),o=E.current;o.style.width=t.width,o.value=n.value||e.placeholder||"x","\n"===o.value.slice(-1)&&(o.value+=" ");var r=t["box-sizing"],a=m(t,"padding-bottom")+m(t,"padding-top"),i=m(t,"border-bottom-width")+m(t,"border-top-width"),l=o.scrollHeight-a;o.value="x";var u=o.scrollHeight-a,d=l;x&&(d=Math.max(Number(x)*u,d)),y&&(d=Math.min(Number(y)*u,d));var c=(d=Math.max(d,u))+("border-box"===r?a+i:0),s=Math.abs(d-l)<=1;A((function(e){return R.current<20&&(c>0&&Math.abs((e.outerHeightStyle||0)-c)>1||e.overflow!==s)?(R.current+=1,{overflow:s,outerHeightStyle:c}):e}))}),[y,x,e.placeholder]);i.useEffect((function(){var e=(0,p.Z)((function(){R.current=0,F()}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[F]),h((function(){F()})),i.useEffect((function(){R.current=0}),[v]);return i.createElement(i.Fragment,null,i.createElement("textarea",(0,r.Z)({value:v,onChange:function(e){R.current=0,C||F(),t&&t(e)},ref:k,rows:x,style:(0,r.Z)({height:M.outerHeightStyle,overflow:M.overflow?"hidden":null},w)},g)),i.createElement("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:E,tabIndex:-1,style:(0,r.Z)({},b,w)}))})),v=t(7904),g="undefined"===typeof window?i.useEffect:i.useLayoutEffect,y=i.forwardRef((function(e,n){var t=e["aria-describedby"],c=e.autoComplete,p=e.autoFocus,m=e.classes,h=e.className,b=(e.color,e.defaultValue),y=e.disabled,x=e.endAdornment,C=(e.error,e.fullWidth),Z=void 0!==C&&C,k=e.id,E=e.inputComponent,R=void 0===E?"input":E,S=e.inputProps,M=void 0===S?{}:S,A=e.inputRef,F=(e.margin,e.multiline),N=void 0!==F&&F,z=e.name,B=e.onBlur,D=e.onChange,H=e.onClick,L=e.onFocus,_=e.onKeyDown,K=e.onKeyUp,T=e.placeholder,W=e.readOnly,V=e.renderSuffix,I=e.rows,O=e.rowsMax,P=e.rowsMin,$=e.maxRows,q=e.minRows,U=e.startAdornment,Y=e.type,j=void 0===Y?"text":Y,G=e.value,J=(0,o.Z)(e,["aria-describedby","autoComplete","autoFocus","classes","className","color","defaultValue","disabled","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","rowsMax","rowsMin","maxRows","minRows","startAdornment","type","value"]),Q=null!=M.value?M.value:G,X=i.useRef(null!=Q).current,ee=i.useRef(),ne=i.useCallback((function(e){0}),[]),te=(0,f.Z)(M.ref,ne),oe=(0,f.Z)(A,te),re=(0,f.Z)(ee,oe),ae=i.useState(!1),ie=ae[0],le=ae[1],ue=(0,d.Y)();var de=(0,u.Z)({props:e,muiFormControl:ue,states:["color","disabled","error","hiddenLabel","margin","required","filled"]});de.focused=ue?ue.focused:ie,i.useEffect((function(){!ue&&y&&ie&&(le(!1),B&&B())}),[ue,y,ie,B]);var ce=ue&&ue.onFilled,se=ue&&ue.onEmpty,fe=i.useCallback((function(e){(0,v.vd)(e)?ce&&ce():se&&se()}),[ce,se]);g((function(){X&&fe({value:Q})}),[Q,fe,X]);i.useEffect((function(){fe(ee.current)}),[]);var pe=R,me=(0,r.Z)({},M,{ref:re});"string"!==typeof pe?me=(0,r.Z)({inputRef:re,type:j},me,{ref:null}):N?!I||$||q||O||P?(me=(0,r.Z)({minRows:I||q,rowsMax:O,maxRows:$},me),pe=w):pe="textarea":me=(0,r.Z)({type:j},me);return i.useEffect((function(){ue&&ue.setAdornedStart(Boolean(U))}),[ue,U]),i.createElement("div",(0,r.Z)({className:(0,l.Z)(m.root,m["color".concat((0,s.Z)(de.color||"primary"))],h,de.disabled&&m.disabled,de.error&&m.error,Z&&m.fullWidth,de.focused&&m.focused,ue&&m.formControl,N&&m.multiline,U&&m.adornedStart,x&&m.adornedEnd,"dense"===de.margin&&m.marginDense),onClick:function(e){ee.current&&e.currentTarget===e.target&&ee.current.focus(),H&&H(e)},ref:n},J),U,i.createElement(d.Z.Provider,{value:null},i.createElement(pe,(0,r.Z)({"aria-invalid":de.error,"aria-describedby":t,autoComplete:c,autoFocus:p,defaultValue:b,disabled:de.disabled,id:k,onAnimationStart:function(e){fe("mui-auto-fill-cancel"===e.animationName?ee.current:{value:"x"})},name:z,placeholder:T,readOnly:W,required:de.required,rows:I,value:Q,onKeyDown:_,onKeyUp:K},me,{className:(0,l.Z)(m.input,M.className,de.disabled&&m.disabled,N&&m.inputMultiline,de.hiddenLabel&&m.inputHiddenLabel,U&&m.inputAdornedStart,x&&m.inputAdornedEnd,"search"===j&&m.inputTypeSearch,"dense"===de.margin&&m.inputMarginDense),onBlur:function(e){B&&B(e),M.onBlur&&M.onBlur(e),ue&&ue.onBlur?ue.onBlur(e):le(!1)},onChange:function(e){if(!X){var n=e.target||ee.current;if(null==n)throw new Error((0,a.Z)(1));fe({value:n.value})}for(var t=arguments.length,o=new Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];M.onChange&&M.onChange.apply(M,[e].concat(o)),D&&D.apply(void 0,[e].concat(o))},onFocus:function(e){de.disabled?e.stopPropagation():(L&&L(e),M.onFocus&&M.onFocus(e),ue&&ue.onFocus?ue.onFocus(e):le(!0))}}))),x,V?V((0,r.Z)({},de,{startAdornment:U})):null)})),x=(0,c.Z)((function(e){var n="light"===e.palette.type,t={color:"currentColor",opacity:n?.42:.5,transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})},o={opacity:"0 !important"},a={opacity:n?.42:.5};return{"@global":{"@keyframes mui-auto-fill":{},"@keyframes mui-auto-fill-cancel":{}},root:(0,r.Z)({},e.typography.body1,{color:e.palette.text.primary,lineHeight:"1.1876em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center","&$disabled":{color:e.palette.text.disabled,cursor:"default"}}),formControl:{},focused:{},disabled:{},adornedStart:{},adornedEnd:{},error:{},marginDense:{},multiline:{padding:"".concat(6,"px 0 ").concat(7,"px"),"&$marginDense":{paddingTop:3}},colorSecondary:{},fullWidth:{width:"100%"},input:{font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"".concat(6,"px 0 ").concat(7,"px"),border:0,boxSizing:"content-box",background:"none",height:"1.1876em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":t,"&::-moz-placeholder":t,"&:-ms-input-placeholder":t,"&::-ms-input-placeholder":t,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{"-webkit-appearance":"none"},"label[data-shrink=false] + $formControl &":{"&::-webkit-input-placeholder":o,"&::-moz-placeholder":o,"&:-ms-input-placeholder":o,"&::-ms-input-placeholder":o,"&:focus::-webkit-input-placeholder":a,"&:focus::-moz-placeholder":a,"&:focus:-ms-input-placeholder":a,"&:focus::-ms-input-placeholder":a},"&$disabled":{opacity:1},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},inputMarginDense:{paddingTop:3},inputMultiline:{height:"auto",resize:"none",padding:0},inputTypeSearch:{"-moz-appearance":"textfield","-webkit-appearance":"textfield"},inputAdornedStart:{},inputAdornedEnd:{},inputHiddenLabel:{}}}),{name:"MuiInputBase"})(y)},7904:function(e,n,t){function o(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function r(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(o(e.value)&&""!==e.value||n&&o(e.defaultValue)&&""!==e.defaultValue)}function a(e){return e.startAdornment}t.d(n,{B7:function(){return a},vd:function(){return r}})}}]);
//# sourceMappingURL=88.c6b679ba.chunk.js.map