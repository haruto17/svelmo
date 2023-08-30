<script lang="ts">
  import Category from "./lib/Category.svelte";
  import { signInWithPopup } from "firebase/auth";
  import { auth, provider, db } from "./firebase";
  import { authStore } from "./store";
  import { doc, setDoc } from "firebase/firestore";
  import "./app.css";

  function addCategory() {
    let li = document.createElement("li");
    li.className = "list-memo";
    let categoryList = document.getElementById("categoryList");
    categoryList.appendChild(li);

    new Category({ target: li });
  }

  async function handleLoginWithGithub() {
    try {
      const res = await signInWithPopup(auth, provider);
      authStore.set({ ...$authStore, loggedIn: true, user: res.user });
      await setDoc(doc(db, "cities", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA",
      });
    } catch (e) {
      console.log(e);
    }
  }
</script>

<svelte:window on:load={handleLoginWithGithub} />

<main>
  <div class="flex flex-row mx-5 my-10">
    <ul id="categoryList" class="flex overflow-x-auto overflow-y-hidden" />

    <div class="tooltip tooltip-top" data-tip="add category">
      <button class="btn btn-accent h-[80vh]" on:click={addCategory}>+</button>
    </div>
  </div>

  <footer class="footer footer-center p-4 bg-base-300 text-base-content">
    <div>
      <p>Copyright © 2023 - All right reserved by <a href="https://github.com/haruto17"><b>haruto17</b></a></p>
    </div>
  </footer>
</main>

<style></style>
