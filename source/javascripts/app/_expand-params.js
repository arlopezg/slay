function onParamToggle({ target = {} }) {
  const { parentElement: param } = target.parentElement;

  target.classList.toggle("active");
  toggleVisibility(param.nextElementSibling);
}

function toggleVisibility(el = {}) {
  const isParentLevel = el.classList.contains("param__child1");

  console.log("Sibling:", el);

  if (isParentLevel) {
    // next parent. they're always visible
    return;
  }

  el.classList.toggle("param__child__active");
  toggleVisibility(el.nextElementSibling);
}

window.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll("button.param__toggle");

  Array.from(toggles).forEach((toggle) => {
    toggle.addEventListener("click", onParamToggle);
  });
});
