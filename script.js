<script>
var footer = document.getElementById('footer');
var text = footer.innerHTML;

function animateText() {
  text = text[text.length - 1] + text.substring(0, text.length - 1);
  footer.innerHTML = text;

  setTimeout(animateText, 200);
}

animateText();
</script>