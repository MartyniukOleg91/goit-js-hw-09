function e(e,t){const r=Math.random()>.3;let n={position:e,delay:t};return new Promise(((e,t)=>{r&&e(n),t(n)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();let r=Number(t.currentTarget.delay.value),n=Number(t.currentTarget.step.value),o=Number(t.currentTarget.amount.value);for(let t=1;t<=o;t+=1)e(t,r).then((({position:e,delay:t})=>{setTimeout((()=>{Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)}),t)})).catch((({position:e,delay:t})=>{setTimeout((()=>{Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}),t)})),r+=n}));
//# sourceMappingURL=03-promises.6a06b0d7.js.map
