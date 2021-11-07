// SkipLink
const skipLink = document.getElementById("skipToMain")
const main = document.querySelector("main")

const onFirstTabPress = (evt) => {
  const isTab = evt.code === "Tab"
  if (isTab) {
    skipLink.focus()
    skipLink.classList.remove("visually-hidden")
  }

  document.removeEventListener("keyup", onFirstTabPress)
}

document.addEventListener("keyup", onFirstTabPress)

skipLink.addEventListener("keyup", function (event) {
  main.setAttribute("tabindex", 0)
  main.focus()
  skipLink.classList.add("visually-hidden")
})
