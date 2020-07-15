<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  body,html,#app {
    height: 100%;
    overflow-y: hidden;
    /*background-color: #E9EEF3;*/
  }
  ul {
    list-style: none;
  }
  .clear-btn-style {
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    outline: none;
  }
  .menu::-webkit-scrollbar {
    width: 4px;
    height: 1px!important;
  }
  .menu::-webkit-scrollbar-thumb {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3) inset;
    background-color: rgb(255, 208, 75);
    border-radius: 4px;
  }
  .menu::-webkit-scrollbar-track {

  }
</style>
