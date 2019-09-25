

function getElement(e) {
  var element = e.target || e.srcElement;
  idi = element.id


document.getElementById(idi).onmousedown = function(e) {
    this.prevX = e.clientX;
    this.prevY = e.clientY;
    this.mouseDown = true;
  }
  document.getElementById(idi).onmousemove = function(e) {
    if(this.mouseDown) {
        this.style.left = (Number(this.style.left.substring(0, this.style.left.length-2)) + (e.clientX - this.prevX)) + "px";
        this.style.top = (Number(this.style.top.substring(0, this.style.top.length-2)) + (e.clientY - this.prevY)) + "px";
    }
    this.prevX = e.clientX;
    this.prevY = e.clientY;
  }
  document.getElementById(idi).onmouseup = function() {
    this.mouseDown = false;
  }
 
}