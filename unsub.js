function toggleUnsubscribe() {
  const form = document.getElementById('unsubscribe');
  form.classList.toggle('hidden');
}

function showThankYou(event) {
  event.preventDefault();
  document.getElementById('newsletter-form').classList.add('hidden');
  document.getElementById('thank-you').classList.remove('hidden');
  event.target.submit();
}
