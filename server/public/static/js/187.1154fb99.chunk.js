"use strict";(self.webpackChunkfacebook_clone_app_react_client=self.webpackChunkfacebook_clone_app_react_client||[]).push([[187],{4589:function(e,t,n){var o=n(7462),r=n(5987),i=n(2791),a=(n(2007),n(8182)),s=n(8317),c=n(6706),l=i.forwardRef((function(e,t){var n=e.children,s=e.classes,l=e.className,p=e.focusVisibleClassName,d=(0,r.Z)(e,["children","classes","className","focusVisibleClassName"]);return i.createElement(c.Z,(0,o.Z)({className:(0,a.Z)(s.root,l),focusVisibleClassName:(0,a.Z)(p,s.focusVisible),ref:t},d),n,i.createElement("span",{className:s.focusHighlight}))}));t.Z=(0,s.Z)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(l)},4697:function(e,t,n){var o=n(7462),r=n(5987),i=n(2791),a=(n(2007),n(8182)),s=n(8317),c=i.forwardRef((function(e,t){var n=e.disableSpacing,s=void 0!==n&&n,c=e.classes,l=e.className,p=(0,r.Z)(e,["disableSpacing","classes","className"]);return i.createElement("div",(0,o.Z)({className:(0,a.Z)(c.root,l,!s&&c.spacing),ref:t},p))}));t.Z=(0,s.Z)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(c)},1205:function(e,t,n){n.d(t,{ZP:function(){return C}});var o=n(7462),r=n(5987),i=n(2791),a=(n(2007),n(8182)),s=n(6881),c=n(5221),l=n(8317),p=n(4164),d=n(503),f=n(6752),u=n(9806),m=n(3364),h=n(812),g=n(6043);function v(e,t){var n=function(e,t){var n,o=t.getBoundingClientRect();if(t.fakeTransform)n=t.fakeTransform;else{var r=window.getComputedStyle(t);n=r.getPropertyValue("-webkit-transform")||r.getPropertyValue("transform")}var i=0,a=0;if(n&&"none"!==n&&"string"===typeof n){var s=n.split("(")[1].split(")")[0].split(",");i=parseInt(s[4],10),a=parseInt(s[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(").concat(i-o.left,"px)"):"right"===e?"translateX(-".concat(o.left+o.width-i,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(").concat(a-o.top,"px)"):"translateY(-".concat(o.top+o.height-a,"px)")}(e,t);n&&(t.style.webkitTransform=n,t.style.transform=n)}var Z={enter:h.x9.enteringScreen,exit:h.x9.leavingScreen},x=i.forwardRef((function(e,t){var n=e.children,a=e.direction,s=void 0===a?"down":a,c=e.in,l=e.onEnter,h=e.onEntered,x=e.onEntering,b=e.onExit,k=e.onExited,E=e.onExiting,w=e.style,y=e.timeout,C=void 0===y?Z:y,N=e.TransitionComponent,P=void 0===N?f.ZP:N,A=(0,r.Z)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),T=(0,m.Z)(),S=i.useRef(null),R=i.useCallback((function(e){S.current=p.findDOMNode(e)}),[]),D=(0,u.Z)(n.ref,R),B=(0,u.Z)(D,t),V=function(e){return function(t){e&&(void 0===t?e(S.current):e(S.current,t))}},_=V((function(e,t){v(s,e),(0,g.n)(e),l&&l(e,t)})),H=V((function(e,t){var n=(0,g.C)({timeout:C,style:w},{mode:"enter"});e.style.webkitTransition=T.transitions.create("-webkit-transform",(0,o.Z)({},n,{easing:T.transitions.easing.easeOut})),e.style.transition=T.transitions.create("transform",(0,o.Z)({},n,{easing:T.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",x&&x(e,t)})),L=V(h),M=V(E),z=V((function(e){var t=(0,g.C)({timeout:C,style:w},{mode:"exit"});e.style.webkitTransition=T.transitions.create("-webkit-transform",(0,o.Z)({},t,{easing:T.transitions.easing.sharp})),e.style.transition=T.transitions.create("transform",(0,o.Z)({},t,{easing:T.transitions.easing.sharp})),v(s,e),b&&b(e)})),O=V((function(e){e.style.webkitTransition="",e.style.transition="",k&&k(e)})),I=i.useCallback((function(){S.current&&v(s,S.current)}),[s]);return i.useEffect((function(){if(!c&&"down"!==s&&"right"!==s){var e=(0,d.Z)((function(){S.current&&v(s,S.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[s,c]),i.useEffect((function(){c||I()}),[c,I]),i.createElement(P,(0,o.Z)({nodeRef:S,onEnter:_,onEntered:L,onEntering:H,onExit:z,onExited:O,onExiting:M,appear:!0,in:c,timeout:C},A),(function(e,t){return i.cloneElement(n,(0,o.Z)({ref:B,style:(0,o.Z)({visibility:"exited"!==e||c?void 0:"hidden"},w,n.props.style)},t))}))})),b=n(9526),k=n(1122),E={left:"right",right:"left",top:"down",bottom:"up"};var w={enter:h.x9.enteringScreen,exit:h.x9.leavingScreen},y=i.forwardRef((function(e,t){var n=e.anchor,l=void 0===n?"left":n,p=e.BackdropProps,d=e.children,f=e.classes,u=e.className,h=e.elevation,g=void 0===h?16:h,v=e.ModalProps,Z=(v=void 0===v?{}:v).BackdropProps,y=(0,r.Z)(v,["BackdropProps"]),C=e.onClose,N=e.open,P=void 0!==N&&N,A=e.PaperProps,T=void 0===A?{}:A,S=e.SlideProps,R=e.TransitionComponent,D=void 0===R?x:R,B=e.transitionDuration,V=void 0===B?w:B,_=e.variant,H=void 0===_?"temporary":_,L=(0,r.Z)(e,["anchor","BackdropProps","children","classes","className","elevation","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"]),M=(0,m.Z)(),z=i.useRef(!1);i.useEffect((function(){z.current=!0}),[]);var O=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?E[t]:t}(M,l),I=i.createElement(b.Z,(0,o.Z)({elevation:"temporary"===H?g:0,square:!0},T,{className:(0,a.Z)(f.paper,f["paperAnchor".concat((0,k.Z)(O))],T.className,"temporary"!==H&&f["paperAnchorDocked".concat((0,k.Z)(O))])}),d);if("permanent"===H)return i.createElement("div",(0,o.Z)({className:(0,a.Z)(f.root,f.docked,u),ref:t},L),I);var Y=i.createElement(D,(0,o.Z)({in:P,direction:E[O],timeout:V,appear:z.current},S),I);return"persistent"===H?i.createElement("div",(0,o.Z)({className:(0,a.Z)(f.root,f.docked,u),ref:t},L),Y):i.createElement(s.Z,(0,o.Z)({BackdropProps:(0,o.Z)({},p,Z,{transitionDuration:V}),BackdropComponent:c.Z,className:(0,a.Z)(f.root,f.modal,u),open:P,onClose:C,ref:t},L,y),Y)})),C=(0,l.Z)((function(e){return{root:{},docked:{flex:"0 0 auto"},paper:{overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},paperAnchorLeft:{left:0,right:"auto"},paperAnchorRight:{left:"auto",right:0},paperAnchorTop:{top:0,left:0,bottom:"auto",right:0,height:"auto",maxHeight:"100%"},paperAnchorBottom:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},paperAnchorDockedLeft:{borderRight:"1px solid ".concat(e.palette.divider)},paperAnchorDockedTop:{borderBottom:"1px solid ".concat(e.palette.divider)},paperAnchorDockedRight:{borderLeft:"1px solid ".concat(e.palette.divider)},paperAnchorDockedBottom:{borderTop:"1px solid ".concat(e.palette.divider)},modal:{}}}),{name:"MuiDrawer",flip:!1})(y)},5919:function(e,t,n){var o=n(2791),r=n(1997);t.Z=(0,r.Z)(o.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search")}}]);
//# sourceMappingURL=187.1154fb99.chunk.js.map