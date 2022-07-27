const footer = document.querySelector(".footer-wrapper")

while(footer.offsetWidth < 2*window.innerWidth){
  const copyElement = document.querySelector(".footer-content").cloneNode({ deep: true })
  footer.appendChild(copyElement)
}