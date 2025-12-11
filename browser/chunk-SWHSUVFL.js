import{S as d,g as c}from"./chunk-TPFRW3YD.js";var h=(()=>{let t=class t{constructor(){this.loadingSubject=new c(!1),this.loading=this.loadingSubject.asObservable(),this.routeSubject=new c(""),this.currentRoute=this.routeSubject.asObservable(),this.time=Date.now(),this.success=!0,this.toastTitle="Place Holder Title",this.toastContent="Place Holder Content"}LoadingOn(){this.loadingSubject.next(!0)}LoadingOff(e=null,s){this.loadingSubject.next(!1),e&&s&&setTimeout(()=>{s&&s.forEach(i=>{e.addClass(i.nativeElement,"grow")});let a=document.getElementById("app-loading");a&&(a.classList.add("fade-out"),setTimeout(()=>a.remove(),500))},275)}setRoute(e=""){this.routeSubject.next(e)}Toast(e,s,a){this.success=e,this.toastTitle=s,this.toastContent=a;let i=new Date,l=document.getElementById("toast-container"),o=document.createElement("div");if(o.className=this.success?"toast show text-bg-success":"toast show text-bg-danger",o.innerHTML=`
          <div class="toast-header">
            <span class="rounded me-2" style="width: 10px;height: 10px;"></span>
            <strong class="me-auto">${this.toastTitle}</strong>
            <small>${i.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1})}</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body text-light" *ngIf="state.toastContent != ''">
            ${this.toastContent}
          </div>
      `,!l){console.error("Toast container not found!");return}l.appendChild(o),new window.bootstrap.Toast(o,{delay:5e3}).show(),o.addEventListener("hidden.bs.toast",function(){o.remove()})}handlePageLoad(){}};t.\u0275fac=function(s){return new(s||t)},t.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})();export{h as a};
