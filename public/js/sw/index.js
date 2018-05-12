self.addEventListener('fetch', function(event) {
  event.respondWith(
    new Response('Hello<b class="a-winner-is-me"> World</b>', {
      headers: {'Content-Type': 'text/html'}
    })
  );
});
