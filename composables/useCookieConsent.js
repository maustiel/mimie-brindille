// composables/useCookieConsent.js
import { ref, onMounted } from 'vue'

export function useCookieConsent() {
  // null = pas encore répondu, 'accepted' ou 'refused'
  const status = ref(null)

  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
    return match ? decodeURIComponent(match[2]) : null
  }

  function setCookie(name, value, days) {
    const d = new Date()
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = `${name}=${encodeURIComponent(value)};path=/;expires=${d.toUTCString()}`
  }

  onMounted(() => {
    const c = getCookie('cookie-consent')
    if (c === 'accepted') status.value = 'accepted'
    else if (c === 'refused') status.value = 'refused'
    else status.value = null
  })

  async function accept() {
    setCookie('cookie-consent', 'accepted', 365)
    status.value = 'accepted'
    // Envoi un log au serveur
    try {
      await fetch('/api/logConsent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ consent: 'accepted', date: new Date() })
      })
    } catch (e) {
      // tu peux gérer l’erreur ici
      console.warn('Erreur logConsent:', e)
    }
  }

  async function refuse() {
    setCookie('cookie-consent', 'refused', 365)
    status.value = 'refused'
    // Envoi un log au serveur
    try {
      await fetch('/api/logConsent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ consent: 'refused', date: new Date() })
      })
    } catch (e) {
      console.warn('Erreur logConsent:', e)
    }
  }

  return { status, accept, refuse }
}
