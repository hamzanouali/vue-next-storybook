import imageFile1 from '../static/images/image-1.png'
import imageFile2 from '../static/images/image-2.png'
import imageFile3 from '../static/images/image-3.png'

import ProductsCard from './ProductsCard.vue'

export default {
  title: 'Components/ProductsCard',
  component: ProductsCard,
  decorators: [
    () => ({
      template:
        '<div class="w-100 d-flex justify-content-center align-content-center" style="background: #FAEFE3; padding: 6rem 0;"><div style="max-width: 375px; width: 100%;" class="px-3 px-lg-0"><story /></div></div>',
    }),
  ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ProductsCard },
  template: `
    <ProductsCard v-on="$listeners" v-bind="$props">
      <template #headline>Bestsellers</template>
    </ProductsCard>
  `,
})

export const Default = Template.bind({})
Default.args = {
  products: [
    {
      image: imageFile2,
      alt: 'image alt 2',
      name: 'Nike Air Max 270',
      brand: 'Nike',
      price: '$195.80',
    },
    {
      image: imageFile1,
      alt: 'image alt 1',
      name: 'Nike Air Max 90',
      brand: 'Nike',
      price: '$195.80',
    },
    {
      image: imageFile3,
      alt: 'image alt 3',
      name: 'Nike Air Max Plus',
      brand: 'Nike',
      price: '$195.80',
    },
  ],
}
