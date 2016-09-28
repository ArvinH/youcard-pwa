self.addEventListener('fetch', function(event) {
  console.log('event.request', event.request);
  if (event.request.url.match('http://localhost:4000/youcard/cardstack_search')) {
    event.respondWith(
      fetch(event.request)
    );
  }
});
