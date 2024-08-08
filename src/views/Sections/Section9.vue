<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
</script>

<template>
    <section class="w-full h-screen flex justify-center items-center bg-primary-100">
        <div class="w-2/6 flex flex-col justify-center items-center">
            <div class="mb-4">
                <img src="@/assets/images/section9/logo.png" alt="">
            </div>
            <div>
                <span class="text-xl font-bold text-primary-300">近境 13 期 | 大慶站 | 忠明國道 | 2 房 3 房 | 23761070</span>
            </div>


            <div class="w-full p-6">
                <form action="" class="space-y-2">
                    <!-- 姓名 -->
                    <div class="flex items-center space-x-2 bg-white rounded-md p-2">
                        <label for="name" class="text-md font-bold text-primary-300 pr-2 border-r-2 border-primary-300">姓名</label>
                        <input id="name" type="text"
                            class="flex-1 border-none rounded-md p-1 focus:outline-none"
                            placeholder="輸入姓名" />
                    </div>

                    <!-- 電話 -->
                    <div class="flex items-center space-x-2 bg-white rounded-md p-2">
                        <label for="phone" class="text-md font-bold text-primary-300 pr-2 border-r-2 border-primary-300">電話</label>
                        <input id="phone" type="text"
                            class="flex-1 border-none rounded-md p-1 focus:outline-none"
                            placeholder="輸入電話" />
                    </div>

                    <!-- 性別 -->
                    <div class="flex items-center space-x-2">
                        <span class="text-md font-bold text-primary-300 pl-2">性別</span>
                        <label class="inline-flex items-center space-x-2 cursor-pointer">
                            <input type="radio" name="gender" value="male"
                                class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500" />
                            <span class="text-md font-bold text-primary-300">男生</span>
                        </label>
                        <label class="inline-flex items-center space-x-2 cursor-pointer">
                            <input type="radio" name="gender" value="female"
                                class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500" />
                            <span class="text-md font-bold text-primary-300">女生</span>
                        </label>
                    </div>

                    <!-- 訂閱 -->
                    <div class="flex items-center space-x-2 pl-12">
                        <input type="checkbox" id="interest" class="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                        <label for="interest" class="text-md font-bold text-primary-300">我有興趣了解</label>
                    </div>

                    <!-- 資料用途 -->
                    <div class="text-md font-bold text-primary-300 pl-12">
                        <span class="block mb-1">您所登錄的個人資料將做以下用途</span>
                        <ul class="list-none space-y-1">
                            <li>（一）本網站所載之相關事項通知</li>
                            <li>（二）客戶管理服務</li>
                            <li>（三）本公司行銷業務之推廣 / 本案實際內容以現場公布為準</li>
                        </ul>
                    </div>

                    <!-- 送出按鈕 -->
                    <div>
                        <button type="submit"
                            class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400 transition-300-out">
                            送出
                        </button>
                    </div>
                </form>
            </div>


        </div>
    </section>
</template>

<style scoped></style>
