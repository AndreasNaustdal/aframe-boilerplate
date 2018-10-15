document.addEventListener("keydown", event => {
  const keyName = event.key;
  // console.log("keydown event\n\n" + "key: " + keyName);
  if (keyName === "z") {
    console.log("hey");
    var el = document.querySelector("#plast");
    el.body.applyImpulse(
      /* impulse */ new CANNON.Vec3(0, 0, 10),
      /* world position */ new CANNON.Vec3().copy(
        el.getComputedAttribute("position")
      )
    );
  }

  if (keyName === "Escape") window.location.reload(false);
});
