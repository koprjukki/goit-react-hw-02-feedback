(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),l=a(3),o=a(4),u=a(5),i=a(7),d=a(6),s=(a(13),function(e){var t=e.good,a=e.bad,n=e.neutral,r=e.total,l=e.positiveFeedbackPercentage;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Good: ",t),c.a.createElement("p",null,"Bad: ",a),c.a.createElement("p",null,"Neutral: ",n),c.a.createElement("p",null,"Total: ",r),c.a.createElement("p",null,"Positive Feedback: ",l,"%"))}),b=function(e){var t=e.props,a=e.handleFeedback;return c.a.createElement("div",null,Object.keys(t).map((function(e){return c.a.createElement("button",{type:"button",value:t[e],name:e,key:e,onClick:a},e)})))},m=function(e){var t=e.title,a=e.children;return c.a.createElement("div",null,c.a.createElement("h1",null,t),a)},k=function(e){var t=e.message;return c.a.createElement("p",null,t)},v=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleFeedback=function(t){var a=t.target.name;e.setState((function(e){return Object(l.a)({},a,e[a]+1)})),e.countTotalFeedback(),e.countPositiveFeedback()},e}return Object(u.a)(a,[{key:"countTotalFeedback",value:function(){var e=this.state;return e.bad+e.good+e.neutral}},{key:"countPositiveFeedback",value:function(){var e=this.state.good,t=this.countTotalFeedback();return Number((e/t*100).toFixed(1))}},{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement(m,{title:"Please, leave your feedback"},c.a.createElement(b,{props:this.state,handleFeedback:this.handleFeedback})),c.a.createElement(m,{title:"Statisctics"},this.countTotalFeedback()>0?c.a.createElement(s,{good:t,bad:n,neutral:a,total:this.countTotalFeedback(),positiveFeedbackPercentage:this.countPositiveFeedback()}):c.a.createElement(k,{message:"No feedback given :("}))))}}]),a}(n.Component);Object(r.render)(c.a.createElement(v,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.8677e13f.chunk.js.map