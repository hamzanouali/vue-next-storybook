import imageFile from '../static/images/Imagechat-avatar.jpg'
import Chat from './Chat.vue'

export default {
  title: 'Components/Chat',
  component: Chat,
  decorators: [
    () => ({
      template:
        '<div class="w-100 d-flex justify-content-center align-content-center" style="background: #FAEFE3; padding: 6rem 0;"><div style="max-width: 375px; width: 100%;" class="px-3 px-lg-0"><story /></div></div>',
    }),
  ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Chat },
  data() {
    return {
      dataToggle: this.toggle,
    }
  },
  watch: {
    toggle(value) {
      this.dataToggle = value
    },
  },
  template: `
    <Chat @close="close" @input="input" @submit="submit" :toggle="dataToggle" v-bind="$props" />
  `,
})

export const Default = Template.bind({})
Default.args = {
  avatarUrl: imageFile,
  avatarAlt: 'Avtar of Caitlin',
  fullName: 'Emily Dougrer',
  jobTitle: 'Developer',
  paragraphe: 'Hi there. We use Boards to share initial goals and ideas.',
  inputPlaceholder: 'Type your message...',
  buttonLabel: 'send',
  toggle: true,
}
