import{O as l,e as i}from"./chunk-LI7Y43MX.js";var u=(()=>{class o{constructor(){this.loadingSubject=new i(!1),this.loading=this.loadingSubject.asObservable(),this.routeSubject=new i(""),this.currentRoute=this.routeSubject.asObservable(),this.time=Date.now(),this.success=!0,this.toastTitle="Place Holder Title",this.toastContent="Place Holder Content"}LoadingOn(){this.loadingSubject.next(!0)}LoadingOff(t=null,e){this.loadingSubject.next(!1),t&&e&&setTimeout(()=>{e&&e.forEach(n=>{t.addClass(n.nativeElement,"grow")});let a=document.getElementById("app-loading");a&&(a.classList.add("fade-out"),setTimeout(()=>a.remove(),500))},275)}setRoute(t=""){this.routeSubject.next(t)}Toast(t,e,a){this.success=t,this.toastTitle=e,this.toastContent=a;let n=new Date,c=document.getElementById("toast-container"),s=document.createElement("div");if(s.className=this.success?"toast show text-bg-success":"toast show text-bg-danger",s.innerHTML=`
          <div class="toast-header">
            <span class="rounded me-2" style="width: 10px;height: 10px;"></span>
            <strong class="me-auto">${this.toastTitle}</strong>
            <small>${n.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1})}</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body text-light" *ngIf="state.toastContent != ''">
            ${this.toastContent}
          </div>
      `,!c){console.error("Toast container not found!");return}c.appendChild(s),new window.bootstrap.Toast(s,{delay:5e3}).show(),s.addEventListener("hidden.bs.toast",function(){s.remove()})}handlePageLoad(){}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275prov=l({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();export{u as a};
