<template lang="pug">
#footer
  footer.py-5.bg-dark.site-footer
    .container
      p.m-0.text-center.text-white Copyright © POSTCITY 2017

  
</template>

<script>
</script>

<style scoped>

* {
  margin: 0;
}
html, body {
  height: 100%;
}
.page-wrap {
  min-height: 100%;
  /* equal to footer height */
  margin-bottom: -142px; 
}
.page-wrap:after {
  content: "";
  display: block;
}
.site-footer, .page-wrap:after {
  height: 142px; 
}
.site-footer {
  background: orange;
}

</style>
