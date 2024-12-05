<template>
    <MainLayout>
      <!-- 배너 슬롯 -->
      <template #banner>
        <Banner />
      </template>
  
      <!-- 컨텐츠 슬롯 -->
      <template #content>
        <History />
        <Recommended />
        <div class="utilities">
          <StoreLocator />
          <Announcements />
        </div>
        <div class="links">
          <FranchiseLink />
          <RecruitmentLink />
        </div>
      </template>
    </MainLayout>
  </template>
  
  <script>
  import MainLayout from "@/layouts/MainLayout.vue";
  import Banner from "@/components/Banner.vue";
  import History from "@/components/History.vue";
  import Recommended from "@/components/Recommended.vue";
  import StoreLocator from "@/components/StoreLocator.vue";
  import Announcements from "@/components/Announcements.vue";
  import FranchiseLink from "@/components/FranchiseLink.vue";
  import RecruitmentLink from "@/components/RecruitmentLink.vue";
  
  export default {
    components: {
      MainLayout,
      Banner,
      History,
      Recommended,
      StoreLocator,
      Announcements,
      FranchiseLink,
      RecruitmentLink,
    },
  };
  </script>
  
  <style scoped>
  .utilities,
  .links {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }
  
  .links .card {
    flex: 1;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }
  
  .links .card:hover {
    background-color: #d4ffd4;
  }
  </style>