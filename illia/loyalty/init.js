function getUrlParams(search) {
    const hashes = search.slice(search.indexOf('?') + 1).split('&')
    const params = {}
    hashes.map(hash => {
        const [key, val] = hash.split('=')
        params[key] = decodeURIComponent(val)
    })
    return params
}

window._talkableq = window._talkableq || [];

const queryParams = getUrlParams(window.location.search)

var variables = {
    local: {
        site_id: queryParams.site || 'illia',
        server: 'http://talkable.local:3000'
    },
    void: {
        site_id: queryParams.site || 'illia-loyalty',
        server: 'https://void.talkable.com'
    },
    bastion: {
        site_id: queryParams.site || 'illia-loyalty',
        server: 'https://bastion.talkable.com'
    },
    prod: {
        site_id: queryParams.site || 'illia-loyalty',
        server: 'https://talkable.com'
    }
}

window._talkableq.push(["init", {
    site_id: variables[window.ENV].site_id,
    server: variables[window.ENV].server,
}]);

window._talkableq.push(["authenticate_customer", {
    email: getUrlParams(window.location.search).email || "test@gmail.com",
    first_name: "",
    last_name: "",
    traffic_source: "",
}]);
