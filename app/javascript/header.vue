<template lang="pug">
#header
  nav#mainNav.navbar.navbar-expand-lg.navbar-dark.bg-dark.fixed-top
    .container
      a.navbar-brand.js-scroll-trigger(href='/#/') Home
      button.navbar-toggler(aria-controls='navbarResponsive', aria-expanded='false', aria-label='Toggle navigation', data-target='#navbarResponsive', data-toggle='collapse', type='button')
        span.navbar-toggler-icon
      #navbarResponsive.collapse.navbar-collapse
        ul.navbar-nav.ml-auto
          li.nav-item
            a.nav-link.js-scroll-trigger(href='#about') About
  header.bg-primary.text-white
    .container.text-center
      br
      br
      h1 Welcome
      p.lead Your Posts
</template>

<script>
</script>

<style scoped>
header {
  padding: 154px 0 100px;
}

@media (min-width: 992px) {
  header {
    padding: 25px 0 2px;
  }
}

section {
  padding: 150px 0;
}
</style>
