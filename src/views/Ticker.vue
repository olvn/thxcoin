<template>
  <div class="cssmarquee">
        <h1>CCSS..Text Scrolling CSS..Text Scrolling CSS..Text Scrolling CSS..Text Scrolling CSS..Text Scrolling CSS..Text Scrolling CSS..Text Scrolling CSS..Text Scrolling CSS..Text Scrolling CSS..Text Scrolling CSS..Text Scrolling CSS..Text Scrolling CSS..Text Scrolling CSS..Text Scrolling CSS..Text Scrolling SS..Text Scrolling </h1>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.cssmarquee {
 height: 50px;  
 overflow: hidden;
 position: relative;
}
.cssmarquee h1 {
 font-size: 2em;
 color: turquoise;
 position: absolute;
 width: 100%;
 height: 100%;
 margin: 0;
 line-height: 50px;
 text-align: center;    
 transform:translateX(100%);
 animation: cssmarquee 10s linear infinite;
}
  
@keyframes cssmarquee {
 0%   { 
 transform: translateX(0%);       
 }
 100% { 
  
 transform: translateX(-100%); 
 }
}
</style>
