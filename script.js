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

skipLink.addEventListener("keyup", function (evt) {
  const isEnter = evt.code === "Enter"

  if (isEnter) {
    main.setAttribute("tabindex", 0)
    main.focus()
    skipLink.classList.add("visually-hidden")
    main.removeAttribute("tabindex")
  }
})

// Modal
const modal = document.querySelector(".modal")
const lc = document.querySelector(".modal__open")
const modalClose = document.querySelector(".modal__close")
const modalOverlay = document.querySelector(".modal__overlay")
const modalFocusable = document
  .querySelector(".modal__wrapper")
  .querySelectorAll("input, a, select, button")
const navFocusable = document
  .querySelector(".header__nav")
  .querySelectorAll("input, a, select, button")

const onEscUp = (evt) => {
  const isEsc = evt.code === "Escape"

  if (isEsc) {
    onModalClose()
  }
}
const onModalFocus = (evt) => {
  if (evt.target.classList.contains("fake-focus")) {
    modalFocusable[0].focus()
  }
}

const onModalOpen = () => {
  modal.classList.remove("visually-hidden")
  modal.removeAttribute("tabindex")
  modalFocusable[0].focus()

  document.addEventListener("keyup", onEscUp)
  document.addEventListener("focusin", onModalFocus)
}
const onModalClose = () => {
  modal.classList.add("visually-hidden")
  modal.setAttribute("tabindex", "-1")

  document.removeEventListener("keyup", onEscUp)
  document.removeEventListener("focusin", onModalFocus)
  navFocusable[0].focus()
}

lc.addEventListener("click", onModalOpen)
lc.addEventListener("keyup", function (evt) {
  const isEnter = evt.code === "Enter"

  if (isEnter) {
    onModalOpen()
  }
})
modalOverlay.addEventListener("click", onModalClose)
modalClose.addEventListener("click", onModalClose)
modalClose.addEventListener("keyup", function (evt) {
  const isEnter = evt.code === "Enter"
  evt.preventDefault()

  if (isEnter) {
    onModalClose()
  }
})
