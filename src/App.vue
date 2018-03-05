<template>
  <div class="page">
    <header class="page__header">
      <h1>Mutambo</h1>
      <h2>Your awesome tournament generator</h2>
    </header>

    <main class="page__content page__content--center">
      <router-view></router-view>
    </main>

    <footer class="page__footer">
      <mut-logo></mut-logo>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
