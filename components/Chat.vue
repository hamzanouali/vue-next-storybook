<template>
  <div v-show="toggle" ref="chat" class="chat">
    <button class="chat__close-btn btn" @click="$emit('close')">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 13 13"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.3804 1.73433C12.4873 1.62776 12.5722 1.50111 12.6301 1.36167C12.688 1.22222 12.7178 1.07272 12.7178 0.921734C12.7178 0.770746 12.688 0.621243 12.6301 0.481799C12.5722 0.342355 12.4873 0.215712 12.3804 0.109133C12.2948 0.0385816 12.1873 0 12.0764 0C11.9654 0 11.8579 0.0385816 11.7723 0.109133L6.5 5.38435L1.73433 0.619637C1.62776 0.512688 1.50111 0.427829 1.36167 0.369927C1.22222 0.312026 1.07272 0.28222 0.921734 0.28222C0.770746 0.28222 0.621243 0.312026 0.481799 0.369927C0.342355 0.427829 0.215712 0.512688 0.109133 0.619637C0.0385816 0.70524 0 0.812716 0 0.923646C0 1.03458 0.0385816 1.14205 0.109133 1.22765L5.38435 6.5L0.619637 11.2657C0.512688 11.3722 0.427829 11.4989 0.369927 11.6383C0.312026 11.7778 0.28222 11.9273 0.28222 12.0783C0.28222 12.2293 0.312026 12.3788 0.369927 12.5182C0.427829 12.6576 0.512688 12.7843 0.619637 12.8909C0.70524 12.9614 0.812716 13 0.923646 13C1.03458 13 1.14205 12.9614 1.22765 12.8909L6.5 7.61565L11.2657 12.3813C11.3722 12.4883 11.4989 12.5731 11.6383 12.631C11.7778 12.6889 11.9273 12.7187 12.0783 12.7187C12.2293 12.7187 12.3788 12.6889 12.5182 12.631C12.6576 12.5731 12.7843 12.4883 12.8909 12.3813C12.9614 12.2957 13 12.1882 13 12.0773C13 11.9664 12.9614 11.8589 12.8909 11.7733L7.61565 6.5L12.3804 1.73433Z"
          fill="white"
        />
      </svg>
    </button>
    <!-- Header -->
    <div class="chat__header d-flex">
      <span class="chat__img-container">
        <img class="chat__img-avatar" :src="theAvatarUrl" :alt="theAvatarAlt" />
      </span>
      <div class="chat__header-info flex-grow-1">
        <p class="chat__full-name">{{ theFullName }}</p>
        <span class="chat__job-title d-block">{{ theJobTitle }}</span>
      </div>
    </div>
    <!-- Body -->
    <div class="chat__body">
      <p class="chat__paragraph">{{ theParagraphe }}</p>
    </div>
    <!-- Footer -->
    <div class="chat__footer d-flex">
      <input
        v-model="message"
        type="text"
        class="chat__input flex-grow-1"
        :placeholder="theInputPlaceholder"
      />
      <button class="chat__btn btn">{{ theButtonLabel }}</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Chat',

  props: {
    avatarUrl: {
      type: String,
      required: true,
    },
    avatarAlt: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    paragraphe: {
      type: String,
      required: true,
    },
    inputPlaceholder: {
      type: String,
      required: true,
    },
    buttonLabel: {
      type: String,
      required: true,
    },
    toggle: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      message: null,
    }
  },

  computed: {
    theAvatarUrl() {
      return this.avatarUrl
    },
    theAvatarAlt() {
      return this.avatarAlt
    },
    theFullName() {
      return this.fullName
    },
    theJobTitle() {
      return this.jobTitle
    },
    theParagraphe() {
      return this.paragraphe
    },
    theInputPlaceholder() {
      return this.inputPlaceholder
    },
    theButtonLabel() {
      return this.buttonLabel
    },
  },
}
</script>

<style>
.chat {
  font-family: 'Montserrat', sans-serif;
  border-radius: 24px;
  overflow: hidden;
  background: #4643d3;
  color: white;
  position: relative;
}

.chat--hide {
  animation: closeChat 1.5s;
}

@keyframes closeChat {
  from {
    opacity: 1;
    max-height: 500px;
  }
  to {
    max-height: 0;
    padding-top: 0;
    padding-bottom: 0;
    opacity: 0;
  }
}

.chat__img-avatar {
  border-radius: 10rem;
  width: 40px;
  height: 40px;
}

@media (min-width: 414px) {
  .chat__img-avatar {
    width: 48px;
    height: 48px;
  }
}

.chat__close-btn {
  position: absolute;
  top: 22px;
  right: 32px;
  font-size: 13px;
  padding: 0;
  opacity: 0.5;
}

.chat__close-btn:hover,
.chat__close-btn:focus {
  opacity: 1;
  outline: none;
}

.chat__header {
  padding: 22px 32px;
  padding-bottom: 0;
}

.chat__img-container {
  display: flex;
}

.chat__img-container::after {
  content: '';
  display: block;
  width: 15px;
}

.chat__full-name {
  font-family: Montserrat;
  font-style: normal;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.25px;
  margin-bottom: 4px;
}

@media (min-width: 414px) {
  .chat__full-name {
    font-size: 18px;
    margin-bottom: 7px;
  }
}

.chat__job-title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 17px;
  color: #ffffff;
  opacity: 0.5;
  margin-bottom: 0;
}

@media (min-width: 414px) {
  .chat__job-title {
    font-size: 14px;
  }
}

.chat__body {
  margin-top: 17px;
  margin-bottom: 22px;
  padding: 0 32px;
}

.chat__paragraph {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
}

.chat__footer {
  background: white;
}

.chat__input {
  padding: 16px 32px;
  padding-right: 10px;
  border: none;
  outline: none;
  min-width: 0;
}

.chat__btn {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: right;
  text-transform: capitalize;
  color: #5856d7;
  background: transparent;

  padding: 16px 32px;
  padding-left: 10px;
}
</style>
