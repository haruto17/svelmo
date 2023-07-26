<script>
  let name = "world";

  function handleClick() {
    alert("no more alerts");
  }
</script>

<h1>Hello {name}!</h1>
<button on:click={handleClick}>Click me!!</button>
