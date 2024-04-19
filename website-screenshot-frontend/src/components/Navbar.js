import React from "react";

function Navbar() {
  return (
    <div class="flex h-screen bg-gray-100">
      <div class="md:flex flex-col w-60 bg-gray-800">
        <div class="flex items-center justify-center h-16 bg-gray-900">
          <span class="text-white font-bold uppercase">Screenshot</span>
        </div>
        <div class="flex flex-col flex-1 overflow-y-auto">
          <nav class="flex-1 px-2 py-4 bg-gray-800">
            <a
              href="/"
              class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              Form
            </a>
            <a
              href="/list"
              class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Table List
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
