<template>
  <div class="loaderContainer">
    <div class="loadingio-spinner-wedges-494yru1swk7">
      <div class="ldio-93uphqm152d">
        <div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style scoped>
.loaderContainer {
  display: flex;
  align-items: center;
  background-color: rgb(255 255 255 / 80%);
  bottom: 0;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 9;
}

@keyframes ldio-93uphqm152d {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.ldio-93uphqm152d > div > div {
  transform-origin: 100px 100px;
  animation: ldio-93uphqm152d 3.0303030303030303s linear infinite;
  opacity: 0.8;
}
.ldio-93uphqm152d > div > div > div {
  position: absolute;
  left: 30px;
  top: 30px;
  width: 70px;
  height: 70px;
  border-radius: 70px 0 0 0;
  transform-origin: 100px 100px;
}
.ldio-93uphqm152d > div div:nth-child(1) {
  animation-duration: 0.7575757575757576s;
}
.ldio-93uphqm152d > div div:nth-child(1) > div {
  background: #007e95;
  transform: rotate(0deg);
}
.ldio-93uphqm152d > div div:nth-child(2) {
  animation-duration: 1.0101010101010102s;
}
.ldio-93uphqm152d > div div:nth-child(2) > div {
  background: #005f6f;
  transform: rotate(0deg);
}
.ldio-93uphqm152d > div div:nth-child(3) {
  animation-duration: 1.5151515151515151s;
}
.ldio-93uphqm152d > div div:nth-child(3) > div {
  background: #58c2d5;
  transform: rotate(0deg);
}
.ldio-93uphqm152d > div div:nth-child(4) {
  animation-duration: 3.0303030303030303s;
}
.ldio-93uphqm152d > div div:nth-child(4) > div {
  background: #eeeeee;
  transform: rotate(0deg);
}
.loadingio-spinner-wedges-494yru1swk7 {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
}
.ldio-93uphqm152d {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-93uphqm152d div {
  box-sizing: content-box;
}
</style>
