<template>
    <div>
      <header>
        <slot name="banner"></slot>
      </header>
      <main>
        <slot name="content"></slot>
      </main>
      <footer>
        <p>© 2024 Bakery Inc.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "MainLayout",
  };
  </script>
  
  <style scoped>
  header {
    width: 100%;
    height: 300px;
    background-color: #f0fff4;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  footer {
    text-align: center;
    padding: 10px;
    background-color: #d4ffd4;
  }
  </style>