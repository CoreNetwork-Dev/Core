async function goto(site) {
    try {
        await registerSW();
      } catch (err) {
        console.log(err);
        throw err;
      }
    
      sessionStorage.setItem("url", __uv$config.prefix + __uv$config.encodeUrl(site))
      location.href = "/go/"
  }