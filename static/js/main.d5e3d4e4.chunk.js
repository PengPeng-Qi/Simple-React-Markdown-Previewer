(this.webpackJsonpsimple_react_markdown_previewer=this.webpackJsonpsimple_react_markdown_previewer||[]).push([[0],{21:function(e,n,t){},23:function(e,n,t){},24:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t(7),o=t.n(a),i=t(2),c=t(3),s=t(6),d=t(5),u=t(4),l=function(e){return{type:"changeText",data:e}},h=(t(21),t(11)),f=t.n(h),b=t(1),j=function(e){Object(s.a)(t,e);var n=Object(d.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("div",{id:"preview",dangerouslySetInnerHTML:{__html:f()(this.props.data)}})})}}]),t}(r.Component),p=Object(u.b)((function(e){return{data:e}}),{EditorAction:l})(j),v=(t(23),function(e){Object(s.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).changeText=function(){e.props.EditorAction(e.Node.value)},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.Node.value=this.props.data}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{children:Object(b.jsx)("textarea",{id:"editor",onChange:this.changeText,ref:function(n){return e.Node=n}})})}}]),t}(r.Component)),O=Object(u.b)((function(e){return{data:e}}),{EditorAction:l})(v),m=(t(24),function(e){Object(s.a)(t,e);var n=Object(d.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return Object(b.jsxs)("div",{id:"Father",children:[Object(b.jsx)("h2",{children:"Markdown \u7f16\u8f91\u5668"}),Object(b.jsx)(O,{}),Object(b.jsx)(p,{})]})}}]),t}(r.Component)),g=t(12),w="\n  # Welcome to my React Markdown Previewer!\n\n  ## This is a sub-heading...\n  ### And here's some other cool stuff:\n\n  Heres some code, `<div ></div> `, between 2 backticks.\n\n  ```\n      // this is multi-line code:\n\n      function anotherExample(firstLine, lastLine) {\n        if (firstLine == '```' && lastLine == '```') {\n          return multiLineCode;\n        }\n      }\n  ```\n\n  You can also make text **bold**... whoa!\n  Or _italic_.\n  Or... wait for it... **_both!_**\n  And feel free to go crazy ~~crossing stuff out~~.\n\n  There's also [links](https://www.freecodecamp.org), and\n  > Block Quotes!\n\n  And if you want to get really crazy, even tables:\n\n  Wild Header | Crazy Header | Another Header?\n  ------------ | ------------- | -------------\n  Your content can | be here, and it | can be here....\n  And here. | Okay. | I think we get it.\n\n  - And of course there are lists.\n    - Some are bulleted.\n      - With different indentation levels.\n          - That look like this.\n\n\n  1. And there are numbered lists too.\n  1. Use just 1s if you want!\n  1. And last but not least, let's not forget embedded images:\n\n  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n  ";var y=Object(g.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.data;switch(t){case"changeText":return r;default:return e}}));o.a.render(Object(b.jsx)(u.a,{store:y,children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.d5e3d4e4.chunk.js.map