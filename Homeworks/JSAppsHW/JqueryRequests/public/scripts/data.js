var data = (function () {
  const USERNAME_STORAGE_KEY = 'username-key';

  // start users
  function userLogin(user) {
    localStorage.setItem(USERNAME_STORAGE_KEY, user);
    return Promise.resolve(user);
  }

  function userLogout() {
    localStorage.removeItem(USERNAME_STORAGE_KEY)
    return Promise.resolve();
  }

  function userGetCurrent() {
    return Promise.resolve(localStorage.getItem(USERNAME_STORAGE_KEY));
  }
  // end users

  // start threads
  function threadsGet() {
    return new Promise((resolve, reject) => {
      $.getJSON('api/threads')
        .done(resolve)
        .fail(reject);
    })
  }

  function threadsAdd(title) {
    
    return new Promise((resolve, reject) => {
      $.ajax({
        method:'post',
        url: 'api/threads',
        dataType:'json',
        contentType :'application/json',
        data:JSON.stringify({title:title})
      })
        .done(resolve)
        .fail(reject);
    });
  }

  function threadById(id) {
    return new Promise((resolve, reject) => {
      $.getJSON(`api/threads/${id}`)
        .done(resolve)
        .fail(reject);
    });
  }

  function threadsAddMessage(threadId, content) {
    return new Promise((resolve, reject) => {
      $.ajax({
        method:'post',
        url: `api/threads/${threadId}/messages`,
        dataType:'json',
        contentType :'application/json',
        data:JSON.stringify({content:content})
      })
        .done(resolve)
        .fail(reject);
    });
  }
  // end threads

  // start gallery
  function galleryGet() {
    const REDDIT_URL = `https://www.reddit.com/r/aww.json?jsonp=?`;
    return new Promise((resolve, reject) => {
      $.getJSON(REDDIT_URL)
        .done(resolve)
        .fail(reject);
    });
  }
  // end gallery

  return {
    users: {
      login: userLogin,
      logout: userLogout,
      current: userGetCurrent
    },
    threads: {
      get: threadsGet,
      add: threadsAdd,
      getById: threadById,
      addMessage: threadsAddMessage
    },
    gallery: {
      get: galleryGet,
    }
  }
})();