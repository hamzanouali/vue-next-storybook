import imageFile from '../static/images/Imagechat-avatar.jpg'
import Chat from './Chat.vue'

export default {
  title: 'Components/Chat',
  component: Chat,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [
    () => ({
      template:
        '<div class="w-100 d-flex justify-content-center align-content-center" style="background: #FAEFE3; padding: 6rem 0;"><div style="max-width: 375px; width: 100%;"><story /></div></div>',
    }),
  ],
}

const Template = (args) => ({
  props: Object.keys(args),
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
  template: `<Chat :toggle="dataToggle" v-bind="$props" @close="dataToggle = false" />`,
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
