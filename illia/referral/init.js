window._talkableq = window._talkableq || [];

var variables = {
  local: {
    site_id: 'illia',
    server: 'http://talkable.local:3000'
  },
  void: {
    site_id: 'illia',
    server: 'https://void.talkable.com'
  },
  prod: {
    site_id: 'illia',
    server: 'https://talkable.com'
  },
}


window._talkableq.push(["init", {
  site_id: variables[window.ENV].site_id,
  server: variables[window.ENV].server,
  email_capture_show_timeout: 0
}]);

