export const deleteCookie = (name) => {
  if(typeof window !== `undefined`) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  }
}

export const getCookie = (name) => {
  if(typeof window !== `undefined`) {
    const cookieName = `${name}=`
    const decodedCookie = decodeURIComponent(document.cookie)
    const cookieArray = decodedCookie.split(`;`)
    for(let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i]
      while(cookie.charAt(0) === ` `) {
        cookie = cookie.substring(1)
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length)
      }
    }
    return ``
  }
}

export const setCookie = (name, value, expiryDays) => {
  if(typeof window !== `undefined`) {
    const date = new Date()
    date.setTime(date.getTime() + (expiryDays * 24 * 60 * 60 * 1000))
    const expiry = `expires=${date.toUTCString()}`
    document.cookie = `${name}=${value};${expiry};path=/`  
  }
}