!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var n={};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e};var a=document.querySelector("#datetime-picker"),o=document.querySelector("button[data-start]"),i=document.querySelector(".timer"),u=document.querySelector("span[data-days]"),s=document.querySelector("span[data-hours]"),c=document.querySelector("span[data-minutes]"),l=document.querySelector("span[data-seconds]");o.classList.add("disabled");var d=null;function f(e){return String(e).padStart(2,"0")}var m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:function(e){console.log(e[0]),e[0]<Date.now()?(Notify.failure("Please choose a date in the future"),d=new Date):(o.disabled=!1,o.classList.remove("disabled"),d=e[0])}},v=new(function(){"use strict";function r(){e(t)(this,r),this.isActive=!1,this.timerId=null,o.disabled=!0}return e(n)(r,[{key:"timerStart",value:function(){var e=this;this.isActive||(this.isActive=!0,this.timerId=setInterval((function(){var t,n,r,a,o=Date.now(),m=d-o,v=(t=m,n=6e4,a=24*(r=36e5),{days:f(Math.floor(t/a)),hours:f(Math.floor(t%a/r)),minutes:f(Math.floor(t%a%r/n)),seconds:f(Math.floor(t%a%r%n/1e3))});l.textContent=v.seconds,c.textContent=v.minutes,s.textContent=v.hours,u.textContent=v.days,m<=0&&(e.stop(),i.innerHTML="Time is over!")}),1e3))}},{key:"timerStop",value:function(){clearInterval(this.timerId)}}]),r}());flatpickr(a,m),o.addEventListener("click",(function(){return v.timerStart()}))}();
//# sourceMappingURL=02-timer.d7acc128.js.map
