<template>
  <div id="navigation" class=" w-full bg-gray-800">
  <ul id="desktop-nav" class="hidden md:flex  ">
    <img src="../assets/img/stfi.png" alt="" width="80">

    <li class="relativer">
      <a href="/" class="block px-6 py-4 text-sm font-semibold text-white hover:bg-blue-600 hover:text-white">Home</a>
    </li>

    <li class="relative">
      <a href="#" class="block px-6 py-4 text-sm font-semibold text-white hover:bg-black hover:text-white"></a>
    </li>

  </ul>

  <ul id="mobile-nav" class="flex flex-col md:hidden">
    <li class="relative">
      <a id="current" href="#" class="block bg-blue-600 px-6 py-4 text-sm font-semibold text-white hover:bg-blue-600 hover:text-white"></a>
    </li>

    <li class="relative">
      <a href="#" class="block px-6 py-4 text-sm font-semibold text-white hover:bg-blue-600 hover:text-white"></a>
    </li>

    <li class="relative">
      <a href="#" class="block px-6 py-4 text-sm font-semibold text-white hover:bg-blue-600 hover:text-white"></a>
    </li>
   
    <li class="relative">
      <a href="#" class="block px-6 py-4 text-sm font-semibold text-white hover:bg-blue-600 hover:text-white"></a>
      <ul class="ml-5 flex flex-col bg-gray-800 hover:opacity-100">
        <li class="relative">
          <a href="#" class="block w-40 border-gray-800 px-4 py-2 font-sans text-xs text-gray-500 hover:bg-blue-600 hover:text-white"></a>
        </li>
        <li class="relative">
          <a href="#" class="block w-40 px-4 py-2 font-sans text-xs text-gray-500 hover:bg-blue-600 hover:text-white"> </a>
        </li>
      </ul>
    </li>

    <li class="relative">
      <a href="#" class="block px-6 py-4 text-sm font-semibold text-white hover:bg-blue-600 hover:text-white"></a>
    </li>
    <li class="relative">
      <a href="#" class="block px-6 py-4 text-sm font-semibold text-white hover:bg-blue-600 hover:text-white"></a>
    </li>
  </ul>
</div>


</template>