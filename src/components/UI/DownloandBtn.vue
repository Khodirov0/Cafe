<template>
  <button class="download-btn">Download App</button>
</template>


<style lang="scss" scoped>
.download-btn {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
  padding: 20px 40px;
  color: white;
  border: none;
  background: #1b1b1d;
  box-shadow: 0px 30px 60px 0px #a3a8b226;
  border-radius: 63px;
  text-transform: uppercase;
  cursor: pointer;

    @media (max-width: 1200px) {
    font-size: 16px;
    padding: 12px 25px;
  }

  @media (max-width: 992px) {
    font-size: 12px;
    padding: 10px 20px;
  }
}
</style>