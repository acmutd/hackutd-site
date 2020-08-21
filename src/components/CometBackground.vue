<template>
  <div id="container" class="star_container">
    <div v-for="i in 6" :key="i" class="shooting_star" />
  </div>
</template>

<style lang="scss">
$shooting-time: 3000ms;

.star_container {
  width:200%;
  height:200%;
  position:fixed;
  z-index:-20;
  top:-50%;
  left:-50%;
  transform: rotateZ(45deg);
}

.shooting_star {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 2px;
  background: linear-gradient(-45deg, rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
  border-radius: 999px;
  filter: drop-shadow(0 0 6px rgba(105, 155, 255, 1));
  animation:
    tail $shooting-time ease-in-out infinite,
    shooting $shooting-time ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    right: 0;
    height: 2px;
    background: linear-gradient(-45deg, rgba(0, 0, 255, 0), rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
    transform: translateX(50%) rotateZ(45deg);
    border-radius: 100%;
    animation: shining $shooting-time ease-in-out infinite;
  }

  &::after {
    @extend .shooting_star::before;
    transform: translateX(50%) rotateZ(-45deg);
  }

  &:nth-child(1) {
    $delay: 5000ms;
    top: 58%;
    left: 46%;
    
    animation-delay: $delay;
    &::before,
    &::after {
      animation-delay: $delay;
    }
  }
  &:nth-child(2) {
    $delay: 4000ms;
    top: 23%;
    left: 59%;
    
    animation-delay: $delay;
    &::before,
    &::after {
      animation-delay: $delay;
    }
  }
  &:nth-child(3) {
    $delay: 5500ms;
    top: 76%;
    left: 33%;
    
    animation-delay: $delay;
    &::before,
    &::after {
      animation-delay: $delay;
    }
  }
  &:nth-child(4) {
    $delay: 2000ms;
    top: 50%;
    left: 35%;
    
    animation-delay: $delay;
    &::before,
    &::after {
      animation-delay: $delay;
    }
  }
  &:nth-child(5) {
    $delay: 4500ms;
    top: 45%;
    left: 60%;
    
    animation-delay: $delay;
    opacity: .5;
    &::before,
    &::after {
      animation-delay: $delay;
    }
  }
  &:nth-child(6) {
    $delay: 3000ms;
    top: 86%;
    left: 40%;
    
    animation-delay: $delay;
    opacity: .5;
    &::before,
    &::after {
      animation-delay: $delay;
    }
  }
}

@keyframes tail {
  0% {
    width: 0;
  }
  
  30% {
    width: 100px;
  }
  
  100% {
    width: 0;
  }
}

@keyframes shining {
  0% {
    width: 0;
  }
  
  50% {
    width: 30px;
  }
  
  100% {
    width: 0;
  }
}

@keyframes shooting {
  0% {
    transform: translateX(0);
  }
  
  100% {
    transform: translateX(300px);
  }
}

@keyframes sky {
  0% {
    transform: rotate(45deg);
  }
  
  100% {
    transform: rotate(45 + 360deg);
  }
}

</style>
