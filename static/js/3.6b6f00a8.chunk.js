(this.webpackJsonpmy_social_network=this.webpackJsonpmy_social_network||[]).push([[3],{293:function(t,s,e){t.exports={avatar:"ProfileInfo_avatar__3HJco",descriptionBlock:"ProfileInfo_descriptionBlock__Zh1WA"}},294:function(t,s,e){t.exports={postsBlock:"MyPosts_postsBlock__VkIMX",posts:"MyPosts_posts__2LCKN"}},295:function(t,s,e){t.exports={item:"Post_item__VpuLr"}},297:function(t,s,e){"use strict";e.r(s);var o=e(3),c=e(37),n=e(38),a=e(41),r=e(40),i=e(0),u=e.n(i),p=e(293),j=e.n(p),l=e(107),d=e(45),b=e(130),h=e(1),O=function(t){var s=Object(i.useState)(!1),e=Object(b.a)(s,2),o=e[0],c=e[1],n=Object(i.useState)(t.status),a=Object(b.a)(n,2),r=a[0],u=a[1];Object(i.useEffect)((function(){u(t.status)}),[t.status]);var p=function(){c(!1),t.updateStatus(r)};return Object(h.jsxs)("div",{children:[!o&&Object(h.jsx)("div",{children:Object(h.jsx)("span",{onDoubleClick:function(){return c(!0)},children:t.status||"---"})}),o&&Object(h.jsx)("div",{children:Object(h.jsx)("input",{onBlur:p,onKeyPress:function(t){"Enter"===t.key&&p()},onChange:function(t){u(t.currentTarget.value)},value:r,autoFocus:!0})})]})},f=function(t){var s=t.profile,e=t.status,o=t.updateStatus;return s?Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:"https://s27389.pcdn.co/wp-content/uploads/2019/12/why-network-segmentation-essential-enterprise-1024x440.jpeg",alt:""})}),Object(h.jsxs)("div",{className:j.a.descriptionBlock,children:[Object(h.jsx)("img",{className:j.a.avatar,src:s.photos.large?s.photos.large:l.a,alt:"User avatar"+s.fullName}),Object(h.jsx)(O,{status:e,updateStatus:o})]})]}):Object(h.jsx)(d.a,{})},m=e(97),x=e(294),v=e.n(x),g=e(295),k=e.n(g),P=function(t){return Object(h.jsxs)("div",{className:k.a.posts,children:[Object(h.jsxs)("div",{className:k.a.item,children:[Object(h.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQ4aNPrI7S0ZcOI0gguCobJyLVkc7osIoaQ&usqp=CAU",alt:""}),t.message]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Like"}),Object(h.jsxs)("span",{children:[" ",t.likesCount]})]})]})},_=e(93),S=e(129),y=e(71),N=e(34),C=Object(y.a)(10),I=Object(y.b)(5),w=u.a.memo((function(t){console.log("render Posts");var s=t.posts.map((function(t){return Object(h.jsx)(P,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(h.jsxs)("div",{className:v.a.postsBlock,children:[Object(h.jsx)("h3",{children:"My Posts"}),Object(h.jsx)(A,{onSubmit:function(s){t.addPost(s.post)}}),Object(h.jsx)("div",{className:v.a.posts,children:s})]})})),A=Object(S.a)({form:"postsAddPost"})((function(t){return Object(h.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(h.jsx)("div",{children:Object(h.jsx)(_.a,{name:"post",component:N.b,validate:[y.c,C,I],placeholder:"Enter your thoughts"})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Add Post"})})]})})),B=w,U=e(13),M=Object(U.b)((function(t){return{posts:t.profilePage.posts}}),{addPost:m.a})(B),J=function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)(f,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(h.jsx)(M,{})]})},L=e(11),E=e(9),Q=function(t){Object(a.a)(e,t);var s=Object(r.a)(e);function e(){return Object(c.a)(this,e),s.apply(this,arguments)}return Object(n.a)(e,[{key:"componentDidMount",value:function(){var t=Number(this.props.match.params.userId);t||(t=Number(this.props.authorizedUserId))||this.props.history.push("/login"),this.props.showUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return console.log("render Profile"),Object(h.jsx)(J,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(u.a.Component);s.default=Object(E.compose)(Object(U.b)((function(t){return console.log("mstp ProfileContainer"),{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{showUserProfile:m.d,getStatus:m.c,updateStatus:m.e}),L.f)(Q)}}]);
//# sourceMappingURL=3.6b6f00a8.chunk.js.map