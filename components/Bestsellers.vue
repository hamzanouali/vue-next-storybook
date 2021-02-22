<template>
  <div class="products-card">
    <h3 class="products-card__headline">
      <slot name="headline"></slot>
    </h3>
    <ul class="products-card__ul p-0 list-unstyled">
      <li
        v-for="(product, index) in products"
        :key="index"
        class="products-card__li p-0"
      >
        <router-link to="/" class="products-card__link">
          <div class="products-card__image-container">
            <img
              class="products-card__image"
              :src="product.image"
              :alt="product.alt"
            />
          </div>
          <div class="products-card__info">
            <h4 class="products-card__name">{{ product.name }}</h4>
            <span class="products-card__brand d-inline-block">{{
              product.brand
            }}</span>
            <p class="products-card__price">{{ product.price }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    products: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style scoped>
.products-card {
  background: #ffffff;
  border-radius: 24px;
  padding: 24px;
}

@media (min-width: 414px) {
  .products-card {
    padding: 32px;
  }
}

.products-card__headline {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 132%;
  letter-spacing: 0.25px;
  color: #12121f;
  margin-bottom: 24px;
}

@media (min-width: 414px) {
  .products-card__headline {
    font-size: 24px;
  }
}

.products-card__link {
  display: flex;
  border-radius: 24px;
  padding: 13px 18px;
  transition: 0.2s;
  cursor: pointer;
}

.products-card__link:hover,
.products-card__link:focus {
  background: #fef2ee;
  text-decoration: none;
}

.products-card__info {
  margin-top: 3px;
}

.products-card__image-container {
  display: flex;
}

.products-card__image-container::after {
  content: '';
  width: 20px;
}

@media (min-width: 414px) {
  .products-card__image-container::after {
    width: 24px;
  }
}

.products-card__image {
  width: 54px;
  height: 54px;
}

@media (min-width: 414px) {
  .products-card__image {
    width: 94px;
    height: 94px;
  }
}

.products-card__name {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #fe805c;
  margin-bottom: 0;
}

@media (min-width: 414px) {
  .products-card__name {
    font-size: 14px;
  }
}

.products-card__brand {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.25px;
  color: #afafbd;
}

.products-card__price {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: #12121f;
}
</style>
