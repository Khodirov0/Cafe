<template>
  <button class="subscribe-btn">Subscribe</button>
</template>

  

<style lang="scss" scoped>
.subscribe-btn {
  max-width: max-content;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.6;
  padding: 20px 40px;
  color: white;
  border: none;
  background: #1b1b1d;
  border-radius: 126px;
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