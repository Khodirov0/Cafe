<template>
  <button class="gift-btn">
    Buy gift vouchers
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.gift-btn{
font-size: 15px;
font-weight: 500;
line-height: 26px;
padding: 15px 30px;
color: white;
border: none;background: #1B1B1D;
box-shadow: 0px 30px 60px 0px #A3A8B226;
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