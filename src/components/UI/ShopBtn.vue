<template>
  <a class="shop-btn">Shop Coffee</a>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.shop-btn {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
  color: #1b1b1d;
  border-bottom: 1px solid #1b1b1d;
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