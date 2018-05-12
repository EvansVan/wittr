self.addEventListener('fetch', function(event) {
  event.respondWith(
    new Response('Hello<strong class="a-winner-is-me"> World</strong>', {
      headers: {'Content-Type': 'text/html'}
    })
  );
});
