<style>

.w3-closenav,
.w3-opennav {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
}



.w3-opennav:hover,
.w3-closenav:hover {
  cursor: pointer;
  opacity: 0.8
}

.w3-sidenav a,
.w3-opennav,
.w3-closenav {
  -webkit-transition: background-color .3s, color .15s, box-shadow .3s, opacity 0.3s;
  transition: background-color .3s, color .15s, box-shadow .3s, opacity 0.3s
}

.w3-sidenav {
  height: 100%;
  width: 200px;
  background-color: #fff;
  position: fixed !important;
  z-index: 1;
  overflow: auto
}

.w3-overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2
}

.w3-sidenav a {
  padding: 4px 2px 4px 16px
}

.w3-sidenav a:hover {
  background-color: #ccc
}

.w3-sidenav a {
  display: block
}

.w3-animate-left{position:relative;-webkit-animation:animateleft 0.4s;animation:animateleft 0.4s}
@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}

.w3-large{font-size:18px!important}
.w3-white{color:#000!important;background-color:#fff!important}

.w3-animate-opacity{-webkit-animation:opac 1.5s;animation:opac 1.5s}
@keyframes opac{from{opacity:0} to{opacity:1}}

</style>
<nav class="w3-sidenav w3-white w3-animate-left" style="display:none;z-index:5">
  <a href="javascript:void(0)" on:click="{w3_close}" class="w3-closenav w3-large">Close &times;</a>
  <a href="#">Link 1</a>		
  <a href="#">Link 2</a>		
  <a href="#">Link 3</a>		
  <a href="#">Link 4</a>		
  <a href="#">Link 5</a>		
</nav>

<div class="w3-overlay w3-animate-opacity" on:click="{w3_close}" style="cursor:pointer"></div>

<div class="w3-container">
  <span class="w3-opennav" on:click="{w3_open}">&#9776;</span>
  <h2>Page content..</h2>
  <p>The w3-overlay class can be used to create an overlay effect, when opening the sidenav. The w3-overlay class adds a black background with a 50% opacity to the "page content" - this effect will "highlight" the side navigation</p>
  <p>Click on the menu icon (&#9776;) to see the effect.</p>
</div>  
     
<script>
function w3_open() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
    document.getElementsByClassName("w3-overlay")[0].style.display = "block";
}
function w3_close() {
    document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
    document.getElementsByClassName("w3-overlay")[0].style.display = "none";
}
</script>