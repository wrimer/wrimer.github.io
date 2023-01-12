window._talkableq = window._talkableq || [];

var variables = {
  void: {
    site_id: 'illia',
    server: 'https://void.talkable.com'
  },
  local: {
    site_id: 'illia',
    server: 'http://admin.talkable.local:3000/'
  }
}

if (window.ENV === 'void') {
  window.talkablePlacementsConfig = {"placements":[{"id":213129,"inclusion_matcher":{"blank":true},"inclusion_matchers":[{"blank":true}],"exclusion_matchers":[],"event_category":"purchase","device_types":["desktop","tablet","mobile"],"appearance":"popup","static_html":[]},{"id":213130,"inclusion_matcher":{"blank":true},"inclusion_matchers":[{"blank":true}],"exclusion_matchers":[],"event_category":"affiliate_member","device_types":["desktop","tablet","mobile"],"appearance":"inline","static_html":[]},{"id":213131,"inclusion_matcher":{"blank":true},"inclusion_matchers":[{"blank":true}],"exclusion_matchers":[],"event_category":"affiliate_member","device_types":["desktop","tablet","mobile"],"appearance":"gleam","static_html":[]},{"id":213132,"inclusion_matcher":{"blank":true},"inclusion_matchers":[{"blank":true}],"exclusion_matchers":[],"event_category":"affiliate_member","device_types":["desktop","tablet","mobile"],"appearance":"widget","static_html":[]}],"integration_id":"illia","site_url":"http://dsadadda.com","timestamp":1580237490};
}


window._talkableq.push(["init", {
  site_id: variables[window.ENV].site_id,
  server: variables[window.ENV].server,
  email_capture_show_timeout: 0
}]);

window._talkableq.push(["authenticate_customer", {
  email: "",
  first_name: "",
  last_name: "",
  traffic_source: "",
}]);
