<template>
  <div class="container">
    <div class="best__box">
      <h1 class="best__box-title">Best Selling Coffee</h1>
      <p class="best__box-txt">
        A drink from the ‘My Alowishus’ bottled brews range OR grab one of our
        delicious coffee’s.
      </p>
      <div class="best__lists">
        <div class="best__list">
          <div class="best__list-top">
            <img src="@/assets/images/1.png" alt="" />
            <div class="best__list-titles">
              <p class="best__list-txt">#1 Selling</p>
              <h2 class="best__list-title">Double Espresso</h2>
            </div>
          </div>
          <p class="best__list-text">
            Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis.
          </p>
          <div class="best__list-bottom">
            <p class="best__list-price">$59.99</p>
            <order-btn />
          </div>
        </div>
        <div class="best__list">
          <div class="best__list-top">
            <img src="@/assets/images/2.png" alt="" />
            <div class="best__list-titles">
              <p class="best__list-txt">#2 Selling</p>
              <h2 class="best__list-title">Caramel Frappe</h2>
            </div>
          </div>
          <p class="best__list-text">
            Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis.
          </p>
          <div class="best__list-bottom">
            <p class="best__list-price">$59.99</p>
            <order-btn />
          </div>
        </div>
        <div class="best__list">
          <div class="best__list-top">
            <img src="@/assets/images/3.png" alt="" />
            <div class="best__list-titles">
              <p class="best__list-txt">#3 Selling</p>
              <h2 class="best__list-title">Iced Coffee</h2>
            </div>
          </div>
          <p class="best__list-text">
            Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis.
          </p>
          <div class="best__list-bottom">
            <p class="best__list-price">$59.99</p>
            <order-btn />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderBtn from "../UI/OrderBtn.vue";
export default {
  components: { OrderBtn },
};
</script>

<style>
</style>