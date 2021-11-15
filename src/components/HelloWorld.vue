<script setup>
import { onMounted } from "@vue/runtime-core";

onMounted(() => {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  ctx.font = "10px";
  ctx.fillStyle = "white";
  ctx.fillText("COLOR", 10, 100);

  function draw(x) {
    ctx.globalCompositeOperation = "source-atop";
    ctx.fillStyle = "#8C5523";

    ctx.fillRect(0, 0, x, 300);
    ctx.globalCompositeOperation = "source-over";
    if (x < 300) {
      setTimeout(function () {
        draw(++x);
      }, 5);
    }
  }
  draw(0)
});
</script>
<template>
  <canvas id="canvas"></canvas>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(#ffc38c, #ff9b40);
}
</style>
