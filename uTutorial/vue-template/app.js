
const app = Vue.createApp({

    template:`
    <article class="message is-primary">
    <div class="message-header">
      <p>Primary</p>
      <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">

      <h3>   {{name}}</h3>
        
        
        
    </div>
  </article>
    `,

    data() {
        return {
            
           
            name:'vinit kumar singh',
            
        }
    }, 


});
app.mount("#app");