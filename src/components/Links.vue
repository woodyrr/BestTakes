<template>
    <div class="bg-[rgba(22,20,22,255)] border border-[#53494954] p-2 flex flex-col gap-2 w-64 rounded-lg text-base font-medium text-[--text2-color]">
        
        <RouterLink to="/create" class="flex justify-between items-center gap-4 hover:bg-[#09090B] px-4 py-2 rounded-md">
            <div class="text-[--text2-color]">Profile</div>
            <i class="fa-solid fa-gear text-[#999595]"></i>
        </RouterLink>

        <RouterLink to="/create" class="flex justify-between items-center gap-4 hover:bg-[#09090B] px-4 py-2 rounded-md">
            <div>Create</div>
            <i class="fa-solid fa-plus text-[#999595]"></i>
        </RouterLink>
        <!-- bg-[rgba(22,20,22,255)] -->
        
        <div class="flex flex-col gap-2">
            <div class="border border-[#53494954]"></div>

            <RouterLink to="/create" class="flex justify-between items-center gap-4 hover:bg-[#09090B] px-4 py-2 rounded-md">
                <div>Logout</div>
                <i class="fa-solid fa-unlock text-[#999595]"></i>
            </RouterLink>
        </div>
        <!-- <div class="bg-[#09090B]">hey</div> -->
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>