<template>
    <div class="mut-input">
      <input class="mut-input__effect" :type="type"  v-model="inputValue" @focusout="focussed()">
      <label class="mut-input__label">{{label}}</label>
      <span class="mut-input__border"></span>
  </div>
</template>

 <script>
export default {
  data: () => ({
    inputValue: ""
  }),
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text'
    },
  },
  methods: {
    focussed() {
      console.log(this.inputValue, this.inputValue !== "");
      this.$el.classList.toggle(
        "mut-input--has-content",
        this.inputValue !== ""
      );
    }
  }
};
</script>

<style>
:focus {
  /* TODO: global */
  outline: none;
}

.mut-input {
  position: relative;
  margin-top: 30px;
}

.mut-input__effect {
  background-color: transparent;
  border: 0;
  box-sizing: border-box;
  border-bottom: 1px solid white;
  color: white;
  font: 15px/24px "Lato", Arial, sans-serif;
  letter-spacing: 1px;
  padding: 4px 0;
  width: 100%;
}

.mut-input__effect ~ .mut-input__border {
  background-color: hotpink;
  bottom: 0;
  height: 2px;
  left: 0;
  position: absolute;
  transition: 0.4s;
  width: 0;
}
.mut-input__effect:focus ~ .mut-input__border,
.mut-input--has-content .mut-input__effect ~ .mut-input__border {
  transition: 0.4s;
  width: 100%;
}
.mut-input__effect ~ .mut-input__label {
  color: white;
  left: 0;
  letter-spacing: 0.5px;
  pointer-events: none;
  position: absolute;
  top: 9px;
  transition: 0.3s;
  width: 100%;
}
.mut-input__effect:focus ~ .mut-input__label,
.mut-input--has-content .mut-input__effect ~ .mut-input__label {
  color: hotpink;
  font-size: 12px;
  top: -16px;
  transition: 0.3s;
}
</style>
