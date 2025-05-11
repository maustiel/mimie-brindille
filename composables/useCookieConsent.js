// composables/useCookieConsent.js
import { ref, onMounted } from 'vue'

export function useCookieConsent() {
  const status = ref(null) // null, 'accepted' ou 'refused'

  function getCookie(name) {
    const m = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
    return m ? decodeURIComponent(m[2]) : null
  }
  function setCookie(name, value, days) {
    const d = new Date()
    d.setTime(d.getTime() + days * 24*60*60*1000)
    document.cookie = `${name}=${encodeURIComponent(value)};path=/;expires=${d.toUTCString()}`
  }

  onMounted(() => {
    const c = getCookie('cookie-consent')
    status.value = c === 'accepted' ? 'accepted' : c === 'refused' ? 'refused' : null
  })

  async function accept() {
    setCookie('cookie-consent', 'accepted', 365)
    status.value = 'accepted'
  }
  async function refuse() {
    setCookie('cookie-consent', 'refused', 365)
    status.value = 'refused'
  }

  return { status, accept, refuse }
}
